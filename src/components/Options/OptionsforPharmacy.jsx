import React from "react";
import "./Options.css";

const OptionsforPharmacy = (props) => {
    const optionsforPharmacy = [
        {text: "Yes, I have.    ", handler: props.actionProvider.handlePharmacyYes, id:1,},
        {text:"No, I don't.     ", handler: props.actionProvider.handlePharmacyNoNo, id:2},
    ];
    const buttonsMarkup = optionsforPharmacy.map((optionforPharmacy) => (
        <button key={optionforPharmacy.id}  onClick={optionforPharmacy.handler} className="optionforPharmacy-button">
            {optionforPharmacy.text}
        </button> 
    ));
    return <div className="optionsforPharmacy-container">{buttonsMarkup}</div>; 
};

export default OptionsforPharmacy;
