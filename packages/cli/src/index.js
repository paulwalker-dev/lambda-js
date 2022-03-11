import * as Lambda from '@lambda/lib'
import prompts from 'prompts'

const main = async () => {
  const responce = await prompts({
    type: 'number',
    message: 'Choose a number',
  })

  console.log(responce)
}

main()
