import { Container, Row, Col,Jumbotron, Button, Form, Modal } from 'react-bootstrap';
import AppointmentsReserver from '../../components/AppointmentsReserver/AppointmentsReserver'
import { UserContext } from '../../contexts/UserContext'


//prefetch data
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/appoType')
  const appoType = await res.json()

  return {
    props: {
      appoType,
    },
  }
}


function HomeAdmin({appoType}) {


  const userType = {
      userType: 'admin'
  }
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <Jumbotron>
              <h1>Admin Appointment</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
            </Jumbotron>
          </Col>
        </Row>

        <UserContext.Provider value={userType}>
            <AppointmentsReserver appoType={appoType} />
        </UserContext.Provider>
        
      </Container>      
    </>
  )
}


export default HomeAdmin