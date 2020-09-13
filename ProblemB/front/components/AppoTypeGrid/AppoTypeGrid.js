import { Row, Col,Form } from 'react-bootstrap';
import moment from 'moment'

function AppointmentsReserver({appoType}) {

    const selectValues = () => {
        const x = 15; //minutes interval
        const times = []; 
        let tt = 0; // start time
        
        for (var i=0;tt<24*60; i++) {
            var hh = Math.floor(tt/60); 
            var mm = (tt%60); 
            times[i] = '<option value="'+hh+':'+mm+'">hh:mm</option>'; 
            tt = tt + x;
        }

        return times
    }
    return (
        <>
{selectValues()}
            {appoType.map((type,i) => (
               <Form.Row className="align-items-center">
                    <Col xs="auto" className="my-1">
                        <span>{type.name}</span>
                        
                        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                            Start day
                        </Form.Label>
                        <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                        >
                            {selectValues()}
                        </Form.Control>


                        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                            End day
                        </Form.Label>
                        <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                        >
                            {selectValues()}
                        </Form.Control>

                    </Col>
                </Form.Row>
            ))}
        </>
    )
}

export default AppointmentsReserver