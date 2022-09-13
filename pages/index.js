import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Splash from '../src/components/splash'
import {useState} from 'react'


export default function Home() {
  const [render, setRender] = useState(1)

  setTimeout(() =>{
    setRender(2)
  }, 3000)

  if(render == 1){
    return <Splash/>
  }
  return (
    <div className={styles.container}>
      <Image src = '/santodomingomotorslogo.png' alt="imgnotfound" width={75} height={75}/>
      <Image src='/landcruiser.png' alt='imgnotfound'width={350} height={210}/>
      <Image src='/frame.png' alt='imgnotfound'  width={100} height={100}/>
      <h1 style={{color:'black'}}>Toyota Landcruiser</h1>
      <div style={{width:'100%',display:'flex', flexDirection:'column',alignItems:'flex-start', fontSize:'13px', maxWidth:'400px' }}>
        <span className={styles.titlea}>NOMBRE: <span className={styles.data}>  OSCAR</span></span>
        <span className={styles.titlea}>APELLIDO: <span className={styles.data}>  ORSINI</span></span>
        <span className={styles.titlea}>CEDULA / RNC: <span className={styles.data}>  001-00407777-1</span></span>
        <span className={styles.titlea}>MARCA: <span className={styles.data}> TOYOTA</span></span>
        <span className={styles.titlea}>MODELO: <span className={styles.data}>  LANDCRUISER</span></span>
        <span className={styles.titlea}>AÑO: <span className={styles.data}> 2023</span></span>
        <span className={styles.titlea}>COLOR: <span className={styles.data}> METALLIC BLACK</span></span>
        <span className={styles.titlea}>CHASSIS: <span className={styles.data}> JVCX25362JSXXXX</span></span>
        <span className={styles.titlea}>KMS RECORRIDOS: <span className={styles.data}>  4,000 KMS</span></span>
        <span className={styles.titlea}>NUMERO DE CONTACTO: <span className={styles.data}> 809-853-1111</span></span>

      </div>
      
      <div style={{width:'100%', maxWidth:'300px', display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'50px', color:'#000287'}}>
        <a href='tel:809-540-3800' target="_blank" rel="noopener noreferrer">Llamar</a>
        <a href='https://api.whatsapp.com/send?phone=18295215151&text=%C2%A1Hola!%20Quiero%20hacer%20cita%20de%20mantenimiento%20%E2%98%91%EF%B8%8F' target="_blank" rel="noopener noreferrer">Agendar Cita</a>
      </div>
      <div style={{width:'100%', maxWidth:'300px', display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'20px', color:'#000287'}}>
        <a href='mailto:email@santodomingomotors.com.do' target="_blank" rel="noopener noreferrer">Enviar Correo</a>
        <a href='https://www.santodomingomotors.com.do/' target="_blank" rel="noopener noreferrer">Visitar pagina web</a>
      </div>
    </div>
  )
}
