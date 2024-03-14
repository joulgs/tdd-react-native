import LocationService from "../LocationService";

test("should retun latitude and longitude of the current location", async () => {
  const location = await LocationService.getCurrentPosition();

  expect(location).toEqual({
    latitude: 0,
    longitude: 0,
  });
});
