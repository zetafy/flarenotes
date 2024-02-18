'use client'
import { Textarea } from "@/components/ui/textarea";
import Editor from "@monaco-editor/react";
import Markdown from 'react-markdown';
import { Separator } from "@/components/ui/separator";
import { useState } from 'react';
import remarkGfm from 'remark-gfm';

interface Params {
    params: { notesId: string }
}

export default function NotesEditor({ params }: Params) {
    const { notesId } = params;
    const [editorContent, setEditorContent] = useState("Default notes");

    const handleContentChange = (newValue: string) => {
        setEditorContent(newValue)
    }
    return (
        <main>
            <div className="grid container c max-w-[50rem] ml-0 bg-amber-50 bg-opacity-50">
            <h1 className="mb-3">Notes page {notesId} - Notes title goes here</h1>
            <div className="w-[75%]">
                <Editor 
                    height="500px"
                    language="markdown"
                    theme="vs-light"
                    value="Your default notes goes here"
                    options={{
                        formatOnType: true
                    }}
                    remarkPlugins={[remarkGfm]}
                    //@ts-ignore
                    onChange={handleContentChange}
                />
            </div>      
            </div>
            <Separator className="mt-4 max-w-[40rem]" />
            <div className="mt-4 ml-2">
                <Markdown>{editorContent}</Markdown>
            </div>
        </main>
        
        
    )
}