import Round from "../../components/Round/Round"
import { rounds } from "../../interface"
import { useRecoilValue } from "recoil"
import { matchsState } from "State/matchsState"
import { infoTournamentState } from "State/infoTournamentState"

const TreeBraket: React.FC = () => {
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
  } = useRecoilValue(matchsState)

  const infor = useRecoilValue(infoTournamentState)

  return (
    <div className="min-h-screen flex ml-8 relative animate-fadeIn">
      {infor.total === 16 ? (
        <>
          <Round data={round16} name="Round16" right={true} />
          <Round
            data={quarterFinals}
            name="QuarterFinals"
            right={true}
            left={true}
            midLine={true}
          />
          <Round data={semiFinals} name="SemiFinals" right={true} left={true} />
          <Round data={final} name="Final" left={true} longLine={true} />
        </>
      ) : (
        <>
          <Round
            data={quarterFinals}
            name="QuarterFinals"
            right={true}
            midLine={true}
          />
          <Round data={semiFinals} name="SemiFinals" right={true} left={true} />
          <Round data={final} name="Final" left={true} longLine={true} />
        </>
      )}
    </div>
  )
}

export default TreeBraket
