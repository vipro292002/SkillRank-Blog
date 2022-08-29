import React from 'react'

type TextBlockProps = {
  children: React.ReactNode
}

const TextBlock = ({children}: TextBlockProps) => {
  console.log("data",children);
  
  return (
    <div className='text-primary-100' >
      {children}
    </div>
  )
}

export default TextBlock