import React from 'react'
import { comidaList } from '../../list'

const C = async ({ params }) => {
    const { id } = await params
    const item = comidaList.find(el => el.id == id)
    return (
        <main className="flex min-h-screen flex-col p-4 w-full py-12">
            <section className='w-full flex flex-col md:flex-row justify-center md:justify-start bg-[#333] rounded-2xl p-2 gap-4'>
                <img src={item.img} alt="" className="w-full md:w-1/3 aspect-square  rounded-xl object-cover" loading="lazy" />
                <div className='w-full flex flex-col'>
                    <h1 className='uppercase font-bold text-4xl'>{item.name}</h1>
                    <h2 className='uppercase font-semibold text-xl'>{item.comestible}</h2>
                    <p className='text-lg text-pretty mt-4 pr-8 py-4'>{item.info}</p>
                </div>
            </section>
        </main>
    )
}

export default C