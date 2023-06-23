import React, { useEffect, useState } from 'react'
import axios from "axios"
import User from './User'

const Users = () => {
    const url = 'https://dummyapi.io/data/v1/user?limit=10'
    const [userData, setUserData] = useState([])

    useEffect( () => {
        (async () => {
            try {
                const { data } = (await axios.get(url,{headers:{"app-id" : "6495ec9bccd5f99401b835c1"}})).data
                console.log(data)
                setUserData(data)
            } catch (error) {
                console.log("Error")
            }
        })()
    },[] )
  return (
    <>
        {userData?.map( (user) => <User data={user} key={user.id} /> )}
    </>
  )
}

export default Users