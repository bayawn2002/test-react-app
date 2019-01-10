import React from "react";

import List from 'components/List';

//import { post } from 'helpers/ajax';

function ServiceAdvisor(props) {
  var listItems = loadItems();
  return (
    <div className="App">
      Service Advisor

      <List listItems={listItems} />
    </div>
  );
}

function loadItems(){
  return [
    { id: 1, type: "visit", action: "check-in", data: { appt: ""}, customer: { name: "Leanne Graham"}, vehicle: { year: 2018, make: "Chevrolet", model: "Malibu", vin: "1234567890"}, note: {} },
    { id: 2, type: "target", action: "to-do", data: {}, customer: { name: "Ervin Howell"}, vehicle: { year: 2018, make: "Chevrolet", model: "Malibu", vin: "1234567890"}, note: {} },
    { id: 3, type: "target", action: "engage", data: {}, customer: { name: "Clementine Bauch"}, vehicle: { year: 2018, make: "Chevrolet", model: "Malibu", vin: "1234567890"}, note: {} },
    { id: 4, type: "visit", action: "check-in", data: { appt: ""}, customer: { name: "Patricia Lebsack"}, vehicle: { year: 2018, make: "Chevrolet", model: "Malibu", vin: "1234567890"} , note: {}}
  ];
}

export default ServiceAdvisor;
