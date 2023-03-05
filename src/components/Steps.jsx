import { AiOutlineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

import "./Steps.css";

const Steps = ({ currentStep }) => {
    return (
    <div className="steps">
        <div className="step active">
            <AiOutlineStar />
        </div>
        <div className ={`step ${currentStep >= 1 ? "active" : ""}`}>
            <AiOutlineStar />
        </div>
        <div className ={`step ${currentStep >= 2 ? "active" : ""}`}>
            <FiSend />
        </div>
    </div>
    );
} ;

export default Steps;
