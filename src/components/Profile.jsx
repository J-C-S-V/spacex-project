import React from 'react';
import '../styles/profile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const Profile = () => (
  <>
    <Container className="mt-5">
      <Row>
        <Col xs={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Rockets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td colSpan={2}>Larry the Bird</td>

              </tr>
              <tr>
                <td>2</td>
                <td colSpan={2}>Larry the Bird</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
              </tr>
            </tbody>

          </Table>
        </Col>
        <Col xs={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Missions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td colSpan={2}>Larry the Bird</td>

              </tr>
              <tr>
                <td>2</td>
                <td colSpan={2}>Larry the Bird</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
              </tr>
            </tbody>

          </Table>

        </Col>
      </Row>
    </Container>
  </>
);

export default Profile;