import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";

import './landingpage.css'



class LandingPage extends Component {
    render() {
        return (
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={8}>
                        <article>
                            <header>
                                <div>
                                    <h5>
                                        Here are the react projects, completed during the course at NIIT
                                    </h5>
                                </div>
                            </header>
                            <h5 className="text">
                                You can view pages {" "}
                                <Link className="link" to="/aboutme">about me</Link>, {" "}
                                <Link className="link" to="/resume">resume</Link>,{" "} or {" "}
                                <Link className="link" to="/projects">projects</Link>
                            </h5>
                        </article>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
