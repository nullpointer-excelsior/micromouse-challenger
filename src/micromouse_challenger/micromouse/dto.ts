export interface GameOverResponse {
    isWinner: boolean
}

export interface SetupGame {
    code: string 
    matrix: string[][]
}