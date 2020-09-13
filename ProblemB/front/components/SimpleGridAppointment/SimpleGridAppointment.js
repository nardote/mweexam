import React, { useState, useMemo, useEffect } from 'react';
import moment from 'moment'

import CellAppointment from '../CellAppointment/CellAppointment'

export default function SimpleGridAppointment({previousAppointments,appoType,date, selectedMode, onChange}) {

 
  //handlers
  // const handleRealoadGrid = () => {
  //   getPreviousAppointments()
  // }
  
  //Render function
  const renderCells = (previousAppointments) => {


    const cellsToDrawList = [];
    if(appoType) {
      
      const startHourSplit = appoType.start_day.split(':')
      const endHourSplit = appoType.end_day.split(':')

      const diff = moment().set({h: endHourSplit[0], m: endHourSplit[1]}).diff(moment().set({h: startHourSplit[0], m: startHourSplit[1]}))
    
      //calculate how much modules draw
      const modulesLength = diff/1000/60/appoType.module_block

      const startDayTime = moment().set({h: startHourSplit[0], m: startHourSplit[1]})

      const cells = [];
      for(let i = 0; i<=modulesLength; i++) {
        

        //if its first iteration, not add module_block
        const time = startDayTime.format('HH:mm')
        if(i!=0) {
          time = startDayTime.add(appoType.module_block, 'minutes').format('HH:mm')
        } 
        
        
          const inUse = []; 
          previousAppointments.map(value => {
            const dateStartPrevAppo = moment(value.date_start) 
            if(dateStartPrevAppo.format("HH:mm") == startDayTime.format('HH:mm')) {
              inUse.push(value);
            }
            
          })
          const obj = {
            time:time,
            inuse: inUse
          }
          cells.push(obj);
          
      }

      

      //now, with all tree generate, create all cells
      cells.map((value,k) => {    
          for(let j = 0; j<=appoType.simultaneous_appo-1; j++) {

            const startHourSplit = value.time.split(':')

            const appointment = {
              time: value.time,
              date_start: moment(date).set({h: startHourSplit[0], m: startHourSplit[1]})
            };

            if(typeof value.inuse[j] !== 'undefined') {

              //sanitize data
              const prevAppo = value.inuse[j];
              prevAppo.date_start = moment(prevAppo.date_start);
              appointment = {...appointment, ...prevAppo};

            }

            const appointmentData = {            
              appointment: appointment,
              appoType: appoType
            }
            
            cellsToDrawList.push(<CellAppointment key={j+""+k}
                                                  id={j+""+k}
                                                  time={value.time} 
                                                  appointmentData={appointmentData} 
                                                  selectedMode={selectedMode} 
                                                  onClick={showModal => onChange(appointmentData, showModal) } />)
      
          }
      
        })
    
    } 

    return cellsToDrawList
  }
    
  
  return (
    <div >
      {renderCells(previousAppointments)}       
    </div>    
  )
}
