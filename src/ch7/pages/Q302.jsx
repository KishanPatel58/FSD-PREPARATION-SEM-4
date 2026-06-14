import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { Context } from '../../context/DataContext';
import CodeBlock from '../../components/CodeBlock';

const Q302 = () => {
  const { codebase } = useContext(Context);
  const location = useLocation().pathname.slice(1)
  const wholecodebase = codebase.filter(code => code.que === location)[0].file;
  return (
    <div className="flex flex-col !p-6 gap-2 !mt-20">
      <h1 className="text-2xl">Install TailwindCss</h1>
      <p>Paste below line into index.html</p>
      <CodeBlock code={`<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`} title="Bash"/>
      {
        wholecodebase.map((wholecode, index) => {
          return (
            <CodeBlock key={index} code={wholecode.code} title={wholecode.title} />
          )
        })
      }
    </div>
  )
}

export default Q302