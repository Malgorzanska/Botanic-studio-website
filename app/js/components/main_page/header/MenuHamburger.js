import React from "react";
import { slide as Menu } from 'react-burger-menu'

class MenuHamburger extends React.Component {
    render() {
        return (
            <Menu right>
                <div className={"link-menu"}>
                    <ul>
                        <li><a id="home" className="menu-item" href="#homeSection">Home</a></li>
                        <li><a id="about" className="menu-item" href="#gallery">Gallery</a></li>
                        <li><a id="contact" className="menu-item" href="#feedback">Feedback</a></li>
                        <li><a className="menu-item" href="#form">Contact</a></li>

                        <div className={"social-icons"}>
                            <div className={"wrapper"}>
                                <a className={"fb"} href={"https://www.facebook.com/"} target={"blank"}><img src={"../images/fb.png"}/></a>
                                <a className={"insta"} href={"https://www.instagram.com/"} target={"blank"}><img src={"../images/insta.png"}/></a>
                                <a className={"twitter"} href={"https://twitter.com/"} target={"blank"}><img src={"../images/twitter.png"}/></a>
                            </div>
                        </div>
                    </ul>
                </div>
            </Menu>
        );
    }
}


export default MenuHamburger;