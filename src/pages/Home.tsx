import { getCountries } from "@/services/countries"
import { Country } from "@/types/countries"
import { useEffect, useState } from "react"


export const Home = () => {

  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    getCountries().then(data => setCountries(data))
  }, [])
  

  return (
    <section className="bg-bg-primary md:mx-5 lg:mx-10 -mt-12 rounded-lg border border-grey-dark/40 px-8">
      <div className="flex flex-row items-center justify-between py-5">
        <span className="font-semibold">Found 123 countries</span>
        <div>
          <input type="text" placeholder="Search by Name, Region, Subregion" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div>
          Filters
        </div>
        {/* <div>Table</div> */}
        <div>
          {
            countries.map(country =>(
              <div key={country.name.common}>
                 <h1>{country.name.common}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
