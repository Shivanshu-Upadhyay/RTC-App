import React from "react";
import Card from "../../../commonComp/card/Card";
import Button from "../../../commonComp/button/Button";
import styles from "./Avtar.module.css";
function Avtar({ nextStep }) {
  return (
    <Card>
      <div className="flex justify-center items-center font-bold text-lg mt-12 mb-7">
        <span className=" text-3xl">😎</span>Okay, Upload Your pick!
      </div>

      <div className=" flex justify-center items-center flex-col">
        <div className="rounded-full">
          <img
            src="./imgs/profile.svg"
            alt=""
            className=" border-4 border-[#0077FF]  rounded-full"
          />
        </div>
        <div className=" text-[#0077FF] my-2 cursor-pointer">Choose a different photo</div>
      </div>
      <div className=" text-[#C4C5C5] my-3 font-extralight">
        People use real names at codershouse :)
      </div>
      <div className="my-4">
        <Button text="Next" handleClick={nextStep} />
      </div>
    </Card>
  );
}

export default Avtar;
