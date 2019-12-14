import React, { Component } from 'react';
import DailySchedule from '../Components/DailySchedule'
import './Calendar.css';




class Calendar extends Component {

    constructor() {
        super()
        this.state = {
          dayClicked: Date.now()
        }
    }


    //takes as argument the month's index and returns an array with the month's days wrapped inside div tags
    createMonth = (month) => {

        let startDate = new Date(2019, 11, 16);
        let endDate = new Date(2020, 2, 8)
        let date = new Date(2019, month);
        let now = new Date();
        let select = new Date(parseInt(this.state.dayClicked));
        
        //determines the number of the week from the 12 required, based on the specific date from calendar
        function getWeekNo(dayInMonth){
          let numberOfDays = (new Date(2019, month, dayInMonth+2).getTime() - startDate.getTime())/(24*60*60*1000)
          let weekNo = Math.ceil(numberOfDays/7)
          if (weekNo > 0 && weekNo <=12){
            return weekNo
          }
        }
        
        let daysArr = [];
        let daysInMonth = new Date(2019, month+1, 0).getDate();  //determines how many days there are in each month

        let d = 1;
        daysArr.push(<div key={d+month*10} className="calendar-date calendar-date--week">{getWeekNo(1)}</div>)
          for (let i=0; i<date.getDay(); i++){
            daysArr.push( <div key={i} className="calendar-date calendar-date--disabled"></div>)
            }
          while (d <= daysInMonth) {
                if(new Date(2019, month, d).getDay() === 0 && d !== 1){
                     daysArr.push(<div key={d+50} className="calendar-date calendar-date--week">{getWeekNo(d)}</div>,
                                  <div key={d+month*100} className="calendar-date calendar-date--disabled" data-calendar-date={date.setDate(d)} data-calendar-status="active">{d}</div>)
                } else if(new Date(2019, month, d).getDay() === 0){
                                  daysArr.push( <div key={d+month*100} className="calendar-date calendar-date--disabled" data-calendar-date={date.setDate(d)} data-calendar-status="active">{d}</div>)  
                } else if(new Date(2019, month, d).getDay() === 6){
                     daysArr.push( <div key={d+month*100} className="calendar-date calendar-date--disabled" data-calendar-date={date.setDate(d)} data-calendar-status="active">{d}</div>)     
                } else if(new Date(2019, month, d).getTime() < startDate.getTime() || new Date(2019, month, d).getTime() > endDate.getTime()){
                     daysArr.push(<div key={d+month*100} className="calendar-date calendar-date--disabled" data-calendar-date={date.setDate(d)} data-calendar-status="active">{d}</div>)   
                } else if(d === select.getDate() && select.getMonth() === date.getMonth()){
                     daysArr.push( <div key={d+month*100} className="calendar-date calendar-date--active calendar-date--selected" data-calendar-date={date.setDate(d)} >{d}</div>)
                } else if(d === now.getDate() && now.getMonth() === date.getMonth()){
                     daysArr.push( <div key={d+month*100} className="calendar-date calendar-date--active" id="calendar-date--today" data-calendar-date={date.setDate(d)} >{d}</div>)
                } else {
                     daysArr.push( <div key={d+month*100} className="calendar-date calendar-date--active" data-calendar-date={date.setDate(d)} data-calendar-status="active">{d}</div>)
                }
                d++
            }
        
        return daysArr;
      }


    //takes as argument the month's index and returns month's name and year for the calendar's header
    getMonthYear = (month) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = new Date(2019, month)
        return months[month%12] + " " + date.getFullYear()
    }

    //updates state with the specific date clicked   
    displayDay = (event) => {
            event.target.className === "calendar-date calendar-date--active" &&
            this.setState({
                dayClicked: event.target.dataset.calendarDate,
            }) 
    }
    
    //returns 4 months intended to cover the 12 weeks required
    createCalendar = () => {
        let arr = []
        let startMonth = 11; //index of December from array of months
        let endMonth = 14;   //this is hardcoded in order to only cover the 12 weeks required
        
        for (let i = startMonth; i <= endMonth; i++){
         arr.push(  <div key={i+1000} className="calendar" >
                        <div className="calendar-header">
                            <div className="calendar-header__label" data-calendar-label="month">{this.getMonthYear(i)}</div>
                        </div>
                        <div className="calendar-week">
                          <span id="week-no">Week No</span>
                          <span>Sun</span>
                          <span>Mon</span>
                          <span>Tue</span>
                          <span>Wed</span>
                          <span>Thu</span>
                          <span>Fri</span>
                          <span>Sat</span>
                        </div>
                        <div className="calendar-body" data-calendar-area="month">
                           {this.createMonth(i)}
                        </div>
                    </div>)
        }
      return arr
    }


      render(){
      
        return(
          <div className="schedule-container">
            <div onClick={this.displayDay} className="calendar-container">
                 {this.createCalendar()}
            </div>
            <DailySchedule selectedDay={this.state.dayClicked} />
          </div>
          )
      }
}

export default Calendar;