import { React } from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import AskAccount from "../Options/AskAccount";
import Options from "../Options/Options";
import OptionsforCustomer from "../Options/OptionsforCustomer";
import OptionsforPharmacy from "../Options/OptionsforPharmacy";
const config = {
  botName:"PharmacyBot",
  initialMessages: [createChatBotMessage(`I'm here to help you! You are? `, {
    widget:"options",
  }),
],
  widgets:[
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props}/>
    },

    {
      widgetName: "optionsforCustomer",
      widgetFunc: (props) => <OptionsforCustomer {...props}/>
    },

    {
      widgetName: "optionsforPharmacy",
      widgetFunc: (props) => <OptionsforPharmacy {...props}/>
    },

    {
      widgetName: "askAccount",
      widgetFunc: (props) => <AskAccount {...props}/>
    },    
    
    /*{
      widgetName: "CustomerQuiz",
      widgetFunc: (props) => <Quiz {...props}/>
      props:{
        questions:[
          {
        question: "What is closure?",
        answer:
        "Closure is a way for a function",
        id:1,
      },
      {
        question:"Explain prototypal inheritance",
        answer:
        "Prototypal Inheritance",
        id:2,
    
    },
  ],
},
},*/
],
};

export default config;