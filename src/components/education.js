import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid style = {{width: '800px'}}>
        <Cell col={4}>
            <p>
            {this.props.startYear} - {this.props.endYear}
            </p>
        </Cell>
        <Cell col={8}>
            <h6 style={{ marginTop: "0px" }}>{this.props.schoolName}</h6>
            <p>{this.props.schoolDescription}</p>
            <p>{this.props.result} </p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
