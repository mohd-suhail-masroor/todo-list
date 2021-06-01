import {useState,useEffect} from 'react'

const useFetch =(url)=> {
    const [data,setData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const abort = new AbortController();

        setTimeout(()=>{
            fetch(url,{signal : abort.signal })
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data from the server')
            }
            return res.json();
        })
        .then(data => {
            setData(data)
            setIsLoading(false)
        })
        .catch(err=>{
            if(!err === 'AbortError'){
                setError(err.message)
                setIsLoading(false)    
            }
        })
        },250)

        return ()=> abort.abort();

        

    },[url ])
    return {data,isLoading,error}

}

export default useFetch
