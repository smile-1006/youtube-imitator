import React, {createContext,useState,useEffect} from "react";

import {fetchDataFromApi} from "../utils/api";

export const context =createContext();

export const AppContext = (props) => {
    const [loading,setLoading] = useState(false);
    const [searchResults,setSearchResults] = useState(false);
    const [selectCategories,setSelectCategories] = useState(false);
    const [mobileMenu,setMobileMenu] = useState(false);

    useEffect(()=> {
        fetchSelectedCategoryData(selectCategories)
    },[selectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then((contents)=> {
            console.log(contents)
            setSearchResults(contents)
            setLoading(false)
        })
    }

    return(
        <context.Provider
            value={{
                loading,
                searchResults,
                selectCategories,
                mobileMenu,
                setLoading,
                setSearchResults,
                setSelectCategories,
                setMobileMenu,
            }}
        >            
        {props.children}
        </context.Provider>
    )
}
