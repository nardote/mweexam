import React, { useState,useContext, useMemo } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { UserContext } from '../../contexts/UserContext'
import axios from 'axios';
import moment from 'moment'

import AppointmentsReserver from '../AppointmentsReserver/AppointmentsReserver'


export default function ModalReserver({handleClose, appointmentData, onChange}) {
   
    //its used in labels
    const uniqueId = Math.random().toString(36).substr(2, 9);

    //States
    const {userType} = useContext(UserContext);
    const [appoType, setAppoType] = useState([])
    const [name, setName] = useState(appointmentData?appointmentData.appointment.name:'')
    const [appointmentDataState, setAppointmentDataState ] = useState({})
    
    //Hooks
    useMemo(async () => {
      
      const config = {
          method: 'get',
          url: 'http://localhost:3000/api/appoType'
      }

      const res = await axios(config)
      setAppoType(res.data)

    },[])

    
    //Handlers
    const handleSave = async () => {

        if(!appointmentData.appointment.hasOwnProperty('time')) {            
            appointmentData.appointment.time =  moment(appointmentData.appointment.date_start).format('HH:mm')
        }

        appointmentData.appointment.name = name;

        const startHourSplit = appointmentData.appointment.time.split(':')
        const date_start = moment(appointmentData.appointment.date_start).set({h: startHourSplit[0], m: startHourSplit[1]})

        //date_end remove from the project 
        const date_end = moment(appointmentData.appointment.date_start).set({h: startHourSplit[0], m: startHourSplit[1]})
        date_end.add(appointmentData.appoType.module_block, 'minutes')

        let params = {};
        let res;

        if(appointmentData.appointment.hasOwnProperty('id') && appointmentData.appointment.id) {
            //update
            params = {
                id: appointmentData.appointment.id,
                name: name,
                date_start: date_start.format('YYYY-MM-DD HH:mm:ss'),
                pb_appo_type_id: appointmentData.appoType.id,
                date_end: date_end.format('YYYY-MM-DD HH:mm:ss')
            }
            res = await axios.put('http://localhost:3000/api/appointment/'+params.id, params);

        } else {

            //create
            params = {
                name: name,
                date_start: date_start.format('YYYY-MM-DD HH:mm:ss'),
                pb_appo_type_id: appointmentData.appoType.id,
                date_end: date_end.format('YYYY-MM-DD HH:mm:ss')
            }
            res = await axios.post('http://localhost:3000/api/appointment', params);
        }

        //fire change to parent
        onChange(appointmentData);
        //close Modal
        handleClose();
    }
  

    return (
        <>
          <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Appoinment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
           
              <Form.Group controlId={uniqueId+"_name"}>
                  <Form.Label >Your name</Form.Label>
                  <Form.Control type="text" placeholder="" onChange={event => setName(event.target.value)} defaultValue={appointmentData.appointment?appointmentData.appointment.name:''} />
                  <Form.Text className="text-muted">
                    To reserve, your name is required.
                  </Form.Text>
              </Form.Group>

              { 
                userType === 'admin' && appointmentData.appointment.id ?
                  <>
                      <AppointmentsReserver appoType={appoType} defaultAppointment={appointmentData} onChange={appointmentDataModified => { setAppointmentDataState(appointmentDataModified);  } } />
                  </>
                : ''
              }
                
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                  Close
              </Button>
              <Button variant="primary" onClick={handleSave}>
                  Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
    )
}