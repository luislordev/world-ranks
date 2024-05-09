import { Country } from "@/types/countries"
import { useState } from "react"
import { CountryItem } from "@/Components/CountryItem"

interface CountryListProps {
  countries: Country[]
  classname?: string
}

export const CountryList = ({ classname, countries }: CountryListProps) => {

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 25
  const totalPages = Math.ceil(countries.length / itemsPerPage)

  const countriesPaginated = countries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePagination = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section className={`${classname}`}>
      <div className="grid grid-cols-7 lg:grid-cols-9 gap-8 lg:gap-16 text-xs text-grey-dark border-b-2 pb-4 border-bg-secondary">
        <div className="col-span-1">Flag</div>
        <div className="col-span-2">Name</div>
        <div className="col-span-2">Population</div>
        <div className="col-span-2">Area(km<sup>2</sup>)</div>
        <div className="hidden lg:flex lg:col-span-2">Region</div>
      </div>
      {
        countries.length > 0 ? (
          <>
            <div className="mt-4">
              {
                countriesPaginated.map(country => (
                  <CountryItem country={country} key={country.name.common} />
                ))
              }
            </div>
            <div className="flex items-center gap-4 mt-4 p-2 justify-center">
              <button
                onClick={() => handlePagination(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className="border  focus:outline-none  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-bg-secondary text-white border-grey-dark/90 hover:bg-grey-dark hover:border-grey-dark/90 focus:ring-grey-dark disabled:bg-bg-secondary/50 disabled:text-white/50"
              >
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button
                onClick={() => handlePagination(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
                className="border  focus:outline-none  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-bg-secondary text-white border-grey-dark/90 hover:bg-grey-dark hover:border-grey-dark/90 focus:ring-grey-dark disabled:bg-bg-secondary/50 disabled:text-white/50"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="w-full text-center py-10">
            No data available
          </div>
        )
      }

    </section>
  )
}
