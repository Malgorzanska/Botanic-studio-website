import React from "react";
import SmallContainerText from "./SmallContainerText";


class SmallContainer extends React.Component{
    render(){
        return (
            <div className={"smallContainer"}>
                {
                    this.props.items.map( (element) => {

                        return <article className={"articleContainer"}>

                            <img className={"smallImage"} src={`/images/${element.src}`} />

                            <SmallContainerText
                                key = {element.id}
                                title = { element.title }
                                text = { element.text }
                            />
                        </article>
                    })
                }
            </div>
        );
    }
}
export default SmallContainer;