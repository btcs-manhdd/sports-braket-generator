import Double from "../Double/Double"
import { rounds } from "../../interface"

interface Props {
  data: rounds[]
  name: string
  left?: boolean
  right?: boolean
}

const Round: React.FC<Props> = ({ data, name, left, right }) => {
  return (
    <div className="relative flex flex-col justify-around mr-40 mt-8">
      <h1 className="absolute -top-4">{name}</h1>
      {data.map((item, index) => (
        <Double
          key={index}
          team1={item.team1}
          team2={item.team2}
          left={left}
          right={right}
        />
      ))}
    </div>
  )
}

export default Round
