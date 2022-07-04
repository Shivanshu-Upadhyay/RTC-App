import React from 'react'
import Card from '../../commonComp/card/Card'
import styles from "./login.module.css"
function Login() {
  return (
    <div className={styles.box}>
    <header className={`${styles.header} py-3`}>
      <img src="./imgs/logo.svg" alt="" />
    </header>
    <section className={styles.boxSection}>
    <Card title="Welcom To WCA">
    <div  className="leading-8 px-20 my-5">
   We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)
   </div>

   <button className={`${styles.button} rounded-3xl`}>Get your username</button>
    </Card>
    </section>
  </div>  )
}

export default Login