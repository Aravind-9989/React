import React from 'react';
import BootstrapSpinner from 'react-bootstrap/Spinner';

function MySpinner() {
  return (
    <div>
      <BootstrapSpinner animation="border" variant="primary" />
      <BootstrapSpinner animation="border" variant="secondary" />
      <BootstrapSpinner animation="border" variant="success" />
      <BootstrapSpinner animation="border" variant="danger" />
      <BootstrapSpinner animation="border" variant="warning" />
      <BootstrapSpinner animation="border" variant="info" />
      <BootstrapSpinner animation="border" variant="light" />
      <BootstrapSpinner animation="border" variant="dark" />
      <BootstrapSpinner animation="grow" variant="primary" />
      <BootstrapSpinner animation="grow" variant="secondary" />
      <BootstrapSpinner animation="grow" variant="success" />
      <BootstrapSpinner animation="grow" variant="danger" />
      <BootstrapSpinner animation="grow" variant="warning" />
      <BootstrapSpinner animation="grow" variant="info" />
      <BootstrapSpinner animation="grow" variant="light" />
      <BootstrapSpinner animation="grow" variant="dark" />
    </div>
  );
}

export default MySpinner;
