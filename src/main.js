import { DoctorService } from './../src/doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  $('#doctorForm').submit(function() {
    event.preventDefault();
    const name = $('#name').val();
    const symptom = $('#symptom').val();
    $("#doctors").empty();

    (async () => {
      let newList = new DoctorService();
      const response = await newList.findDoctor(name, symptom);
      getElements(response);
      console.log(response);
    })();

    function getElements(response) {
      if (response.meta.count == 0) {
        document.getElementById("doctors").innerHTML = "There are no results for this search."
      }
      if (response) {
        document.getElementById("doctors").innerHTML = "Working. technically"
        // for(let i=0; i < response.meta.count.length; i++) {
        //   // $('#doctors').append(`Dr. ${city} is ${response.main.humidity}%`);
        // }
      } else {
        document.getElementById("doctors").innerHTML = "Something went wrong with this request."
      }
    }

  });
});