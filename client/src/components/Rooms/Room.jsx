import React from "react";
import styles from "./room.module.css";
import { createRoomServer,getAllRooms } from "../../http";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Room() {
  const [model, setmodel] = useState(false);
  const [topicName, setTopicName] = useState("");
  const [roomData, setroomData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await getAllRooms();
      console.log(data);
      setroomData(data.rooms)
    }
    fetchData();
  }, []);

  return (
    <>
      <hr />
      <div className={`${styles.box}`}>
        <div className={`flex justify-between items-center m-3 w-full`}>
          <div className=" flex justify-center items-center">
            <span className={`${styles.allVoice}`}>All Voice Rooms</span>
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
         {roomData?.map((item,index) => {
            return (
              <Meetingbox data={item} key={index} />
            )
         })}
         
        </div>
        {model ? (
          <div>
            <StartRoomModel
              setmodel={setmodel}
              topicName={topicName}
              setTopicName={setTopicName}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
const Meetingbox = ({data}) => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.meetingCard} cursor-pointer`} onClick={()=>navigate(`/room/${data._id}`)}>
      <h5>{data.topic}</h5>
      <div className={`flex justify-between items-center mx-3 my-2`}>
        <div className={`flex relative`}>
          <div className={`${styles.roundedImg}`}>
          
            <img src={data.ownerId.avatar} alt="Not found" />
          </div>
          <div className={`${styles.roundedImg2}`}>
            <img src={data.speeckers[0].avatar} alt="Not found" />
          </div>
        </div>
        <div>
          <div>
            {data.ownerId.name} <i className="fa-solid fa-comment" />
          </div>
          <div>
            {data.speeckers[0].name} <i className="fa-solid fa-comment" />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center my-3">
        <span>
          {data?.speeckers.length+1}<i className="fa-solid fa-user mx-2" />
        </span>
      </div>
    </div>
  );
};

const StartRoomModel = ({ setmodel, setTopicName, topicName }) => {
  const [active, setactive] = useState("open");
  const navigate = useNavigate();
  const createRoom = async () => {
    // Server Call
    try {
      if (!topicName || !active) {
        return alert("All field Required");
      }
      const res = await createRoomServer({
        topic: topicName,
        roomType: active,
      });
      console.log(res.data);
      setmodel(false);
      navigate(`/room/${res.data.room._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className={`${styles.cardContainer}`}>
        <div className={`${styles.card}`}>
          <div>
            <div className="flex justify-end items-center mr-2">
              <i
                className="fa-solid fa-xmark cursor-pointer"
                onClick={() => setmodel(false)}
              ></i>
            </div>
            <label htmlFor="topic" className="mx-2">
              Enter the topic to be disscussed
            </label>
            <input
              type="text"
              className={`${styles.inputField} m-2`}
              id="topic"
              value={topicName}
              onChange={(e) => setTopicName(e.target.value)}
            />
            <h4 className="m-2 font-semibold">Room Type</h4>
            <div className="flex justify-around items-center">
              <div
                className={
                  active === "open"
                    ? "text-center bg-[#262626] px-4 py-3 rounded-[12px] cursor-pointer"
                    : "px-4 py-3 cursor-pointer text-center"
                }
                onClick={() => setactive("open")}
              >
                <img src="imgs/Globe.svg" alt="not found" width="40px" />
                <p className="text-[12px] font-semibold">Open</p>
              </div>
              <div
                className={
                  active === "social"
                    ? "text-center bg-[#262626] px-4 py-3 rounded-[12px] cursor-pointer"
                    : "px-4 py-3 cursor-pointer text-center"
                }
                onClick={() => setactive("social")}
              >
                <img src="imgs/Users.svg" alt="not found" width="40px" />
                <p className="text-[12px] font-semibold">Social</p>
              </div>
              <div
                className={
                  active === "closed"
                    ? "text-center bg-[#262626] px-4 py-3 rounded-[12px] cursor-pointer"
                    : "px-4 py-3 cursor-pointer text-center"
                }
                onClick={() => setactive("closed")}
              >
                <img src="imgs/LockRoom.svg" alt="not found" width="40px" />
                <p className="text-[12px] font-semibold">Closed</p>
              </div>
            </div>
            <br />
            <hr />
            <div className="flex  justify-center items-center flex-col mb-3">
              <h6 className="text-[14px] font-semibold text-center my-3">
                Start a room, Open to everyone
              </h6>
              <button
                onClick={createRoom}
                className="bg-[#20BD5F] px-5 py-1 rounded-full"
              >
                {" "}
                <i className="fa-solid fa-thumbs-up mx-2"></i>Let's Go
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Room;
