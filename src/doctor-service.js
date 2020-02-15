export class DoctorService {
  async findDoctor(latitude, longitude, name, symptom) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=${latitude}%2C${longitude}%2C25&user_location=${latitude}%2C${longitude}&sort=best-match-asc&skip=0&limit=20&user_key=${process.env.API_KEY}`);
      let jsonified;
      if (response.ok && response.status == 200) {
        jsonified = await response.json();
      } else {
        jsonified = false;
      }
      return jsonified;
    } catch(error) {
      return false;
    }
  }
}



