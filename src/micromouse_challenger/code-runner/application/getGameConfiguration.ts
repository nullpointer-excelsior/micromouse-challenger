interface Configuration {
    gameTimeout: `${number}:${number}`
}

export default function getGameConfiguration(): Configuration {
    if (import.meta.env.PROD) {
        return {
            gameTimeout: "05:00"
        }
    }
    return {
        gameTimeout: "00:03"
    }
}