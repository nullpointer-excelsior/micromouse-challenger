import './MazeView.css'


export default function MazeView(props: { maze: string[][]}) {
 
    const { maze } = props

    if (!maze) {
      return <p>No hay laberinto</p>
    }

    return (
        <div className="tablero">
          {maze.map((row, filaIndex) => (
            <div key={filaIndex} className="fila">
              {row.map((celda, celdaIndex) => (
                <div key={celdaIndex} className={`celda ${celda}`}>
                </div>
              ))}
            </div>
          ))}
        </div>
      );

}
