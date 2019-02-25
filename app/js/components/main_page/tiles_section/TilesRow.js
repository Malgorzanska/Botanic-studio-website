import React from "react";
import SmallContainer from "./SmallContainer";
import BigContainer from "./BigContainer";

class TilesRow extends React.Component{
    render(){
        return (
            <div className={"tilesRow"}>
                <SmallContainer
                    items={[
                        {
                            title   :   'First big title',
                            text   :   'First small title',
                            src : "small1.jpg"
                        },
                        {
                            title   :   'Second big title',
                            text   :   'Second small title',
                            src : "small2.jpg"
                        },
                        {
                            title   :   'Third big title',
                            text   :   'Third small title',
                            src : "small3.jpg"
                        },
                        {
                            title   :   'Fourth big title',
                            text   :   'Fourth small title',
                            src : "small4.jpg"
                        }
                    ]}
                />
                <BigContainer
                    items={[
                        {
                            title   :  'Join our workshops!',
                            text   :   'We organise florists weekends every month',
                            src : "big1.jpg"
                        }
                    ]}

                />
            </div>
        );
    }
}
export default TilesRow;