import React, { Component } from "react";
import {
  Card,
  CardActions,
  Cell,
} from "react-mdl";

import "./project.css"


class Project extends Component {
  render() {
    return (
      <Cell col={4} style={{padding: "25px"}}>
        <Card shadow={5} style={{ background: "green",  margin: "0 auto", width: "400px"}}>
          <div>
            <div className="projectTitle">
              {this.props.projectName}
            </div>
          </div>
          <CardActions className="footerCard" border >
            <a className="gitHubLink" href={this.props.gitUrl} >
                GitHub
            </a>
            <a className="gitHubLink"  href={this.props.demoUrl}>
              Live Demo
            </a>
          </CardActions>
        </Card>
      </Cell>
    );
  }
}

export default Project;
