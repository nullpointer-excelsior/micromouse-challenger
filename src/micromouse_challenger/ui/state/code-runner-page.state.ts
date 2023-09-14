import { create } from 'zustand'
import { getCodeExample } from '../../code-runner/application/getCodeExample'
import { persist } from 'zustand/middleware'

export interface CodeRunnerPageState {
    code: string
    setCode: (code: string) => void
}

const defaultState = {
    code: getCodeExample()
}

export const useCodeRunnerPageState = create(
    persist(
        (set) => ({
            ...defaultState,
            setCode: (code: string) => set({ code })
        }),
        {
            name: "code-runner-page"
        }
    )
) as any

