import { DoctorService } from './../src/weather-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  $('#doctorForm').submit(function() {
    const name = $('#name').val();
    const symptom = $('#symptom').val();
    $("#doctors").empty();

    (async () => {
      let newList = new DoctorService();
      const response = await newList.findDoctor(name, symptom);
      getElements(response);
    })();

    function getElements(response) {
      if (response.meta.count == 0) {
        $("#doctors").text("Sorry, there are no results for this search!");
      }
      // if (response) {
      //   $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      //   $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      // } else {
      //   $('.showHumidity').text(`There was an error handling your request.`);
      //   $('.showTemp').text(`Please check your inputs and try again!`);
    //   }
    }

  });
});