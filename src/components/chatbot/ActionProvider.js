class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      //this.createClientMessage = createClientMessage;
    }

    greet=() => {
      const message = this.createChatBotMessage("Hello Sir/Madam.");
      this.addMessageToState(message);
    };


    introd=() => {
      const message = this.createChatBotMessage("idiot");
      this.addMessageToState(message);
    };

    morning=() => {
      const message = this.createChatBotMessage("we are  online pharmacy system where if you are a pharmacy, you can catch your custermers and if you are a customer, you can get the nearest pharmacy ");
      this.addMessageToState(message);
    };

    placeorder=() => {
      const message = this.createChatBotMessage("You have to sign in first");
      this.addMessageToState(message);
    };

    

    sorry=() => {
      const message = this.createChatBotMessage("Sorry Sir/ madam. I didn't get you since we are still developping.");
      this.addMessageToState(message);
    };



    handleCustomerQuiz = () => {
      const message = this.createChatBotMessage(
        "Fantastic. You have come to the best place! You can find a pharmacy near by you, place your order and they will do home delivery your medicines and other goods. Select your district here. Want to order now?", {
          widget:"optionsforCustomer",
        }
       
      );
      this.addMessageToState(message);
    };

    handlePharmacyQuiz = () => {
      const message = this.createChatBotMessage(
        "Fantastic. You have come to the best place! Here you can find your customers and market your products easilly. Do you have an account?",
        {
          widget:"optionsforPharmacy",
        }
      );
      this.addMessageToState(message);
    };

    handleCustomerYes = () => {
      const message = this.createChatBotMessage(
        "Here we go! Do you have an account? ",
        {
          widget:"askAccount",
        }
      );
      this.addMessageToState(message);
    };

    handleCustomerNo = () => {
      const message = this.createChatBotMessage(
        "No matter! You can visit us anytime and get our service. Thankyou for visiting us. Have a Good day!",
      );
      this.addMessageToState(message);
    };

    handleAccountYes = () => {
      const message = this.createChatBotMessage(
        "Great! You have to log in to your account. Then select a district that you want your medicine to be delivered, select a preffered pharmacy and place your order! that's it!",
      );
      this.addMessageToState(message);
    };
    
    handleAccountNo = () => {
      const message = this.createChatBotMessage(
        "Easy! You can create an account within two steps. Goto Sign-up in navigation bar and get registered for this great service!",
      );
      this.addMessageToState(message);
    };







    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages:[...prevState.messages,message],
      }));
    }
  }
  
  export default ActionProvider;
  