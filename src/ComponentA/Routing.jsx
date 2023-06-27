import React, { useState } from 'react'
import {useSearchParams} from 'react-router-dom'

const Routing = () => {
    //const [searchItem, setSearchItem] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
  return (
    <>
        <h1>Routing</h1>
        <h2>search params - {searchParams.get('search')}</h2>
        <input placeholder='set params' onChange={e => setSearchParams({'search':e.target.value})} /> 
       {/*<input placeholder='set Params' onChange={e => setSearchItem(e.target.value)} />
        <button onSubmit={setSearchParams({'search':searchItem})}>Submit</button> */}
    </>
  )
}

export default Routing