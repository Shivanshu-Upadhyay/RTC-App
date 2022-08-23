import React from 'react'
import styles from "./style.module.css"
import {useParams} from 'react-router-dom'
function RoomPage() {
  const {id:roomId} = useParams()
  console.log(roomId);
  return (
    <div>
      <audio src="" controls autoPlay> </audio>
      <audio src="" controls autoPlay> </audio>
      
    </div>
  )
}

export default RoomPage