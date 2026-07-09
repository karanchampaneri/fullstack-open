import { useState } from 'react'

const Button = ({ type, onClick }) => {
  return <button onClick={onClick}>{type}</button>
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good * 1 + 0 * neutral + -1 * bad) / total
  let pct_postive = (good / total) * 100

  if (total > 0) {
    return (
      <div>
        <h2>statistics</h2>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {total}</div>
        <div>avg {average}</div>
        <div>positive {pct_postive} %</div>
      </div>
    )
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <div>no feedback given</div>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button type="good" onClick={handleGoodClick}></Button>
      <Button type="neutral" onClick={handleNeutralClick}></Button>
      <Button type="bad" onClick={handleBadClick}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App
