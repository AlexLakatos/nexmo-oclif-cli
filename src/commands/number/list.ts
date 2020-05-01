import { Command, flags } from '@oclif/command'
import * as Nexmo from 'nexmo'
import * as fs from 'fs-extra'
import * as path from 'path'
import { cli } from 'cli-ux'

export default class NumberList extends Command {
  static description = 'List all numbers on your account.'

  static flags = {
    help: flags.help({ char: 'h' }),
    size: flags.integer({ char: 's', description: 'The amount of results to return' }),
    debug: flags.boolean({ char: 'd', description: 'Show debug information' }),
    index: flags.integer({ char: 'i', description: 'The page of results to return' }),
    pattern: flags.string({ char: 'p', description: "pattern to be matched in number (use * to match end or start of number)" }),
    format: flags.boolean({ char: 'f', description: "Format the output of the command" }),
    filter: flags.string({description: 'filter property by partial string matching, ex: name=foo'}),
    csv: flags.boolean({exclusive: ['no-truncate'], description: 'output is csv format'}),
  }

  async run() {
    const { flags } = this.parse(NumberList)

    const size = flags.size || '20'
    const index = flags.index || '1'
    const pattern = flags.pattern || ""
    const debug = flags.debug || false
    const format = flags.format || false
    const search_pattern = 1

    const userConfig = await fs.readJSON(path.join(this.config.configDir, 'nexmo-config.json'))

    const nexmo = new Nexmo({
      apiKey: userConfig.apiKey,
      apiSecret: userConfig.apiSecret
    }, { debug: debug })

    nexmo.number.get({ index, size, pattern, search_pattern }, (err: any, response: any) => {
      if (format == false) {
        this.log(response.numbers.map(number => number.msisdn).join("\n"))
      } else {
        cli.table(response.numbers, {
          country: {
            minWidth: 2,
          },
          msisdn: {
            minWidth: 10
          },
          features: {
            get: row => row.features.join(",")
          },
        }, {
          printLine: this.log,
          ...flags,
        })
      }
    })
  }
}
