import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import EmploymentHistory from "./employmentHistory";
import Experience from "./experience";

import './resume.css'

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>

          <Cell>
            <div className="title">Education</div>

            <Education
              startYear={2020}
              schoolName="NIIT"
              schoolDescription="Java courses"
            />

            <Education
              startYear={2019}
              schoolName="State Technical University"
              schoolDescription="C++ courses"
            />

            <Education
              startYear={2018}
              endYear={2019}
              schoolName="NIIT"
              schoolDescription="C, C++, English courses"
            />

            <Education
              startYear={2013}
              endYear={2017}
              schoolName="Nizhniy Novgorod State Technical University"
              schoolDescription="Faculty of Information Systems and Technologies"
              result="Department of Graphic Information Systems, Bachelor"
            />

            <Education
              startYear={2004}
              endYear={2010}
              schoolName="Nizhniy Novgorod State Technical University"
              schoolDescription="Faculty of automobile and tractor engineering"
              result="Desigher of cars and tractors, Engineer"
            />



            <div className="title">Employment History</div>
            <EmploymentHistory
                startMonth = "June"
                startYear={2010}
                endMonth="May"
                endYear={2019}
                workName="Gorky Automobile Plant"
                workDescription="Engineer-designer of equipment"
            />

            <EmploymentHistory
                startMonth = "June"
                startYear={2019}
                endMonth="Present"

                workName="Mera NN"
                workDescription="Software designer"
            />


            <div className="title">Summary of Experience</div>
            <Experience
                experienceName = "Operating systems:"
                experienceText = "Windows, Linux (working with the command line at the user level)"
            />

            <Experience
                experienceName = "Programming languages:"
                experienceText = "C/С++, Java"
            />

            <Experience
                experienceName = "Knowledge in protocols of network technologies:"
                experienceText = "L2, L3"
            />

            <Experience
                experienceName = "Tools:"
                experienceText = "IntelliJ Idea, MS Visual Studio, Qt Creator"
            />

            <Experience
                experienceName = "Version control system:"
                experienceText = "GIT"
            />

            <Experience
                experienceName = "Language skills:"
                experienceText = "English pre-intermediate"
            />

            <Experience
            experienceName = "Network technologies:"
            experienceText = "Knowledge in protocols L2, L3 levels"
            />

            <Experience
                experienceName = "Else:"
                experienceText = "Configuring Cisco networks on the example of GNS3 and Packet Tracer programs"
            />

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
