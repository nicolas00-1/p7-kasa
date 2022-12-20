import { useState } from "react"
import { useEffect } from "react"


function useFetch (url) {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(function () {
        (async function () {
            setIsLoading(true)
            const response = await fetch(url)
            const responseData = await response.json()
            if (response.ok) {
                setDatas(responseData)
                setIsLoading(false)
            } else {
                console.log("===")
            }
        })()
    },[url])

    return {datas, isLoading}
}

export default useFetch