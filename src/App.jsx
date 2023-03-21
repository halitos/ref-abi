import { Button, Form } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="heading">Post a Job</h1>
      <Form className="main p-2">
        <div className="section mx-4 my-2">
          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formLabel">Job Title :</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>
          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formLabel">Job Type :</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>
          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formLabel">Email address:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="formLabel">Job Description:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="formLabel">Responsibilities:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <h3 className="mb-4">Constraints:</h3>
          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formLabel">Job Title :</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>
          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formLabel">Job Type :</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>
          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formLabel">Job Title :</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>
          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formLabel">Job Type :</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>
        </div>
        <div className="section mx-4 my-2">
          <Form.Group
            className="group group mb-3 d-flex"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formLabel">Job Title :</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>
          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formLabel">Job Type :</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>
          <h3 className="mb-4">Contact Info:</h3>
          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formLabel">Email address:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="formLabel">Job Description:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="formLabel">Responsibilities:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group
            className="group mb-3 d-flex"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formLabel">Job Type :</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>
          <div className="d-flex justify-content-end p-2">
            <Button className="btn btn-danger">Previews</Button>
            <Button className="btn btn-danger">Publish</Button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default App;
