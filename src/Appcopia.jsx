import { useState, useMemo, useEffect } from 'react'
import Card from "./components/cards"


function App() {

  const jsonfetch = async (url) => {
    const promise = await fetch(url)

    const promiseJson = await promise.json()
    return promiseJson
  }

  const [politicians, setPoliticians] = useState([])
  const [search,setSearch] = useState([])

  const fetchUsers = async () => {
    try {
      const data = await jsonfetch("http://localhost:5000/politicians");
      setPoliticians(data);
    } catch (error) {
      console.error("Errore nel fetch:", error);
    }
  }
  
  useEffect(() => { (fetchUsers()) }, [])

  const handleChange = (e)=>{
    
      const string = e.target.value  
      setSearch(politicians.filter((e)=>{
        return e.biography?.toLowerCase().includes(string || "" ) || e.name?.toLowerCase().includes(string|| "")
      })
    )
  } 
  
  
  
  return (
    <>
    <input type="text" onChange={handleChange} />
      {
        search?.map((p,index) => {
          return <Card key={index} poli={p} />
        }
        )
      } 
    </>
  )
}

export default App


