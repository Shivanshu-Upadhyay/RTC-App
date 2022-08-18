import React from "react";
import styles from "./room.module.css";

import { useState } from "react";
function Room() {
  const [model, setmodel] = useState(false);
  return (
    <>
      <hr />
      <div className={`${styles.box}`}>
        <div className={`flex justify-between items-center m-3 w-full`}>
          <div className=" flex justify-center items-center">
            <span className={`${styles.allVoice}`}>All Voice Rooms</span>{" "}
            <div className={`{styles.searchContainer}`}>
              <input type="text" className={`${styles.search}`} />
              <i
                className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}
              ></i>
            </div>
          </div>
          <button className={`${styles.button}`} onClick={() => setmodel(true)}>
            <i className="fa-solid fa-microphone" /> Start a Room
          </button>
        </div>
        <div className="mx-3 mt-12 flex flex-wrap justify-around gap-5 content-around">
          <Meetingbox />
          <Meetingbox />
          <Meetingbox />
          <Meetingbox />
          <Meetingbox />
          <Meetingbox />
          <Meetingbox />
          <Meetingbox />
          <Meetingbox />
          <Meetingbox />
          <Meetingbox />
          <Meetingbox />
        </div>
        {model ? (
          <div>
            <StartRoomModel setmodel={setmodel} />
          </div>
        ) : null}
      </div>
    </>
  );
}
const Meetingbox = () => {
  return (
    <div className={`${styles.meetingCard}`}>
      <h5>Which framework best for frontend ?</h5>
      <div className={`flex justify-between items-center mx-3 my-2`}>
        <div className={`flex relative`}>
          <div className={`${styles.roundedImg}`}>
            <img src="https://picsum.photos/200/300" alt="Not found" />
          </div>
          <div className={`${styles.roundedImg2}`}>
            <img src="https://picsum.photos/200/300" alt="Not found" />
          </div>
        </div>
        <div>
          <div>
            Virat Kohli <i className="fa-solid fa-comment" />
          </div>
          <div>
            Anushka Sharma <i className="fa-solid fa-comment" />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center my-3">
        <span>
          8<i className="fa-solid fa-user mx-2" />
        </span>
      </div>
    </div>
  );
};

const StartRoomModel = ({ setmodel }) => {
  const [active, setactive] = useState(0);
  return (
    <>
      <section className={`${styles.cardContainer}`}>
        <div className={`${styles.card}`}>
          <div>
          <div className="flex justify-end items-center mr-2">
            <i className="fa-solid fa-xmark cursor-pointer" onClick={()=>setmodel(false)}></i>
          </div>
           <label htmlFor="" className="mx-2">Enter the topic to be disscussed</label>
            <input type="text" className={`${styles.inputField} m-2`} />
            <h4 className="m-2 font-semibold">Room Type</h4>
            <div className="flex justify-around items-center">
              <div
                className={
                  active === 0
                    ? "text-center bg-[#262626] px-4 py-3 rounded-[12px] cursor-pointer"
                    : "px-4 py-3 cursor-pointer text-center"
                }
                onClick={() => setactive(0)}
              >
                <img src="imgs/Globe.svg" alt="not found" width="40px" />{" "}
                <p className="text-[12px] font-semibold">Open</p>
              </div>
              <div
                className={
                  active === 1
                    ? "text-center bg-[#262626] px-4 py-3 rounded-[12px] cursor-pointer"
                    : "px-4 py-3 cursor-pointer text-center"
                }
                onClick={() => setactive(1)}
              >
                <img src="imgs/Users.svg" alt="not found" width="40px" />{" "}
                <p className="text-[12px] font-semibold">Social</p>
              </div>
              <div
                className={
                  active === 2
                    ? "text-center bg-[#262626] px-4 py-3 rounded-[12px] cursor-pointer"
                    : "px-4 py-3 cursor-pointer text-center"
                }
                onClick={() => setactive(2)}
              >
                <img src="imgs/LockRoom.svg" alt="not found" width="40px" />{" "}
                <p className="text-[12px] font-semibold">Closed</p>
              </div>
            </div>
            <br />
            <hr />
            <div className="flex  justify-center items-center flex-col mb-3">
            <h6 className="text-[14px] font-semibold text-center my-3">Start a room, Open to everyone</h6>
            <button className="bg-[#20BD5F] px-5 py-1 rounded-full"> <i className="fa-solid fa-thumbs-up mx-2"></i>Let's Go</button>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Room;
