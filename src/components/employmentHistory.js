import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class EmploymentHistory extends Component {
    render() {
        return (
            <Grid style = {{width: '800px'}}>
                <Cell col={4}>
                    <p>
                        {this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}
                    </p>
                </Cell>
                <Cell col={7}>
                    <h6 style={{ marginTop: "0px" }}>{this.props.workName}</h6>
                    <p>{this.props.workDescription}</p>
                </Cell>
            </Grid>
        );
    }
}

export default EmploymentHistory;