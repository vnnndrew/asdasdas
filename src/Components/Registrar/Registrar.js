import React from "react";
import { Modal } from '../Modal/Modal';

// reactstrap components
import { FormGroup, Form, Input } from "reactstrap";

export function Registrar() {
  return (
    <>
      <div class="Registrar">
        <Modal>
          <Form >
            <div class="Caja">
              <FormGroup>
                <label className="form-control-label" htmlFor="example-text-input">
                  Nombre
                </label>
                <Input defaultValue="John Snow" id="example-text-input" type="text">
                </Input>
              </FormGroup>

              <FormGroup>
                <label className=" form-control-label" htmlFor="example-search-input">
                  Rut
                </label>
                <Input
                  defaultValue="Tell me your secret ..." id="example-search-input" type="text">
                </Input>
              </FormGroup>

              <FormGroup>
                <label className=" form-control-label" htmlFor="example-url-input">
                  Email
                </label>
                <Input
                  defaultValue="" id="example-url-input" type="email">
                </Input>
              </FormGroup>

              <FormGroup>
                <label className=" form-control-label" htmlFor="example-password-input">
                  Password
                </label>
                <Input
                  defaultValue="password" id="example-password-input" type="password"
                ></Input>
              </FormGroup>

              <FormGroup>
                <label className=" form-control-label" htmlFor="example-number-input">
                  Direccion
                </label>
                <Input defaultValue="23" id="example-number-input" type="text"
                ></Input>
              </FormGroup>

            </div>
          </Form>
        </Modal>
      </div>
    </>
  );
}

