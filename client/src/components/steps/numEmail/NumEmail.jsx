import React from "react";
import Card from "../../../commonComp/card/Card";
import Button from "../../../commonComp/button/Button";
import styles from "./numEmail.module.css";
import { useState } from "react";
import { sendOtp } from "../../../http/index";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../redux/slice/authSlice";
function NumEmail({ nextStep }) {
  const [changeMethod, setChangeMethod] = React.useState(0);
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    const { data } = await sendOtp({ phone: inputData });
    console.log(data);
    dispatch(setOtp({ phone: data.phone, hash: data.hash }));
    // nextStep();
  };
  return (
    <>
      <div className="text-white  w-[24rem] flex justify-end items-center">
        <span
          className={`${
            changeMethod === 0 ? styles.box : null
          } rounded-xl  my-2 cursor-pointer p-[10px]`}
          onClick={() => setChangeMethod(0)}
        >
          <img src="./imgs/phone.svg" alt="" />
        </span>
        <span
          className={`${
            changeMethod === 1 ? styles.box : null
          } rounded-xl  my-2 cursor-pointer p-[10px]`}
          onClick={() => setChangeMethod(1)}
        >
          <img src="./imgs/email.svg" alt="" />
        </span>
      </div>
      <Card>
        <div className="flex justify-center items-center font-bold text-lg mt-12 mb-7">
          <img
            src={`./imgs/${changeMethod === 0 ? "Emoji" : "emailIcon"}.svg`}
            className="mx-2"
            alt="not found"
          />
          Enter your {changeMethod === 0 ? "phone number" : " email address"}
        </div>

        <div className="leading-8 px-20 my-5 relative">
          {changeMethod === 0 ? (
            <img
              src="./imgs/india.svg"
              alt=""
              className="w-8 absolute top-[0.6rem]  left-[5.5rem]"
            />
          ) : null}
          <input
            type={changeMethod === 0 ? "tel" : "email"}
            placeholder={
              changeMethod === 0 ? "+91 7880811002" : "abc@gmail.com"
            }
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className={`${styles.number} rounded-xl`}
          />
        </div>
        <div className="my-4">
          <Button text="Next" handleClick={handleSubmit} />
        </div>
        <div className="my-5 text-sm text-[#C4C5C5]">
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </div>
      </Card>
    </>
  );
}

export default NumEmail;
