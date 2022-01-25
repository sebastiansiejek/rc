import { Command } from '@oclif/core'
import cli from 'cli-ux'

export default class Component extends Command {
  static description = ''
  static examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const name = await cli.prompt('Name')
  }
}
