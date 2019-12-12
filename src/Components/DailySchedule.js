import React from 'react';
import data from '../plant-data.json';
import './DailySchedule.css'



const DailySchedule = (props) => {
  
  let startingDay = new Date(2019, 11, 16).getTime();
  let plantArr = data.map(el => {return {...el, 'water_after': parseInt(el.water_after), 'starting_point': 1, 'days': [1]}});
  
  let createSchedule = (arr) => {
      let i = 1;
      while (i <= 84){
          for (let el of arr){
              if ((i%7 === 6) && ((i-el.starting_point)% el.water_after === 0)){
                el.days.push(i-1);
                el.starting_point = i-1;
            } else if((i%7 === 0) && ((i-el.starting_point)%el.water_after === 0)) {
                el.days.push(i+1);
                el.starting_point = i+1;
            } else if((i-el.starting_point) && (i-el.starting_point)%el.water_after === 0){
                el.days.push(i);
            }
          }
        i++
      }  
   return arr
  }
  
  let dailySchedule = (selectedDay) => {
    let nthDay = (parseInt(selectedDay) - startingDay)/(1000*60*60*24)+1;
    return createSchedule(plantArr).filter(elem => elem.days.includes(nthDay))
  }
  


  return (
    <div className="schedule">
       
        <table>
          <thead>
            <tr>
              <th colSpan="2" id="table-top"> Plants that need to be watered on: <u>{new Date(parseInt(props.selectedDay)).toDateString()}</u></th>
            </tr>
            <tr>
              <th>Plant name</th>
              <th>Needs water every </th>
            </tr>
          </thead>
          <tbody>{dailySchedule(props.selectedDay).map((el, index) => {
              return <tr key={index}>
                          <td>{el.name}</td><td>{el.water_after} days</td>
                      </tr>
          })}
          </tbody>
        </table>
    </div>
  )

}

export default DailySchedule;