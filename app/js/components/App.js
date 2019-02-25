import React from 'react';
import Header from "./main_page/header/Header";
import Home from "./main_page/home/Home";
import CompanyInfo from "./main_page/company_info/CompanyInfo";
import Tiles from "./main_page/tiles_section/Tiles";
import Slider from "./main_page/slider/Slider";
import ContactInfo from "./main_page/form/ContactInfo";
import Footer from "./main_page/footer/Footer";

class App extends React.Component{
    render(){
        return (
            <div className={"container"}>
                <Header/>
                <Home/>
                <CompanyInfo/>
                <Tiles/>
                <Slider/>
                <ContactInfo/>
                <Footer/>
            </div>
        );
    }
}

export default App;