import TreeBraket from "Pages/TreeBraket/TreeBraket"
import Search from "Pages/Search/Search"

const App: React.FC = () => {
  return (
    <div className="relative w-full flex">
      <Search />
      <div className="flex-1 bg-orange-400 h-screen">
        {/* <TreeBraket /> */}
      </div>
    </div>
  )
}

export default App
