'use client'
import Image from "next/image";
import { comidaList } from './list'
import Link from "next/link";
import { useEffect, useState } from "react";

const colorMap = {
  "No recomendable": "bg-orange-500",
  "Toxico": "bg-red-500",
  "Beneficioso": "bg-[#bf0]"
}

export default function Home() {

  const [results, setResults] = useState([])
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({ "Toxico": false, "Beneficioso": false, "No recomendable": false })


  function handleSearch(e) {
    const v = e.target.value
    setSearch(v)
  }
  function handleFilter(f) {
    const newFilters = { ...filters, [f]: !filters[f] }
    setFilters(newFilters)
  }

  useEffect(() => {
    let newResults = comidaList;
    let appliedFilters = [];
    if (!Object.values(filters).every(e => e === true) && !Object.values(filters).every(e => e === false)) {
      appliedFilters = Object.keys(filters).filter(el => filters[el] === true)
    }
    if (!appliedFilters.length) appliedFilters = ["Toxico", "Beneficioso", "No recomendable"]

    newResults = newResults.map((el, i) => {
      if (
        appliedFilters.includes(el.comestible) &&
        (
          !search.trim().length ||
          (
            search.trim().length &&
            (
              el.tags.toLowerCase().includes(search.toLowerCase()) ||
              el.name.toLowerCase().includes(search.toLowerCase())
            )
          )
        )
      ) return el
      return undefined;
    })
      .filter(Boolean)
    setResults(newResults)
  }, [search, filters])


  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:p-24 w-full py-12">
      <section className="w-full xl:w-2/3 flex flex-col gap-4 items-center justify-center">
        <input type="text" name="" id="" placeholder="Espinacas, acelgas, tomates..." className="w-full rounded-full bg-[#333] h-14 pl-4" onChange={handleSearch} />
        <div className="flex w-full items-center justify-start pl-4 gap-2 md:gap-8 text-sm md:text-md">
          {
            Object.keys(colorMap).map((el, i) => (
              <div className="flex gap-2">
                <input id={el} name={el} type="checkbox" value={el} onChange={() => { handleFilter(el) }} />
                <label htmlFor={el}>{el}</label>
              </div>
            ))
          }
        </div>
      </section>
      <section className="flex flex-wrap gap-2 md:gap-4 mt-12 w-full justify-center">
        {
          results.length
            ? results.map((el, i) => (
              <Link
                href={`/alimento/${el.id}`}
                className="w-40 md:w-64 xl:w-1/6 bg-[#333] rounded-2xl p-2"
                key={i}
              >
                <img src={el.img} alt="" className="w-full aspect-square  rounded-xl object-cover" loading="lazy" />
                <div className="p-2 flex items-center gap-2">
                  <div className={`w-4 h-4 ${colorMap[el.comestible]} rounded-full`}></div>
                  <h3 className="font-medium md:font-semibold uppercase text-[12px] md:text-md">{el.name}</h3>
                </div>
              </Link>
            ))
            : <p className="uppercase text-3xl">No hay resultados...</p>
        }
      </section>
    </main>
  );
}
