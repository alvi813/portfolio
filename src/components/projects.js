import React, { Component } from "react";
import { Grid } from "react-mdl";
import Project from "./project";

import "../App.css"
import "./projects.css"


class Projects extends Component {
  render() {
    return (
        <div>
          <h4 className="projects_title">
            My Projects
          </h4>

          <div>
            <Grid>
              <Project
                  projectName="Input calculator"
                  gitUrl="https://github.com/alvi813/input-calc"
                  demoUrl="https://alvi813.github.io/input-calc/"
              />
              <Project
                  projectName="Classical calculator"
                  gitUrl="https://github.com/alvi813/classical-calc"
                  demoUrl="https://alvi813.github.io/classical-calc/"
              />
              <Project
                  projectName="Shopping list"
                  gitUrl="https://github.com/alvi813/shopping-list"
                  demoUrl="https://alvi813.github.io/shopping-list/"
              />
              <Project
                  projectName="Redux edit list"
                  gitUrl="https://github.com/alvi813/redux-edit-list"
                  demoUrl="https://alvi813.github.io/redux-edit-list/"
              />
              <Project
                  projectName="Timer"
                  gitUrl="https://github.com/alvi813/timer"
                  demoUrl="https://alvi813.github.io/timer/"
              />
              <Project
                  projectName="Move behind the cursor"
                  gitUrl="https://github.com/agradilenko/move-behind-the-cursor"
                  demoUrl="https://alvi813.github.io/move-behind-the-cursor/"
              />
            </Grid>
          </div>
        </div>
    );
  }
}

export default Projects;
