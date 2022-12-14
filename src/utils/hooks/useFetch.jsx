import { useState } from "react"
import { useEffect } from "react"


function useFetch (url) {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(function () {
        (async function () {
            setIsLoading(true)
            const response = await fetch(url)
            console.log(url)
            const responseData = await response.json()
            if (response.ok) {
                setDatas(responseData)
                console.log(responseData)
                setIsLoading(false)
            } else {
                console.log(responseData)
            }
        })()
    },[url])

    return {datas, isLoading}
}

export default useFetch