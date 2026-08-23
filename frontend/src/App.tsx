import { useState } from 'react'
import { AccessibleButton } from './components/AccessibleButton'

function App() {
  const [message, setMessage] = useState('Welcome to eSIM Market.')

  return (
    <main className="page">
      <section className="card" aria-labelledby="page-title">
        <p className="eyebrow">eSIM Market</p>
        <h1 id="page-title">Hello World</h1>
        <p aria-live="polite">{message}</p>
        <AccessibleButton onPress={() => setMessage('Hello eSIM Market!')}>
          Get Started
        </AccessibleButton>
      </section>
    </main>
  )
}

export default App
