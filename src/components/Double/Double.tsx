import "./Double.css"

interface propsBox {
  name: string
  score: number
}

interface propsDouble {
  team1: propsBox
  team2: propsBox
}

const Box: React.FC<propsBox> = ({ name, score }) => {
  return (
    <div className="box">
      <span className="box-name">{name}</span>
      <span className="box-score">{score}</span>
    </div>
  )
}

const Double: React.FC<propsDouble> = ({ team1, team2 }) => {
  return (
    <div className="double">
      <Box name={team1.name} score={team1.score} />
      <Box name={team2.name} score={team2.score} />
    </div>
  )
}

export default Double
