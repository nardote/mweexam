import { Row, Col,Form } from 'react-bootstrap';
import { useState, useMemo } from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment'
import axios from 'axios';

import SimpleGridAppointment from '../SimpleGridAppointment/SimpleGridAppointment'
import ModalReserver from '../ModalReserver/ModalReserver' 

import styles from './Appointment.module.css';

function AppointmentsReserver({appoType, defaultAppointment, onChange}) {
    //its used in labels
    //TODO find a solution
    const uniqueId = Math.random().toString(36).substr(2, 9);

    //auxiliar function
    const getPreviousAppointments = async () => {

        if(appoTypeSelected && date) {
    
          const config = {
              method: 'get',
              url: 'http://localhost:3000/api/appointment/'+date.toISOString()+'/'+appoTypeSelected.id
          }
    
          const res = await axios(config)
    
          setPreviousAppointments(res.data)
    
        }
    }

    
    

    //States
    const [appoTypeSelected, setAppoTypeSelected] = useState(defaultAppointment?defaultAppointment.appoType:'');
    const [date, setDate] = useState(defaultAppointment?new Date(moment(defaultAppointment.appointment.date_start)):new Date);
    const [appointmentData,setAppointmentData] = useState(defaultAppointment?defaultAppointment:{})
    const [showModal,setShowModal] = useState(false)
    const [previousAppointments, setPreviousAppointments] = useState([]);


    //Hooks
    useMemo(() => {    
        getPreviousAppointments();
          
    }, [appoTypeSelected,date]) 

    
    //Handles
    const handleClose = () => {
        setShowModal(false);
    }


    //When change any part fire onChange
    const syncInfo = useMemo( () => {
        if(defaultAppointment && appointmentData.appointment) {
            const appointmentDataModified = {...defaultAppointment};
            appointmentDataModified.appointment.date_start = date; 
            appointmentDataModified.appointment.time = appointmentData.appointment.time;
            appointmentDataModified.appoType = appoTypeSelected;

            onChange?onChange(appointmentDataModified):null
         
        }
    },[appoTypeSelected, date, appointmentData])


    
   
    return (
        <>
            <Row>
                <Col sm className={styles.column}>
                    <h3>1. Select a type of appointment</h3>
                    <Form>
                    {appoType.map((type,i) => (
                        <Form.Check key={i} type="radio" id={`check-api-${uniqueId}-${i}`}>
                            <Form.Check.Input type="radio" name="appotypes" checked={ appoTypeSelected.id === type.id } onChange={() => setAppoTypeSelected(type)} />
                            <Form.Check.Label>{type.name}</Form.Check.Label>
                            <div>{`Customer service hours: ${type.start_day} - ${type.end_day}`}</div>
                        </Form.Check>
                    ))}
                    </Form>
                </Col>
                <Col sm className={styles.column}>
                    <h3>2. Select a date</h3>
                    <DatePicker selected={date} onChange={date => setDate(date)} minDate={new Date} />
                </Col>
                <Col sm className={styles.column}>
                    <h3>3. Select a schedule</h3>
                    <SimpleGridAppointment
                            previousAppointments={previousAppointments}
                            appoType={appoTypeSelected} 
                            date={date} 
                            selectedMode={defaultAppointment?true:false} 
                            onChange={(appointmentData, showModal) => { setAppointmentData(appointmentData), setShowModal(showModal) }} />              
                </Col>
            </Row>

            {showModal ? <ModalReserver 
                            handleClose={handleClose} 
                            appointmentData={appointmentData} 
                            onChange={appointmentDataModified => { setAppointmentData(appointmentDataModified) ; getPreviousAppointments();} } />  : '' }
        </>
    )

}

export default AppointmentsReserver