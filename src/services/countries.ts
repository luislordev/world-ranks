import { Country } from "@/types/countries"

export const getCountries = async (): Promise<Country[]> => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;

}