import React from 'react'
import styles from "./room.module.css"
function Room() {
  return (
    <>
    <hr />
       <div className={`${styles.box}`}>
       <div className={`flex justify-between items-center m-2 w-full`}>
       <div className=' flex justify-center items-center' ><span className={`${styles.allVoice}`}>All Voice Rooms</span> <div className={`{styles.searchContainer}`}>
       <input type="text" className={`${styles.search}`} />
       <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}></i>
       </div></div>
       <button className={`${styles.button}`}><i className="fa-solid fa-microphone"/> Start a Room</button>
       </div>
       
       </div>
    </>
  )
}

export default Room