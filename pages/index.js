import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Splash from '../src/components/Splash'
import {useState} from 'react'

const normalStyle = {
  position:'absolute',
  width:'100vw', 
  height:'100vh', 
  display:'flex', 
  alignItems:'center', 
  justifyContent:'center',
  background:'white',
  zIndex:1
}

export default function Home() {
  const [render, setRender] = useState(false)

  setTimeout(() =>{
    setRender(true)
  }, 1500)

  return (
    <div className={styles.container}>
      <div style={normalStyle} className={render ? styles.fadeout : 'false'}>
        {/* <Image src='/logotipoLoopWhite.gif' width={1080} height={608}/> */}
        <Image src='/icon-delta.png' width={83} height={83}/>
      </div>
      <div style={{marginTop:'10px'}}>
        <Image src = '/icon-delta.png' alt="imgnotfound" width={75} height={75} />
      </div>
      <Image src='/landcruiser.png' alt='imgnotfound'width={350} height={210}/>
      <Image src='/frame.png' alt='imgnotfound'  width={100} height={100}/>
      <h1 style={{color:'black'}}>Toyota Land Cruiser</h1>
      <div style={{width:'100%',display:'flex', flexDirection:'column',alignItems:'flex-start', fontSize:'13px', maxWidth:'400px' }}>
        <span className={styles.titlea}>NOMBRE: <span className={styles.data}>  OSCAR</span></span>
        <span className={styles.titlea}>APELLIDO: <span className={styles.data}>  FLAMBERG</span></span>
        <span className={styles.titlea}>CEDULA / RNC: <span className={styles.data}>  001-00407777-1</span></span>
        <span className={styles.titlea}>MARCA: <span className={styles.data}> TOYOTA</span></span>
        <span className={styles.titlea}>MODELO: <span className={styles.data}>  LAND CRUISER</span></span>
        <span className={styles.titlea}>AÑO: <span className={styles.data}> 2023</span></span>
        <span className={styles.titlea}>COLOR: <span className={styles.data}> METALLIC BLACK</span></span>
        <span className={styles.titlea}>CHASSIS: <span className={styles.data}> JVCX25362JSXXXX</span></span>
        <span className={styles.titlea}>KMS RECORRIDOS: <span className={styles.data}>  4,000 KMS</span></span>
        <span className={styles.titlea}>VIGENCIA DE GARANTIA: <span className={styles.data}> 0/01/2025 / 5000 KM</span></span>
        <span className={styles.titlea}>NUMERO DE CONTACTO: <span className={styles.data}> 809-853-1111</span></span>
      </div>
      
      <div style={{width:'100%', maxWidth:'300px', display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'50px', color:'#000287'}}>
        <a href='tel:8096203000' target="_blank" rel="noopener noreferrer">Llamar</a>
        <a href='https://api.whatsapp.com/send?phone=+18492580765&text=Hola!%20me%20interesa%20una%20cita' target="_blank" rel="noopener noreferrer">Agendar Cita</a>
      </div>
      <div style={{width:'100%', maxWidth:'300px', display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'20px', color:'#000287', marginBottom:'10px'}}>
        <a href='mailto:email@deltacomercial.com.do' target="_blank" rel="noopener noreferrer">Enviar Correo</a>
        <a href='https://deltacomercial.com.do/' target="_blank" rel="noopener noreferrer">Visitar pagina web</a>
      </div>
    </div>
  )
}
