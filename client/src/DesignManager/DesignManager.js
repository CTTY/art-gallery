import React, {useState, useEffect} from 'react';
import '../App.css';

// Import Bootstrap Components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function DesignManager() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <React.Fragment>
    {/* breadcrumb */}
    <div className="breadcumb-area">
        <div className="container h-100">
            <div className="row h-100 align-items-end">
                <div className="col-12">
                    <div className="breadcumb--con">
                        <h2 className="title">Design Manager</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html"><i class="fa fa-home"></i> Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Design Manager</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Container>
        <Jumbotron>
          <h1 style={{"fontSize": 80}}>Design Manager</h1>
          <p style={{"fontSize": 30}}> Manage your design here</p>
        </Jumbotron>
        <Row>
          <Col xs={7}><h1>Designs</h1></Col>
          <Col xs={2}></Col>
          <Col><Button variant="primary" onClick={handleClick} block>Add a new design</Button></Col>
        </Row>
        <Table striped bordered hover responsive variant="dark">
            <tr>
              <th width="10%">#</th>
              <th width="25%">Title</th>
              <th width="30%">URL</th>
              <th width="35%">Action</th>
            </tr>
            <tbody id="content" />
        </Table>

      {/* Pop up window */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Upload Design</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="form.design">
              <Form.Label>Design</Form.Label>
              <Form.Control type="file"/>
              <Form.Text className="text-muted">Please upload your design here</Form.Text>
            </Form.Group>
            <Form.Group controlId="form.description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Please enter description here" />
            </Form.Group>
            
          </Form>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Upload
        </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </React.Fragment>
  );
}

// ReactDOM.render(<Demo />, document.getElementById("Demo"));
export default DesignManager;
