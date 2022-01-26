import * as fs from 'fs'
import * as inquirer from 'inquirer'
import cli from 'cli-ux'
import componentTemplate from '../../inc/templates/componentTemplate'
import styledComponentTemplate from '../../inc/templates/styledComponentTemplate'
import { Command } from '@oclif/core'

export default class Component extends Command {
  static description = ''
  static examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const name = await cli.prompt('Name')
    const stylesResponse = await inquirer.prompt([
      {
        name: 'styles',
        message: 'Do you want to add component styled?',
        type: 'confirm',
        choices: [{ name: 'Yes' }],
      },
    ])

    fs.mkdir(name, (error) => {
      if (error) throw error

      fs.writeFile(
        `${name}/${name}.tsx`,
        componentTemplate({
          name,
        }),
        (err: any) => {
          if (err) throw err
          console.log(`Component ${name} created!`)
        }
      )

      if (stylesResponse.styles) {
        fs.writeFile(
          `${name}/${name}.styled.ts`,
          styledComponentTemplate({
            name,
          }),
          (err: any) => {
            if (err) throw err
            console.log(`Component styled created!`)
          }
        )
      }
    })
  }
}
