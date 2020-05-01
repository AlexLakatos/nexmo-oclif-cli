import { Command, flags } from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'

export default class Setup extends Command {
  static description = 'Setup the Nexmo CLI using your API Key and Secret'

  static flags = {
    help: flags.help({ char: 'h' }),
    "api-key": flags.string({ char: 'k', description: 'Nexmo API Key' }),
    "api-secret": flags.string({ char: 's', description: 'Nexmo API Secret' }),
  }

  static args = [{ name: "apiKey", description: "Your Nexmo API Key." }, { name: "apiSecret", description: "Your Nexmo API Secret." }]

  async run() {
    const { args, flags } = this.parse(Setup)

    const apiKey = flags["api-key"] || args.apiKey
    const apiSecret = flags["api-secret"] || args.apiSecret

    const configFile = path.join(this.config.configDir, 'nexmo-config.json')

    try {
      await fs.ensureFile(configFile)
      await fs.writeJson(configFile, {apiKey, apiSecret})
      this.log(`Succesfully wrote credentials to the config file: ${configFile}.`)
    } catch (error) {
      this.log(`There was an error while trying to write to the config file: ${configFile}.`, )
    }

  }
}
