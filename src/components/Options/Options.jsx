import React from "react";
import "./Options.css";

const Options = (props) => {
    const options = [
        {text: "Customer", handler: props.actionProvider.handleCustomerQuiz, id:1,},
        {text:"Pharmacy", handler: props.actionProvider.handlePharmacyQuiz, id:2},
    ];
    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));
    return <div className="options-container">{buttonsMarkup}</div>; 
};

export default Options;