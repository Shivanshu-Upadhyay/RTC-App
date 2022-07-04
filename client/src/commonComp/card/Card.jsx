import React from 'react'
import styles from './card.module.css'
function Card({children}) {
  return (
    <div className={`${styles.card} m-2`}>
    <div className="text-center">
     {children}
    </div>
   </div>  )
}

export default Card