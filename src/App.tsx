import React from "react"
import "./App.css"
import Round from "./components/Round/Round"
import { data } from "./data"

interface team {
  name: string
  score: number
}

interface rounds {
  match: number
  team1: team
  team2: team
}

const App: React.FC = () => {
  const {
    round16,
    semiFinals,
    quarterFinals,
    final
  }: {
    round16: rounds[]
    semiFinals: rounds[]
    quarterFinals: rounds[]
    final: rounds[]
  } = data

  return (
    <div className="App">
      <Round data={round16} />
      <Round data={quarterFinals} />
      <Round data={semiFinals} />
      <Round data={final} />
    </div>
  )
}

export default App
