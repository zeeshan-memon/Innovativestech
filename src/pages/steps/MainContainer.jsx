import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import 'antd/dist/reset.css'; 
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import {  useSelector } from 'react-redux'

const { Step } = Steps;

const steps = [
  {
    title: 'Step 1',
    content: <StepOne />,
  },
  {
    title: 'Step 2',
    content: <StepTwo />,
  },
  {
    title: 'Step 3',
    content: <StepThree />,
  },
];

const MainContainer = () => {
  const [current, setCurrent] = useState(0);
  const {StepOne, StepTwo, StepThree} = useSelector((state) => state.configs)
  console.log(StepOne)
  const next = () => {
    if(current == 0 && !StepOne){
        alert("Please fill all information")
    }else if(current ==1 && !StepTwo){
        alert("Please fill all information")

    }else if(current ==2 && !StepThree){
        alert("Please fill all information")

    }else{

        setCurrent(current + 1);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleFinish = () => {
    message.success('Form submitted successfully!');
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content" style={{ marginTop: 24 }}>
        {steps[current].content}
      </div>
      <div className="steps-action" style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={handleFinish}>
            Submit
          </Button>
        )}
        {current > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={prev}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default MainContainer;
