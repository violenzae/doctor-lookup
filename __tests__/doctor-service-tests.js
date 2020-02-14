import { MapService } from "../src/map-service.js"
import { IssService } from "../src/iss-service.js"

describe("MapService", () => {

  test("should return an array", () => {
    let location = new MapService();
    async () => {
      const latLng = location.getAddressLocation("1060 W. Addison St., Chicago IL, 60613");
      console.log(latLng);

      expect(latLng).toEqual([41.947239, -87.655636]);
    }
  })
});

describe("IssService", () => {
  test("should return the correct latitude", () => {
    let space = new IssService();
    async () => {
      const lat = space.getISSLocation(41.947239, -87.655636);
      expect(lat.request.latitude).toEqual(41.947239);
    }
  })
})