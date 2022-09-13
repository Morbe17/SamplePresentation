import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Image src='/landcruiser.png' width={400} height={250}/>
      <Image src='/frame.png' width={120} height={120}/>
      <h1>Toyota Landcruiser</h1>
      <div style={{width:'100%',display:'flex', flexDirection:'column',alignItems:'flex-start', fontSize:'13px', maxWidth:'400px' }}>
        <span className={styles.titlea}>NOMBRE: <span className={styles.data}>  OSCAR</span></span>
        <span className={styles.titlea}>APELLIDO: <span className={styles.data}>  ORSINI</span></span>
        <span className={styles.titlea}>CEDULA / RNC: <span className={styles.data}>  001-00407777-1</span></span>
        <span className={styles.titlea}>MARCA: <span className={styles.data}> TOYOTA</span></span>
        <span className={styles.titlea}>MODELO: <span className={styles.data}>  LANDCRUISER</span></span>
        <span className={styles.titlea}>AñO: <span className={styles.data}> 2023</span></span>
        <span className={styles.titlea}>COLOR: <span className={styles.data}> COPPER</span></span>
        <span className={styles.titlea}>CHASSIS: <span className={styles.data}> JVCX25362JSXXXX</span></span>
        <span className={styles.titlea}>KMS RECORRIDOS: <span className={styles.data}>  4,000 KMS</span></span>
        <span className={styles.titlea}>NUMERO DE CONTACT: <span className={styles.data}> 809-853-1111</span></span>

      </div>
      
      <div style={{width:'100%', maxWidth:'300px', display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'50px', color:'#000287'}}>
        <a href='tel:809-540-3800' target="_blank">Llamar</a>
        <a href='https://api.whatsapp.com/send?phone=18295215151&text=%C2%A1Hola!%20Quiero%20hacer%20cita%20de%20mantenimiento%20%E2%98%91%EF%B8%8F' target="_blank">Agendar Cita</a>
      </div>
      <div style={{width:'100%', maxWidth:'300px', display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'20px', color:'#000287'}}>
        <a href='mailto:email@santodomingo.com' target="_blank">Enviar Correo</a>
        <a href='https://santodomingomotors.com.do' target="_blank">Visitar pagina web</a>
      </div>
    </div>
  )
}
