const fs = require('fs')
import cli from 'cli-ux'
import { Command } from '@oclif/core'
import componentTemplate from '../../inc/templates/componentTemplate'
export default class Component extends Command {
  static description = ''
  static examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const name = await cli.prompt('Name')

    fs.writeFile(
      `${name}.tsx`,
      componentTemplate({
        name,
      }),
      (err: any) => {
        if (err) throw err
        console.log(`Component ${name} created!`)
      }
    )
  }
}
