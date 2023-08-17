import { CodeRunnerWorker } from "../domain/CodeRunnerWorker"

export function createCodeRunnerWorker(): CodeRunnerWorker {
    const worker = new Worker(new URL("./micromouseWorker.ts", import.meta.url), { type: "module"})
    return new CodeRunnerWorker(worker)
}