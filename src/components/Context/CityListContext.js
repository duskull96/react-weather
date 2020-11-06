import React, { useContext, useState } from 'react'


const CityListContext = React.createContext()

export const useCityList = () => {
    return useContext(CityListContext)
}

export const CityListProvider = ({ children }) => {

    const [city, setCity] = useState([])

    const [weather, setWeather] = useState([])

    const [fetchData,setFetchData] = useState(true)

    return (
        <CityListContext.Provider value={[city, setCity, weather, setWeather, fetchData,setFetchData]}>
            {children}
        </CityListContext.Provider>
    )
}