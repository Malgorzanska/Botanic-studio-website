import React from "react";
import BigContainerText from "./BigContainerText";


class BigContainer extends React.Component{
    render(){
        return (
            <div className={"bigContainer"}>
                {
                    this.props.items.map( (element) => {

                        return <article className={"articleContainer"}>

                            <img className={"bigImage"} src={`/images/${element.src}`} />

                            <BigContainerText
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
export default BigContainer;