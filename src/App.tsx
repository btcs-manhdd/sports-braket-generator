import Round from "./components/Round/Round"
import { data } from "./data"
import { rounds } from "./interface"

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
    <div className="h-screen flex ml-8 relative">
      <Round data={round16} name="Round16" right={true} />
      <Round data={quarterFinals} name="QuarterFinals" right={true} left={true}/>
      <Round data={semiFinals} name="SemiFinals" right={true} left={true}/>
      <Round data={final} name="Final" left={true} />
    </div>
  )
}

export default App
