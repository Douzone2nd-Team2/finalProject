import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import ResourceFileUploadTest from './ResourceFileUploadTest';
const ResourceInput = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [valued, setValued] = useState('');

  const handleChange = (e) => {
    setValued(e.target.value);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ float: 'right' }}>
        등록
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Resource Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <ResourceFileUploadTest />
              <Form.Label>카테고리</Form.Label>

              <Form.Select onChange={handleChange} value={valued}>
                <option value="회의실">회의실</option>
                <option value="차량">차량</option>
                <option value="노트북">노트북</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>자원이름</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>사용여부</Form.Label>
              <Form.Check /> Y <Form.Check /> N
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>이용가능시간</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>옵션</Form.Label>
              <Form.Control />
            </Form.Group>
            {valued == '회의실' ? (
              <>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>위치</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>인원</Form.Label>
                  <Form.Control />
                </Form.Group>
              </>
            ) : valued === '차량' ? (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>연료</Form.Label>
                <Form.Control />
              </Form.Group>
            ) : (
              <></>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ResourceInput;
