import React from "react";
import SmallContainer from "./SmallContainer";
import BigContainer from "./BigContainer";

class TilesRowTwo extends React.Component{
    render(){
        return (
            <div className={"tilesRow"}>
                <BigContainer
                    items={[
                        {
                            title   :   'Interested in gardening?',
                            text   :   'Come and join!',
                            src :       "big2.jpg"
                        }
                    ]}
                />
                <SmallContainer
                    items={[
                        {
                            title   :   'First big title',
                            text   :   'First small title',
                            src: "small5.jpg"
                        },
                        {
                            title   :   'Second big title',
                            text   :   'Second small title',
                            src: "small6.jpg"
                        },
                        {
                            title   :   'Third big title',
                            text   :   'Third small title',
                            src: "small7.jpg"
                        },
                        {
                            title   :   'Fourth big title',
                            text   :   'Fourth small title',
                            src: "small8.jpg"
                        }
                    ]}
                />
            </div>
        );
    }
}
export default TilesRowTwo;