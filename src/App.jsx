import { useState, useMemo, useEffect } from 'react'
import Card from "./components/cards"


function App() {

  const jsonfetch = async (url) => {
    const promise = await fetch(url)

    const promiseJson = await promise.json()
    return promiseJson
  }

  const [politicians, setPoliticians] = useState([])
  const [search,setSearch] = useState("")
 const [count,setCount] = useState(0)

  const fetchUsers = async () => {
    try {
      const data = await jsonfetch("http://localhost:5000/politicians");
      setPoliticians(data);
    } catch (error) {
      console.error("Errore nel fetch:", error);
    }
  }
  
  useEffect(() => { (fetchUsers()) }, [])

  

  const filterPolitians = useMemo(() => {
  return politicians?.filter((politician) => {
    console.log("caricamento")
  const isInBio = politician.biography?.toLowerCase().includes(search)
  const inInName = politician.name?.toLowerCase().includes(search)
  return inInName || isInBio
  })
}, [politicians, search])  // Solo se queste dipendenze cambiano
 
return (
    <>
    <input type="text" onChange={(e)=>setSearch(e.target.value)} />
      {
        filterPolitians?.map((p,index) => {
          return <Card key={index} poli={p} />
        }
        )
      }
      {/* prova re-render */}
      <p>{count}</p>
     <button onClick={()=>{setCount((curr)=>{
      return curr + 1
      })}} >clicca</button>
    </>
  )
}

export default App


