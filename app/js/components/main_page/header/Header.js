import React from "react";
import MenuHamburger from "./MenuHamburger";

class Header extends React.Component{
    render(){
        return (
            <header className={"header"}>
                <div className={"imageHeaderLeft"}>
                    <img className={"logoImage"} src="/images/logo.jpeg"  />
                </div>
                <div>
                    <MenuHamburger className={"menuHamburger"}/>
                </div>
            </header>
        )
    }
}

export default Header;