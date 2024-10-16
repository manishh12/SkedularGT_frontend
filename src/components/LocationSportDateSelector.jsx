import DatePicker from "react-datepicker";

const LocationSportDateSelector = ({
  centers,
  selectedLocation,
  setSelectedLocation,
  selectedDate,
  setSelectedDate,
  selectedSport,
  setSelectedSport,
  selectedCenter,
}) => (
  <div className="flex space-x-4">
    <select
      value={selectedLocation}
      onChange={(e) => setSelectedLocation(e.target.value)}
      className="border rounded p-2"
    >
      <option value="">Select Location</option>
      {centers.map((center) => (
        <option key={center._id} value={center.location}>
          {center.location}
        </option>
      ))}
    </select>
    <DatePicker
      selected={selectedDate}
      onChange={setSelectedDate}
      className="border rounded p-2"
    />
    <select
      value={selectedSport}
      onChange={(e) => setSelectedSport(e.target.value)}
      className="border rounded p-2"
    >
      <option value="">Select Sport</option>
      {selectedCenter?.sports.map((sport) => (
        <option key={sport._id} value={sport.name}>
          {sport.name}
        </option>
      ))}
    </select>
  </div>
);

export default LocationSportDateSelector;
