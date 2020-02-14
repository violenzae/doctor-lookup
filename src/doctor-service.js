export class DoctorService {
  async findDoctor(name, symptom) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=45.5051%2C-122.6750%2C100&user_location=45.5051%2C-122.6750&sort=best-match-asc&skip=0&limit=20&user_key=${process.env.API_KEY}`);
      let jsonified;
      if (response.ok && response.status == 200) {
       jsonified = await response.json();
       console.log(jsonified);
      } else {
        jsonified = false;
      }
      return jsonified;
    } catch(error) {
      return false;
    }
  }
}



