import React from "react";
import "./Options.css";

const OptionsforCustomer = (props) => {
    const optionsforCustomer = [
        {text: "Yes, Let's Order   ", handler: props.actionProvider.handleCustomerYes, id:1,},
        {text:"No, Maybe later     ", handler: props.actionProvider.handleCustomerNo, id:2},
    ];
    const buttonsMarkup = optionsforCustomer.map((optionforCustomer) => (
        <button key={optionforCustomer.id}  onClick={optionforCustomer.handler} className="optionforCustomer-button">
            {optionforCustomer.text}
        </button> 
    ));
    return <div className="optionsforCustomer-container">{buttonsMarkup}</div>; 
};

export default OptionsforCustomer;



/*import React from "react";
import "./Options.css";

const OptionsforCustomer = (props) => {
    const optionsforCustomer = [
        {text: "Yes", handler: props.actionProvider.handleCustomerQuiz, id:1,},
        {text:"No", handler: props.actionProvider.handlePharmacyQuiz, id:2},
    ];
    const buttonsMarkup = optionsforCustomer.map((option) => (
        <button key={optionsforCustomer.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));
    return <div className="options-container">{buttonsMarkup}</div>; 
};

export default OptionsforCustomer;*/