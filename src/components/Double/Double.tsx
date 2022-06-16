interface propsBox {
  name: string
  score: number
}

interface propsDouble {
  team1: propsBox
  team2: propsBox
  left?: boolean
  right?: boolean
  midLine?: boolean
  longLine?: boolean
}

const Box: React.FC<propsBox> = ({ name, score }) => {
  return (
    <div
      className={`w-full flex justify-between py-1 px-2 border-l-4 rounded-lg border-red-400 cursor-auto`}
    >
      <span className="box-name">{name}</span>
      <span className="box-score">{score}</span>
    </div>
  )
}

const Double: React.FC<propsDouble> = ({
  team1,
  team2,
  left,
  right,
  midLine,
  longLine
}) => {
  return (
    <div className="w-40 relative bg-white rounded-[8px] z-10">
      <Box name={team1.name} score={team1.score} />
      {right ? (
        <div className="w-20 h-[2px] bg-white absolute right-0 translate-x-[100%]"></div>
      ) : (
        <div></div>
      )}
      {left ? (
        <div
          className={`w-20 h-[2px] bg-white absolute translate-x-[-100%] 
        before:w-[2px] before:bg-white before:absolute before:translate-y-[-50%] before:h-40
        ${midLine ? "before:h-20" : ""} ${longLine ? "before:h-[344px]" : ""}
        `}
        ></div>
      ) : (
        <div></div>
      )}
      <Box name={team2.name} score={team2.score} />
    </div>
  )
}

export default Double
