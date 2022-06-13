import './Double.css'


interface propsBox {
  name: string,
  score: number
}

function Box({name, score}:propsBox){
  return(
    <div className="box">
      <span className="box-name">{name}</span>
      <span className="box-score">{score}</span>
    </div>
  )
}


function Double() {
  return (
    <div className="double">
      <Box name="Anh" score={1}/>
      <Box name="Đức" score={4}/>
    </div>
  )
}

export default Double
