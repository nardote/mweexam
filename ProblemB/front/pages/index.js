import { Container, Row, Col,Jumbotron, Button, Form, Modal } from 'react-bootstrap';
import AppointmentsReserver from '../components/AppointmentsReserver/AppointmentsReserver'


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


function Home({appoType}) {

  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <Jumbotron>
              <h1>Appointment</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor eros non enim dictum, at gravida sapien semper. Nam at egestas felis. Maecenas non cursus mi.
              </p>
            </Jumbotron>

          </Col>
        </Row>

        <AppointmentsReserver appoType={appoType} />
        
      </Container>
      
    </>
  )
}


export default Home