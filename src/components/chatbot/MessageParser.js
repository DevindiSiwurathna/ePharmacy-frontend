class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      //this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase();

      if(lowercase.includes("hello")||lowercase.includes("hi")){
        this.actionProvider.greet();
      }

      else if(lowercase.includes("What is this?")){
        this.actionProvider.introd();
      }

      
      else if(lowercase.includes("what is e pharmacy")){
        this.actionProvider.morning();
      }

        
      else if(lowercase.includes("how can i place an order?")||lowercase.includes("how to order?")||lowercase.includes("how to order")||lowercase.includes("i want to order")||lowercase.includes("i want medicine")){
        this.actionProvider.placeorder();
      }

      else {this.actionProvider.sorry();}
      
  }
}
  export default MessageParser;