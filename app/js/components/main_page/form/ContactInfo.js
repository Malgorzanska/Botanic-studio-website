import React from "react";
import Form from "./Form";


class ContactInfo extends React.Component{
    render(){
        return (
            <section className={"contact"} id={"form"}>
                <article className={"contactText-wrapper"}>
                    <h2 className={"contactText-header"}>Contact Info:  </h2>
                    <p className={"contactText-main"}>Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.</p>

                    <p><span>Address:   </span> New York</p>
                    <p><span>Phone: </span>  +12 122 122 908 </p>
                    <p><span>Email: </span>  info@Example.com</p>
                    <div className={"social-icons"}>
                        <div className={"wrapper"}>
                            <a className={"fb"} href={"https://www.facebook.com/"} target={"blank"}><img src={"../images/fb.png"}/></a>
                            <a className={"insta"} href={"https://www.instagram.com/"} target={"blank"}><img src={"../images/insta.png"}/></a>
                            <a className={"twitter"} href={"https://twitter.com/"} target={"blank"}><img src={"../images/twitter.png"}/></a>
                        </div>
                    </div>
                </article>
                <article className={"contactForm"}>
                    <Form/>
                </article>
            </section>
        )
    }
}

export default ContactInfo;