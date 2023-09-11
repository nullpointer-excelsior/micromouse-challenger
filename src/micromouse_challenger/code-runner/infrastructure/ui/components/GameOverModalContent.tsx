import React from 'react'

export default function GameOverModalContent() {
    return (
        <div className="flex items-center justify-center">
            <svg className="fill-purple-500 w-20 h-20" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M222.13,64.27C167.64,73.36,118.85,107.49,90,154.32c-23,37.35-28.57,78.25-28.57,121.12V381.19A18,18,0,0,0,79.1,398.88h34.39v33.86a18,18,0,0,0,17.69,17.69H379.07a18,18,0,0,0,17.69-17.69V398.61H432.9a18,18,0,0,0,17.69-17.69V255.84C449,136,340.8,44.48,222.13,64.27ZM102.08,215c26.45-99.64,144.2-149,233.6-97,49.33,28.65,78.75,81.13,79.53,137.85V363.23H379.07a18,18,0,0,0-17.69,17.69v34.13H148.87V381.19a18,18,0,0,0-17.69-17.7H96.79v-58.8C96.79,275,94.4,244,102.08,215Z"></path><path d="M164.64,278l-9.6,9.6c-16.12,16.12,8.89,41.15,25,25l9.61-9.61,9.6,9.61c16.12,16.12,41.15-8.89,25-25l-9.6-9.6,9.6-9.61c16.12-16.12-8.89-41.14-25-25l-9.6,9.61-9.61-9.61c-16.12-16.12-41.14,8.89-25,25Z"></path><path d="M297.32,278l-9.61,9.6c-16.12,16.12,8.89,41.15,25,25l9.6-9.61,9.61,9.61c16.12,16.12,41.14-8.89,25-25l-9.61-9.6,9.61-9.61c16.12-16.12-8.89-41.14-25-25l-9.61,9.61-9.6-9.61c-16.12-16.12-41.15,8.89-25,25Z"></path></g></svg>
            <p className="my-4 text-slate-500">Que mal tu micromouse no pudo encontrar la salida. puedes seguir intentandolo!</p>
        </div>
    )
}
