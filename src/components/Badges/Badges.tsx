import { infoTournamentState } from "State/infoTournamentState"
import { tonggleState } from "State/tonggleState"
import { useRecoilState } from "recoil"

interface propsBadgeItem {
  title: string
  color: string
  handleSetName: Function
}

const BadgeItem: React.FC<propsBadgeItem> = ({
  title,
  color,
  handleSetName
}) => {
  return (
    <span
      className={`cursor-pointer px-3 py-1.5 text-xs rounded-full ${color}`}
      onClick={() => handleSetName(title)}
    >
      {title}
    </span>
  )
}

const Badges: React.FC = () => {
  const [info, setInfo] = useRecoilState(infoTournamentState)
  const [tonggle, setTonggle] = useRecoilState(tonggleState)

  const handleSetName = (name: string) => {
    setInfo({ ...info, name: name })
    setTonggle({...tonggle, showTree: false})
  }
  return (
    <div className="space-x-4 mt-2">
      <BadgeItem
        title="Premier League"
        color="text-white bg-orange-400"
        handleSetName={handleSetName}
      />
      <BadgeItem
        title="Laliga"
        color="text-white bg-yellow-400"
        handleSetName={handleSetName}
      />
      <BadgeItem
        title="Seria"
        color="text-white bg-slate-500"
        handleSetName={handleSetName}
      />
    </div>
  )
}

export default Badges
