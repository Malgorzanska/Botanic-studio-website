import React from "react";


class Slider extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            slide:0,
            opinions: [
                {
                    text: '"Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the start the text one asap."',
                    miniText: "ROB DYLAN"
                },
                {
                    text: '"You have a great eye for detail. You make my job much easier by reviewing all the details completely and keeping on top of things. Good work!"',
                    miniText: "ELIZABETH WILLIAMS"
                },
                {
                    text: '"Thank you for taking the initiative on the new proposal. It helped us get a head start in our key market where we have visions to expand. Great work!"',
                    miniText: "CAROL KING"
                },
                {
                    text: '"You have a great eye for detail. Fantastic team helped me to organise my own jungle in a small new apartment - now I live in a magic place! I recommend this company to everyone!"',
                    miniText: "RYAN COLD"
                }
            ]
        }
    }

    showNext = () => {
        const {
            slide, opinions
        } = this.state;
        if(slide + 1 < opinions.length){
            this.setState({
                slide: slide + 1
            })
        }else if (slide === opinions.length - 1){
            this.setState({
                slide: 0
            });
        }
    };

    showPrevious = () => {
        const {
            slide, opinions
        } = this.state;
        if(slide - 1 >= 0){
            this.setState({
                slide: slide - 1
            })
        }else if (slide === 0) {
            this.setState({
                slide: opinions.length - 1
            })
        }
    };

    render(){

        return (
            <section className={"opinions"} id={"feedback"}>
                <article>

                    <div className={"opinionText"}>
                        {
                            this.state.opinions.map( (opinion, index) => {
                                return this.state.slide === index &&
                                    <div >
                                        <h3>{opinion.text}</h3>
                                        <p>{opinion.miniText}</p>
                                    </div>;
                            })
                        }
                    </div>
                    <div className={"buttons"}>

                        <div
                            className={"prev"}
                            onClick={ this.showPrevious }
                        > &#60; </div>

                        <div
                            className={"next"}
                            onClick={ this.showNext }
                        > &#62; </div>
                    </div>
                </article>
            </section>
        )
    }
}

export default Slider;
