import React from "react";

class SmallContainerText extends React.Component{
    render(){
        return (
            <div className={"overlay"}>
                <div className={"textImage"}>
                    <p className={"mainText"}>{this.props.title} </p>
                    <p className={"smallText"}>{this.props.text} </p>
                </div>
            </div>
        );
    }
}
export default SmallContainerText;