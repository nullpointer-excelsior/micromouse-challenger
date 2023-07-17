import './Maze.css'
import { useMazeState } from '../../state/maze.state';


const Maze = () => {
 

    const { maze, mousePosition } = useMazeState()

    return (
        <div className="tablero">
          {maze.map((fila, filaIndex) => (
            <div key={filaIndex} className="fila">
              {fila.map((celda, celdaIndex) => (
                <div key={celdaIndex} className={`celda ${celda.type}`}>
                    {mousePosition === celda.position? '🐭' : ''}
                </div>
              ))}
            </div>
          ))}
        </div>
      );

}

export default Maze;
