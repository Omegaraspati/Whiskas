import Image from 'next/image'
import React from 'react'
import hero from '@/assets/hero.webp'

const Video = () => {
  return (
    <div>
        <Image src={hero} alt='hero' />
    </div>
  )
}

export default Video