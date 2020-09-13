import React, { useState,useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../../contexts/UserContext'

import ButtonAdmin from '../ButtonAdmin/ButtonAdmin' 

import styles from './CellAppointment.module.css';

export default function CellAppointment({id, time, appointmentData, handleRealoadGrid, selectedMode, onClick}) {

  //States
  const [showModal,setShowModal] = useState(false)

  //Handlers
  const handleClose = () => {
    setShowModal(false);
    handleRealoadGrid();
  }

  //Hooks
  const {userType} = useContext(UserContext);


  //Render function
  const renderButton = () => {

    if (selectedMode) {
      if (appointmentData.appointment.name) {
        return <span>{appointmentData.appointment.name}</span>
      } else {
        return (
          <Form.Check type="radio" id={id} className={styles.inline}>
            <Form.Check.Input type="radio" name="appotypes" onClick={()=> onClick(false)} /> 
            <Form.Check.Label>Free  </Form.Check.Label>
          </Form.Check>
        )
      }
    }

    if (appointmentData.appointment.name && userType == 'admin') {    
      return <ButtonAdmin size="sm" variant="warning" onClick={()=> onClick(true)}  name={appointmentData.appointment.name} /> 
    } else if (appointmentData.appointment.name) {
      return <span className={styles.reserved}>{appointmentData.appointment.name}</span>
    }  else {
      return <Button size="sm" variant="success"  onClick={()=> onClick(true)}>Add a appoinment</Button>
    }
  
  }


  return (
    <div >
      <div>
        <span className={styles.time}>{time}</span> 
        {renderButton()}
      </div>
    </div>  
  )

}
