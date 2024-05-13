import { useEffect, useMemo, useState } from "react"

import { getCountries } from "@/services/countries"

import { InputSearch } from "@/Components/InputSearch"
import { CountryList } from "@/Components/CountryList"
import { Country, SortFilter } from "@/types/countries"
import { ButtonPill } from "@/Components/ButtonPill"
import { Checkbox } from "@/Components/Checkbox"
import { CountryListSkeleton } from "@/Components/CountryListSkeleton"

const sortFilterOptions = Object.values(SortFilter).map(value => ({ value, text: value.toString() }))

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [countries, setCountries] = useState<Country[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [sortFilter, setSortFilter] = useState<SortFilter>(SortFilter.Population)
  const [isActiveRegions, setIsActiveRegions] = useState<Record<string, boolean>>({
    Americas: true,
    Antarctic: false,
    Africa: true,
    Asia: true,
    Europe: true,
    Oceania: false
  })
  const [unCheckBox, setUnCheckBox] = useState<boolean>(false)
  const [independentCheckBox, setIndependentCheckBox] = useState<boolean>(false)

  useEffect(() => {
    getCountries().then(data => {
      setCountries(data)
    })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => setLoading(false))
  }, [])

  const filteredCountries = useMemo(() => {
    const lowerCaseTerm = searchTerm.toLowerCase()
    return countries.filter(country => {
      const { name, region, subregion } = country
      const matchesSearchTerm =
        name.common.toLowerCase().includes(lowerCaseTerm) ||
        region.toLowerCase().includes(lowerCaseTerm) ||
        (!!subregion && subregion.toLowerCase().includes(lowerCaseTerm))

      const isActiveRegion = isActiveRegions[country.region]
      const isUn = country.unMember || !unCheckBox
      const isIndependent = country.independent || !independentCheckBox

      return matchesSearchTerm && isActiveRegion && isUn && isIndependent
    })
  }, [countries, searchTerm, isActiveRegions, unCheckBox, independentCheckBox])

  const sortedCountries = useMemo(() => {
    return [...filteredCountries].sort((a, b) => {
      switch (sortFilter) {
        case SortFilter.Population:
          return b.population - a.population
        case SortFilter.Alphabetical:
          return a.name.common.localeCompare(b.name.common)
        case SortFilter.Area:
          return b.area - a.area
        default:
          return 0
      }
    })
  }, [filteredCountries, sortFilter])

  const handleRegionToggle = (region: string) => {
    setIsActiveRegions(prevState => ({
      ...prevState,
      [region]: !prevState[region]
    }))
  }

  const handleSearchTerm = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value)
  }

  const handleSortFilter = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const value = evt.target.value as SortFilter
    setSortFilter(value)
  }

  const handleUnCheckBox = () => {
    setUnCheckBox(prevState => !prevState)
  }

  const handleIndependentCheckBox = () => {
    setIndependentCheckBox(prevState => !prevState)
  }


  return (
    <section className="bg-bg-primary md:mx-5 lg:mx-10 -mt-12 mb-12 rounded-lg border border-grey-dark/40 px-8">
      <div className="flex flex-row items-center justify-between pt-6 pb-9">
        <span>Found {filteredCountries.length} countries</span>
        <InputSearch onChange={handleSearchTerm} />
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <section className="flex flex-col gap-y-8 md:w-52 xl:w-64">
          <div className="flex flex-col gap-y-2">
            <label className="text-xs text-grey-dark">Sort by</label>
            <select
              className="appearance-none rounded-xl border-2 border-bg-secondary bg-bg-primary bg-[url('./assets/svg/Expand_down.svg')] bg-[center_right_1rem] bg-no-repeat py-2 pl-4 text-sm text-white-base"
              value={sortFilter}
              onChange={handleSortFilter}
            >
              {sortFilterOptions.map(option => (
                <option key={option.value} value={option.value} className="capitalize">
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs text-grey-dark">Region</label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(isActiveRegions).map(([region, isActive]) => (
                <ButtonPill
                  key={region}
                  isActive={isActive}
                  handleToggle={() => handleRegionToggle(region)}
                >
                  {region}
                </ButtonPill>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs text-grey-dark">Status</label>
            <Checkbox isActive={unCheckBox} handleCheckBox={handleUnCheckBox}>
              Member of the United Nations
            </Checkbox>
            <Checkbox isActive={independentCheckBox} handleCheckBox={handleIndependentCheckBox}>
              Independent
            </Checkbox>
          </div>
        </section>
        {
          loading
            ? <CountryListSkeleton classname="flex-1" />
            : <CountryList classname="flex-1" countries={sortedCountries} />
        }
      </div>
    </section>
  )
}

