import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

import "./aboutme.css"



class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <h5>Russia, Nizhny Novgorod</h5>

          </Cell>
          <Cell col={8}>
            <h4 className="aboutme_title">About me:</h4>
            <article>

              <h5>
                - work for Mera company.
              </h5>
              <h5>
                - write in languages C/C++, Java.
              </h5>
              <h5>
                - interested in Android and Web development.
              </h5>
            </article>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
