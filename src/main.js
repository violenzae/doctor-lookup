import { GeoService } from "./../src/geo-service.js";
import { DoctorService } from "./../src/doctor-service.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

$(document).ready(function() {
  $("#doctorForm").submit(function() {
    event.preventDefault();
    const name = $("#name").val();
    const symptom = $("#symptom").val();
    const address = $("#address").val();

    (async () => {
      let newGeo = new GeoService();
      const geoResponse = await newGeo.getLatLang(address);
      const latitude = geoResponse.results[0].locations[0].latLng.lat;
      const longitude = geoResponse.results[0].locations[0].latLng.lng;

      let newList = new DoctorService();
      const response = await newList.findDoctor(
        latitude,
        longitude,
        name,
        symptom
      );
      getElements(response);
      console.log(response);
    })();

    function getElements(response) {
      $("#doctors").empty("p");
      $("#doctors").show();
      if (response) {
        if (response.data.length == 0) {
          document.getElementById("doctors").innerHTML =
            "There are no results for this search.";
        }
        for (let i = 0; i < response.data.length; i++) {
          $("#doctors").append(
            `<br><strong>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}, ${response.data[i].profile.title}</strong><br>`
          );
          if (response.data[i].specialties[0] != undefined) {
            $("#doctors").append(
              `<em>${response.data[i].specialties[0].actor}</em><br><br>`
            );
          }
          for (let j = 0; j < response.data[i].practices.length; j++) {
            if (response.data[i].practices[j].within_search_area === true) {
              $("#doctors").append(
                `Practice: <strong>${response.data[i].practices[j].name}</strong><br>Address: <em>${response.data[i].practices[j].visit_address.street}, ${response.data[i].practices[j].visit_address.city}, ${response.data[i].practices[j].visit_address.state}, ${response.data[i].practices[j].visit_address.zip}</em>`
              );
              if (response.data[i].practices[j].accepts_new_patients == true) {
                $("#doctors").append(
                  "<br>Accepting new patients?: <strong>Yes</strong><br>");
              } else {
                $("#doctors").append(
                  "<br>Accepting new patients?: <strong>No</strong><br>");
              }

              for (let k = 0; k < response.data[i].practices[j].phones.length; k++) {
                if (
                  response.data[i].practices[j].phones[k].type == "landline") {
                  $("#doctors").append(`Phone: ${response.data[i].practices[j].phones[k].number}<br><br>`);
                }
              }
            }
          }
          $("#doctors").append(`<hr></hr>`);
        }
      } else {
        document.getElementById("doctors").innerHTML =
          "Something went wrong with this request (better doctor).";
      }
    }
  });
});
