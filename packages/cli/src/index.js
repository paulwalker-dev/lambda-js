import Lambda from '@lambda-js/lib'
import prompts from 'prompts'

const main = async () => {
  const responce = await prompts({
    type: 'number',
    name: 'x',
    message: 'Choose a number',
  })

  const Number = Lambda.ToNum(responce.x)
  const Squared = Lambda.Power(Number)(Lambda.ToNum(2))
  const Subtracted = Lambda.Subtract(Squared)(Number)

  console.log(Lambda.JSNum(Squared))
  console.log(Lambda.JSNum(Subtracted))
}

main()
