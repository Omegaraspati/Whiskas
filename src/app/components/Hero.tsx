"use client"

import React from 'react'
import Image from 'next/image'
import backgroundImage from '@/assets/hero2.webp'

const Hero = () => {
    return (
        <section className="relative h-screen bg-gray-800">
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
            </div>
            <div className="relative z-10 pt-24 md:pt-32 lg:pt-48 px-4 md:px-8 lg:px-16 text-center text-white">
                <div className="lg:pl-64">
                    <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold mb-4">
                        Setiap Kucing dapat Tumbuh Sehat
                    </h1>
                    <p className="text-4xl md:text-5xl lg:text-6xl text-yellow-400 font-bold mb-4">
                        3 Tanda Sehat
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-yellow-500 font-bold">
                        dari Nutrisi Whiskas
                    </h1>
                </div>
            </div>

            <div className='relative z-10 md:pt-32 p-52 mt-80 text-white'>
                <h1 className='font-bold text-4xl'>
                    1+ TAHUN
                </h1>
                <h1>
                    Makanan lengkap dan seimbang untuk tahun-tahun awal kucing Anda.
                </h1>
                <div className="flex justify-between items-center mt-4">
                    <button
                        type="button"
                        className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-3xl border border-transparent bg-white text-fuchsia-700 disabled:pointer-events-none"
                    >
                        Pelajari Lebih Lanjut
                    </button>
                    <h1 className='text-right font-xs max-w-[500px]'>
                    *Berdasarkan nilai penjualan dalam kategori Nielsen’s Cat Food selama 12 bulan hingga Desember 2021 di 25 negara.
                    </h1>
                </div>
            </div>

        </section>
    )
}

export default Hero
