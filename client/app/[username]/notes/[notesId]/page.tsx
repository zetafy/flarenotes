"use client"
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { getCodeString } from 'rehype-rewrite';
import katex from 'katex';
import 'katex/dist/katex.css';
import { Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

const mdKaTeX = `This is to display the 
\`\$\$\c = \\pm\\sqrt{a^2 + b^2}\$\$\`
 in one line

\`\`\`KaTeX
c = \\pm\\sqrt{a^2 + b^2}
\`\`\`
`;

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

function HomePage() {
  const [value, setValue] = useState(mdKaTeX);

  return (
    <div className="m-8">
      <Card className="mb-4 grid grid-cols-2">
        <CardHeader>
          <CardTitle>MATH1064 Week 1</CardTitle>
          <CardDescription>Write the description of this note here...</CardDescription>
        </CardHeader>
        <CardHeader><div className="flex justify-end"><Button>Save Changes</Button></div></CardHeader>
      </Card>
      <div data-color-mode="light">
        <div className="wmde-markdown-var"> </div>
        <MDEditor
          value={value}
          height={600}
          onChange={(val: any) => setValue(val)}
          previewOptions={{
            components: {
              code: ({ children = [], className, ...props }) => {
                if (typeof children === 'string' && /^\$\$(.*)\$\$/.test(children)) {
                  const html = katex.renderToString(children.replace(/^\$\$(.*)\$\$/, '$1'), {
                    throwOnError: false,
                  });
                  return <code dangerouslySetInnerHTML={{ __html: html }} style={{ background: 'transparent' }} />;
                }
                const code = props.node && props.node.children ? getCodeString(props.node.children) : children;
                if (
                  typeof code === 'string' &&
                  typeof className === 'string' &&
                  /^language-katex/.test(className.toLocaleLowerCase())
                ) {
                  const html = katex.renderToString(code, {
                    throwOnError: false,
                  });
                  return <code style={{ fontSize: '150%' }} dangerouslySetInnerHTML={{ __html: html }} />;
                }
                return <code className={String(className)}>{children}</code>;
              },
            },
          }}
        />
      </div>
    </div>
  );
}
