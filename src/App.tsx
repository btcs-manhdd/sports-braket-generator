import "./App.css"
import Round from "./components/Round/Round"

function App() {
  return (
    <div className="App">
      <Round quantity={8}/>
      <Round quantity={4}/>
      <Round quantity={2}/>
      <Round quantity={1}/>
    </div>
  )
}

export default App
