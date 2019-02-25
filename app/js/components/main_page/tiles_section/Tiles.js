import React from "react";
import TilesRow from "./TilesRow";
import TilesRowTwo from "./TilesRowTwo";
// import TilesRow from "./main_page/section2_tiles/TilesRow"; --> zle! pamietaj o poprawnych sciezkach ziom

class Tiles extends React.Component{
    render(){
        return (
            <section className={"sectionTwo"} id={"gallery"}>

                <TilesRow/>
                <TilesRowTwo/>

            </section>
        )
    }
}
export default Tiles;