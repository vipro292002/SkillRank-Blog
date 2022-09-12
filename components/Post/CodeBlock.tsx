import React, { useEffect, useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'
import { CH,Code } from "@code-hike/mdx/components"

type CodeBlockProps = {
  children: any
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  console.log("children",children);
  const [codeLanguage,setCodeLanguage] = useState<string>("")
  // const codeLanguage = (children.props.files[0].code.lang).toUpperCase()

  // array filter and join all code form children
  // const selectedCode = children.props.files[0].code.lines.map((item: any) => {
  //   return item.tokens.map((item2: any, index: number) => {
  //     if (index === item.tokens.length - 1) {
  //       console.log("true");
  //       return item2.content + "\n"
  //     }
  //     return item2.content
  //   })
  // })
  // const copiedCode = selectedCode.map((item: any) => item.join('')).join('')
  useEffect(()=>{
    if(children.props.files.length === 1){
      setCodeLanguage((children.props.files[0].code.lang).toUpperCase())
    }else{
      let name = children.props.files.map((item: any)=> item.code.lang).join(" & ").toUpperCase()
      setCodeLanguage(name)
    }
  },[])

  return (
    <div className='flex flex-col my-10'  >
      <div className="flex justify-end gap-2 ">

        <button className='bg-[#252526] dark:bg-dark-300 rounded-t-md py-1 px-4 text-white '>{codeLanguage}</button>


        {/* ------------Custom copi code----------------- */}
        {/* <CopyToClipboard text={copiedCode}
          onCopy={() => {alert("Copied !")}}
        >
          <button className='group bg-[#252526] rounded-t-md py-1 px-4  '>
            <ClipboardDocumentListIcon className='text-white h-4 w-4 group-hover:text-primary-100' />
          </button>
        </CopyToClipboard> */}
        
      </div>
      
      {children}
      

     

      {/* <Highlight {...defaultProps} theme={theme} code={exampleCode} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className={`codeblock ${className}`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span className="codeline-number">{i + 1}</span>
                {line.map((token, key) => <span key={key + 1} {...getTokenProps({ token, key })} />)}
              </div>
            ))}
          </div>
        )}
      </Highlight> */}
    </div>
  )
}

export default CodeBlock