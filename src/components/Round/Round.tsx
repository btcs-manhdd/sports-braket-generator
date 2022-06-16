import Double from "../Double/Double"
import { rounds } from "../../interface"

interface Props {
  data: rounds[]
  name: string
  left?: boolean
  right?: boolean
  midLine?: boolean
  longLine?: boolean
}

const Round: React.FC<Props> = ({
  data,
  name,
  left,
  right,
  midLine,
  longLine
}) => {
  return (
    <div className="relative flex flex-col justify-around mr-40 mt-8">
      <h1 className="absolute -top-4 text-white text-xl">{name}</h1>
      {data.map((item, index) => (
        <Double
          key={index}
          team1={item.team1}
          team2={item.team2}
          left={left}
          right={right}
          midLine={midLine}
          longLine={longLine}
        />
      ))}
    </div>
  )
}

export default Round
