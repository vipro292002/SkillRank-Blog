import React from 'react'

type TextBlockProps = {
  data: any
}

const TextBlock = ({data}: TextBlockProps) => {
  console.log("data",data);
  
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  )
}

export default TextBlock