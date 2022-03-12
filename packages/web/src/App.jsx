import { useEffect, useState } from 'react'
import * as Lambda from '@lambda/lib'

const App = () => {
  const [number, setNumber] = useState('0')
  const [squared, setSquared] = useState(0)
  const [subtracted, setSubtracted] = useState(0)

  const [error, setError] = useState(false)

  useEffect(() => {
    const newNumber = parseInt(number, 10)
    setError(false)

    if (!Number.isNaN(newNumber)) {
      try {
        const LambdaNumber = Lambda.ToNum(newNumber)
        const LambdaSquared = Lambda.Power(LambdaNumber)(Lambda.ToNum(2))
        const LambdaSubtracted = Lambda.Subtract(LambdaSquared)(LambdaNumber)

        setSquared(Lambda.JSNum(LambdaSquared))
        setSubtracted(Lambda.JSNum(LambdaSubtracted))
      } catch (err) {
        console.error(err)

        setError(true)
      }
    }
  }, [number])

  return (
    <div>
      <input onChange={e => setNumber(e.target.value)} value={number} />

      {error ? (
        <h1>ERROR: Number to large</h1>
      ) : (
        <>
          <p>Squared: {squared}</p>
          <p>Subtracted: {subtracted}</p>
        </>
      )}
    </div>
  )
}

export default App
