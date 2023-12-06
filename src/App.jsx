import { useState } from 'react'
import { Button } from '@/components/Button'

export function App() {
  const [state, setState] = useState(0)

  return (
    <div>
      <p>Count: {state}</p>
      <Button onClick={() => setState((prev) => prev + 1)}>Increment</Button>
      <br />
      <Button onClick={() => setState(0)}>Reset</Button>
    </div>
  )
}
