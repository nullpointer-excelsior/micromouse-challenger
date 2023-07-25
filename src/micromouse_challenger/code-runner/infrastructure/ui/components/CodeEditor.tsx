import { Editor } from "@monaco-editor/react"

export default function CodeEditor({ onChange, defaultValue}) {
    return (
        <div className="border-slate-500 border-8 rounded h-full">
            <Editor
                height="50vh"
                width="90vh"
                defaultLanguage="typescript"
                theme='vs-dark'
                defaultValue={defaultValue}
                onChange={onChange}
                />
        </div>
    )
}