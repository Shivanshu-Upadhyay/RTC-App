import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import Card from "../../commonComp/card/Card";
import Button from "../../commonComp/button/Button";

function Welcome() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <Card title="Welcom To WCA">
      <div className=" text-2xl my-5 flex justify-center items-center">
        <img src="./imgs/waveHand.svg" alt="not found" className="mx-2" />{" "}
        Welcome to WCA
      </div>

      <div className="leading-8 px-20 my-5">
        We’re working hard to get Codershouse ready for everyone! While we wrap
        up the finishing youches, we’re adding people gradually to make sure
        nothing breaks :)
      </div>
      <Button text="Get your username" handleClick={handleClick} />
      <div className=" text-[#0077FF] font-thin my-2">
        Have an Invite Text?{" "}
        <Link
          to="/register"
          className=" text-[#0077FF] font-bold mx-1 cursor-pointer"
        >
          Signup here
        </Link>
      </div>
    </Card>
  );
}

export default Welcome;
