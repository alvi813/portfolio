import React from "react";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

import "./App.css";



const App = () => {


    return (

        <div>
            <Layout className="layout">
                <Header style={{background:"green"}}
                    title={
                        <Link style={{textDecoration: "none", color: "white", marginLeft: "-55px"}} to="/">
                            Victoriya Alekseeva
                        </Link>
                    }
                    scroll
                >
                    <Navigation className="topMenu">
                        <Link className="link" to="/resume">Resume</Link>
                        <Link className="link" to="/aboutme">About Me</Link>
                        <Link className="link" to="/projects">Projects</Link>
                    </Navigation>
                </Header>

                <Content>
                    <div/>
                    <Main/>

                </Content>
            </Layout>
        </div>

    );
};

export default App;
