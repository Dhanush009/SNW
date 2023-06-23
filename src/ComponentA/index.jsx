import React, { useEffect, useState } from 'react';

const Index = (props) => {
    const [msg, setMsg] = useState("React is easy");

    useEffect(() => console.log(msg) ,[msg]);

  return (
    <>
        <h1>Hello {props.name}</h1>
        <h2>{msg}</h2>
        <button onClick={() => setMsg("React is helpful")}>Click Me</button>
    </>
  )
}

export default Index;
