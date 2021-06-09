import React from "react";
import "./Options.css";

const AskAccount = (props) => {
    const askAccount = [
        {text: "Yes! I have. ", handler: props.actionProvider.handleAccountYes, id:1,},
        {text:"No. I Don't. ", handler: props.actionProvider.handleAccountNo, id:2},
    ];
    const buttonsMarkup = askAccount.map((askAccount) => (
        <button key={askAccount.id} onClick={askAccount.handler} className="askAccount-button">
            {askAccount.text}
        </button>
    ));
    return <div className="askAccount-container">{buttonsMarkup}</div>; 
};

export default AskAccount;