import React from "react";

class Home extends React.Component{
    render(){
        return (
            <section className={"homeSection"} id={"homeSection"}>

                <div className={"mainImg"}>
                    <article className={"heading"}>
                        <h1>Create your own jungle!</h1>
                        <p>We are a new botanic design studio based in Canada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec justo vitae elit sodales porttitor.
                        </p>
                    </article>
                </div>
            </section>

        )
    }
}

export default Home;