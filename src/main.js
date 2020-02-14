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
      if (response.data.length == 0) {
        document.getElementById("doctors").innerHTML = "There are no results for this search."
      }
      if (response) {
        for(let i=0; i < response.data.length; i++) {
          $('#doctors').append(`${response.data[i].profile.first_name} ${response.data[i].profile.last_name}, ${response.data[i].profile.title}<br>`);
          
          for(let j=0; j < response.data[i].practices.length; j++) {
            if (response.data[i].practices[j].within_search_area === true) {
              $('#doctors').append(`Address: <em>${response.data[i].practices[j].visit_address.street}, ${response.data[i].practices[j].visit_address.city}, ${response.data[i].practices[j].visit_address.state}, ${response.data[i].practices[j].visit_address.zip}</em><br>`);
            }
          }
        }
      } else {
        document.getElementById("doctors").innerHTML = "Something went wrong with this request.";
      }
    }

  });
});