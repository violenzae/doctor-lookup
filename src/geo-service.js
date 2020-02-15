export class GeoService {
  async getLatLang(address) {
    try {
      let response = await fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.OTHER_API_KEY}&location=${address}`);
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



