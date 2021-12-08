// create your App component here
import React, {useEffect, useState} from "react";

function App(){
    const [dog, setData] = useState("")
    const [isLoaded, setLoaded] = useState(false)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoaded(true)})
    }, [])

    if(!isLoaded){
        return <p>Loading...</p>
    }
    return (
        <img src={dog.message} alt = "A Random Dog"/>
    )
}

export default App;