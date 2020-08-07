import React, { Component } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import './TodoFormEdit.css';
import 'date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

class TodoFormEdit extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            datePickerValue: new Date().toLocaleString(),
            currDateTimeStamp: Date.now(),
            minDate: new Date(),
            checked: true,
            dueTime: ''
        };
    }
    handleDateChange = (date) => {
        this.setState({
            datePickerValue: new Date(date).toLocaleString()
        });
    };

    handleTimeChange = (time) => {
        console.log("changed time", time);
        this.setState({
            datePickerValue: new Date(time).toLocaleString()
        });

        // Calculate secs
        let secs = time
        let convertedDateValue = Date.parse(this.state.datePickerValue);
        let DifferenceBetweenDueAndToday = convertedDateValue - this.state.currDateTimeStamp;
        this.state.dueTime = this.getTimeRemaining(DifferenceBetweenDueAndToday)
        //console.log(dueTime)
    }

    getTimeRemaining(timeDifference) {
        // timeDifference is in miliseconds > convert it to seconds
        let seconds = timeDifference/1000;
        let minutes = seconds / 60;

        // if minute is more than 60, calculate hours 
        if(minutes < 60){
            return Math.round(minutes+" minutes remaining");
        } else {
            let hours = minutes / 60;
            if(hours < 24){
                return Math.round(hours)+" hours remaining";
            } else {
                let days = hours / 24;
                if(days < 7) {
                    return Math.round(days)+ " days remaining";
                } else {
                    let weeks = days / 7;
                    if(weeks < 5) {
                        return Math.round(weeks) + " weeks remaining";
                    } else {
                        let month = weeks / 5;
                        if(month < 12) {
                            return Math.round(month) + " months remaining";
                        }
                    }
                }
            }
        }
    }

    handleChange = () => {
        this.setState({
            checked: !this.state.checked
        });
    };

    render() {
            const content = this.state.checked ? 
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-evenly">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Pick date"
                        value={this.state.datePickerValue}
                        onChange={this.handleDateChange}
                        minDate={this.state.minDate}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Select Time"
                        value={this.state.datePickerValue}
                        onChange={this.handleTimeChange}
                    />
                    </Grid>
                </MuiPickersUtilsProvider>
            </div> : null;

            return <div>
                <div className="reminder-container">
                    <label>Set Reminder</label>
                    <input 
                    type="checkbox" 
                    checked={ this.state.checked } 
                    onChange={ this.handleChange } />
                    { content }
    <label className="due-time-label">{this.state.dueTime}</label>
                </div>
            </div>;
    }
}

export default TodoFormEdit;