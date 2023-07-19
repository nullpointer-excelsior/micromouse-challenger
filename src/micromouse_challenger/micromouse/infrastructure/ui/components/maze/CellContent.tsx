
const values = {
    'S': '🏆'
}

export default function CellContent({ cell, mousePosition }) {

    if (mousePosition === cell.position) {
        return <>🐭</>
    }
    return (
        <p>
            {values[cell.type]}
        </p>
    )
}