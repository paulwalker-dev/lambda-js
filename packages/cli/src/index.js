import Lambda from '@lambda-js/lib'
import prompts from 'prompts'
import chalk from 'chalk'

const main = async () => {
  const responce = await prompts({
    type: 'number',
    name: 'x',
    message: 'Choose a number',
  })

  const Number = Lambda.ToNum(responce.x)
  const Squared = Lambda.Power(Number)(Lambda.ToNum(2))
  const Subtracted = Lambda.Subtract(Squared)(Number)

  console.log(
    `${chalk.green('Squared')}${chalk.red(':')} ${chalk.blue(
      Lambda.JSNum(Squared)
    )}`
  )
  console.log(
    `${chalk.green('Subtracted')}${chalk.red(':')} ${chalk.blue(
      Lambda.JSNum(Subtracted)
    )}`
  )
}

main()
