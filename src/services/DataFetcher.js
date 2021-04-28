import { useEffect } from 'react'

function DataFetcher () {

    useEffect(() => {
        const getTest = async () => {
            fetchTasks()
        }

        getTest()
        }, [])

    const fetchTasks = async() => {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/Stockholm`)
        const data = await res.json()

        let returnObj = {
            title: data.displaytitle,
            shortdesc: data.extract
        }

        console.log(returnObj)
        return returnObj
    }

    return (
        <div>
            
        </div>
    )

}
export default DataFetcher
