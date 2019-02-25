import React from "react";

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            mail: "",
            message: "",
            placeholderMail: "Your e-mail:",
            placeholderName: "Your name:",
            placeholderMessage: "Write a message",
        }
    }

    changeInputName = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    changeInputMail = (event) => {
        this.setState({
            mail: event.target.value
        });
    };

    changeInputMessage = (event) => {
        this.setState({
            message: event.target.value
        });
    };

    handleClick = (event) => {
        event.preventDefault();

        if ((this.state.name && this.state.mail && this.state.message) === ""){
            alert('Please fill the form.');
        } else{
            alert('Thank you ' + this.state.name + '. Your message has been sent.');
        }
    };

    render(){
        return (
            <form className={"form"}>
                <input onChange={ this.changeInputName }
                       value={ this.state.name}
                       placeholder={this.state.placeholderName}
                       type="text"/>
                <input onChange={ this.changeInputMail }
                       value={ this.state.mail }
                       placeholder={this.state.placeholderMail}
                       type="text"/>
                <textarea onChange={ this.changeInputMessage }
                          value={ this.state.message }
                          placeholder={this.state.placeholderMessage}/>
                <button onClick={ this.handleClick }>Send message</button>
            </form>
        );
    }
}

export default Form;