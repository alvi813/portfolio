import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
    render() {
        return (
            <Grid style = {{width: '800px'}}>
                <Cell col={4}>
                    <p>
                        {this.props.experienceName}
                    </p>
                </Cell>
                <Cell col={8}>
                    <p style={{ marginTop: "0px" }}>{this.props.experienceText}</p>
                </Cell>
            </Grid>
        );
    }
}

export default Experience;