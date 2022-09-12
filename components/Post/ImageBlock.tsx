import Image from 'next/image'
import React from 'react'

type ImageBlockProps = {
  url: string,
  width: string,
  heigth: string
}

const ImageBlock = ({url,width,heigth}: ImageBlockProps) => {
  return (
    <div style={{ width: width, height: heigth}} className={`relative ${heigth? ``: "h-[300px]" } ${width? `` :"w-full"}`} >
      <Image src={url} quality={100} placeholder={'blur'} blurDataURL={url} layout={'fill'}  lazyBoundary={"200px"} objectFit={'contain'} />
    </div>
  )
}

export default ImageBlock