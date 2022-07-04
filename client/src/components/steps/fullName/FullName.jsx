import React from "react";
import Card from "../../../commonComp/card/Card";
import Button from "../../../commonComp/button/Button";
import styles from "./fullName.module.css";
function FullName({ nextStep }) {
  return (
    <Card>
      <div className="flex justify-center items-center font-bold text-lg mt-12 mb-7">
      <span className=' text-3xl'>🤓</span>What is your fullName
      </div>

      <div className="leading-8 px-20 my-5 relative">
        <input
          type="text"
          placeholder="Enter your fullName"
          className={`${styles.number} rounded-xl`}
        />
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

export default FullName;
