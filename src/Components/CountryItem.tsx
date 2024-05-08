import { Country } from "@/types/countries"

interface CountryListProps {
    country: Country
    classname?: string
}

const formatNumbers = (numbers: number) => numbers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const CountryItem = ({ country, classname = '' }: CountryListProps) => {
    const { name: { common: name }, flags: { png: flagURL }, population, area, region } = country
    return (
        <div className={`${classname} grid grid-cols-7 lg:grid-cols-9 gap-8 lg:gap-16 content-center align-middle font-medium text-sm pb-6`}>
            <img className="col-span-1 min-h-[38px] min-w-[50px] h-[38px] w-[50px] object-cover rounded-lg" src={flagURL} title={name} alt={`Flag of ${name}`} />
            <span className="col-span-2 self-center">{name}</span>
            <span className="col-span-2 self-center">{formatNumbers(population)}</span>
            <span className="col-span-2 self-center">{formatNumbers(area)}</span>
            <span className="hidden lg:flex lg:col-span-2 self-center">{region}</span>
        </div>
    )
}
