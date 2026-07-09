import { useState } from 'react'

const Button = ({ type, onClick }) => {
  return <button onClick={onClick}>{type}</button>
}

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good * 1 + 0 * neutral + -1 * bad) / total
  const pct_positive = (good / total) * 100

  if (total > 0) {
    return (
      <div>
        <h2>statistics</h2>

        <StatisticLine text="good" value={good}></StatisticLine>
        <StatisticLine text="neutral" value={neutral}></StatisticLine>
        <StatisticLine text="bad" value={bad}></StatisticLine>
        <StatisticLine text="all" value={total}></StatisticLine>
        <StatisticLine text="avg" value={average}></StatisticLine>
        <StatisticLine
          text="positive"
          value={pct_positive + '%'}
        ></StatisticLine>
      </div>
    )
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <div>No feedback given</div>
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
