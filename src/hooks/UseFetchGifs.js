import { useEffect, useState } from "react"
import { getGifs } from './../helpers/GetGifs';

export const UseFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    })
        useEffect( () => {
           getGifs( category)
            .then( imgs => {
                setTimeout(() => {
                    setstate({
                        data:imgs,
                        loading:false
                    })   
                }, 1000);
            })
        },[category])

    return state
}