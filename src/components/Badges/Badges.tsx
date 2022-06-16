import { infoTournamentState } from "State/infoTournamentState"
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

  const handleSetName = (name: string) => {
    setInfo({...info, name: name})
  }
  return (
    <div className="space-x-4 mt-2">
      <BadgeItem
        title="Premier League"
        color="text-purple-800 bg-purple-100"
        handleSetName={handleSetName}
      />
      <BadgeItem
        title="Laliga"
        color="text-cyan-800 bg-cyan-100"
        handleSetName={handleSetName}
      />
      <BadgeItem
        title="Seria"
        color="text-slate-800 bg-slate-100"
        handleSetName={handleSetName}
      />
    </div>
  )
}

export default Badges
