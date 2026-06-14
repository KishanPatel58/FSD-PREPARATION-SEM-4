import React, { useContext } from 'react'
import { Context } from '../../context/DataContext';
import { useLocation } from 'react-router-dom';
import CodeBlock from '../../components/CodeBlock';

const Q375 = () => {
  const { codebase } = useContext(Context);
  const location = useLocation().pathname.slice(1)
  const wholecodebase = codebase.filter(code => code.que === location)[0].file;
  return (
    <div className="flex flex-col !p-6 gap-2 !mt-20">
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

export default Q375