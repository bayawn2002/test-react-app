import React from "react";
import 'components/listItem/customerInfo/CustomerInfo.css';

function CustomerInfo(props) {
  return (
    <div className="section customer-info-section">
      <p className="customer-info">{props.customer.name}</p>
      <p className="customer-info">{props.vehicle.year + " " + props.vehicle.make + " "+ props.vehicle.model}</p>
      <p className="customer-info">VIN: {props.vehicle.vin}</p>
    </div>
  );
}

export default CustomerInfo;
