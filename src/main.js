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
          $('#doctors').append(`<strong>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}, ${response.data[i].profile.title}</strong><br><br>`);
          
          for(let j=0; j < response.data[i].practices.length; j++) {
            if (response.data[i].practices[j].within_search_area === true) {
              $('#doctors').append(`${response.data[i].practices[j].name}<br>Address: <em>${response.data[i].practices[j].visit_address.street}, ${response.data[i].practices[j].visit_address.city}, ${response.data[i].practices[j].visit_address.state}, ${response.data[i].practices[j].visit_address.zip}</em><br>`);
              
              for(let k=0; k < response.data[i].practices[j].phones.length; k++) {
                if (response.data[i].practices[j].phones[k].type == "landline") {
                  $('#doctors').append(`Phone: ${response.data[i].practices[j].phones[k].number}<br><br>`);
                }

              }
            }
          }
        }
      } else {
        document.getElementById("doctors").innerHTML = "Something went wrong with this request.";
      }
    }

  });
});