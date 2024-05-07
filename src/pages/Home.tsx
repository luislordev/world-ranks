import { InputSearch } from "@/Components/InputSearch"
import { CountryList } from "@/Components/CountryList"
import { getCountries } from "@/services/countries"
import { Country } from "@/types/countries"
import { useEffect, useState } from "react"



const countryMatchesSearchTerm = (country: Country, term: string): boolean => {
  const { name, region, subregion } = country
  const lowerCaseTerm = term.toLowerCase()
  return (
    name.common.toLowerCase().includes(lowerCaseTerm) ||
    region.toLowerCase().includes(lowerCaseTerm) ||
    (!!subregion && subregion.toLowerCase().includes(lowerCaseTerm))
  )
}

export const Home = () => {

  const [countries, setCountries] = useState<Country[]>([])
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    getCountries().then(data => {
      setCountries(data)
      setFilteredCountries(data)
    })
  }, [])

  useEffect(() => {
    const filtered = countries.filter(country => countryMatchesSearchTerm(country, searchTerm))
    setFilteredCountries(filtered)
  }, [countries, searchTerm])

  const handleSearchTerm = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value)
  }

  return (
    <section className="bg-bg-primary md:mx-5 lg:mx-10 -mt-12 rounded-lg border border-grey-dark/40 px-8">
      <div className="flex flex-row items-center justify-between pt-6 pb-9">
        <span>Found {filteredCountries.length} countries</span>
        <InputSearch onChange={handleSearchTerm} />
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-52 xl:w-64">
          Filters
        </div>
        <CountryList classname="flex-1"  countries={filteredCountries}/>
      </div>
    </section>
  )
}
