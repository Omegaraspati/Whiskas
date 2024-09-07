import Image from 'next/image'
import React from 'react'
import hero from '@/assets/VideoBanner.png'

const Video = () => {
  return (
    <div className='bg-fuchsia-800'>
      <Image src={hero} alt='hero' />
        <div className=" ">
                <video 
                    className="max-w-[1650px] p-20 h-full object-cover"
                    src="https://www.whiskasindonesia.com/content/video/abc.mp4" // Ganti dengan path ke video Anda
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
    </div>
  )
}

export default Video