import React from "react"
import Double from "../Double/Double"
import "./Round.css"

interface team {
  name: string
  score: number
}

interface rounds {
  match: number
  team1: team
  team2: team
}
interface Props {
  data: rounds[]
}

const Round: React.FC<Props> = ({ data }) => {
  return (
    <div className="round">
      {data.map(item => (
        <Double team1={item.team1} team2={item.team2} />
      ))}
    </div>
  )
}

export default Round
