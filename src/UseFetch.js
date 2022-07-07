import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        setTimeout(()=> {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("cannot find a server's path")
                }
                return res.json();
            })
            .then(ans => {
                // console.log(ans)
                setData(ans)
                setError(null)
                setIsPending(false)
            })
            .catch(err => {
                setData(null)
                console.log(err.message)
                setIsPending(false)
                setError(err.message)
            })
        },1000)
    }, [url])
    return { data, isPending, error}
}

export default useFetch