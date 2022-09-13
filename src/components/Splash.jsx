import React from 'react'
import Image from 'next/image'

const Splash = () => {
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Image src='/logotipoLoopWhite.gif' width={1080} height={608}/>
    </div>
  )
}

export default Splash