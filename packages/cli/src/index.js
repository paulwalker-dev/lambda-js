import * as Lambda from '@lambda/lib'
import prompts from 'prompts'
import chalk from 'chalk'

const main = async () => {
  const responce = await prompts({
    type: 'number',
    name: 'x',
    message: 'Choose a number',
  })

  const Number = Lambda.ToNum(responce.x)
  const Squared = Lambda.Square(Number, Lambda.ToNum(2))
  const Subtracted = Lambda.Subtract(Squared, Number)
}

main()
