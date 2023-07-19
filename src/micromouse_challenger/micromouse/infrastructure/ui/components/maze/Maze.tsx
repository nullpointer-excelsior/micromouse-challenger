import './Maze.css'
import { useMazeState } from '../../state/maze.state';
import { MouseMaze } from '../../../../domain';


export default function Maze() {
 
    const { mousePosition, maze } = useMazeState()
    const cells = MouseMaze.mapMatrixToCells(maze)
    
    return (
        <div className="tablero">
          {cells.map((row, filaIndex) => (
            <div key={filaIndex} className="fila">
              {row.map((celda, celdaIndex) => (
                <div key={celdaIndex} className={`celda ${celda.type}`}>
                    {mousePosition === celda.position? '🐭' : ''}
                </div>
              ))}
            </div>
          ))}
        </div>
      );

}
