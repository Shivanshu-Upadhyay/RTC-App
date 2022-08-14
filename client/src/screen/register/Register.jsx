import React, { useState } from "react";
import NumEmail from "../../components/steps/numEmail/NumEmail";
import Otp from "../../components/steps/otp/Otp";
import FullName from "../../components/steps/fullName/FullName";
import Avtar from "../../components/steps/avtar/Avtar";
function Register() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };
  return (
    <>
      {step === 1 && <NumEmail nextStep={nextStep} />}
      {step === 2 && <Otp nextStep={nextStep} />}
      {step === 3 && <FullName nextStep={nextStep} />}
      {step === 4 && <Avtar nextStep={nextStep} />}

    </>
  );
}

export default Register;
