import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify"; 
import BookingCard from "./BookingCard";
import SignupModal from "./SignupModal";
import BookingModal from "./BookingModal";

const ScheduleTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [centers, setCenters] = useState([]);
  const [bookings, setBookings] = useState([]);

  const fetchCenters = async () => {
    try {
      const response = await fetch("http://localhost:4040/api/centers");
      const data = await response.json();
      setCenters(data);
    } catch (error) {
      console.error("Error fetching centers:", error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:4040/api/bookings");
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchCenters();
    fetchBookings();
  }, []);
  const handleNewCustomerSubmit = async (userData) => {
    try {
        const response = await fetch("http://localhost:4040/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed: ${errorData.message}`);
        }

        const newUser = await response.json();
        console.log("New user created:", newUser);
        toast.success('New customer created successfully!', { position: "top-right" }); 
    } catch (error) {
        toast.error(`Customer creation failed: ${error.message}`, { position: "top-right" }); 
    }
};

  const handleNewBookingSubmit = async (bookingData) => {
    try {
      const response = await fetch("http://localhost:4040/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed: ${errorData.message}`);
      }

      const newBooking = await response.json();
      console.log("New booking created:", newBooking);
      toast.success("New booking created successfully!", {
        position: "top-right",
      }); 
      fetchBookings();
    } catch (error) {
      toast.error(`Booking failed: ${error.message}`, {
        position: "top-right",
      }); 
    }
  };

  const selectedCenter = centers.find(
    (center) => center.location === selectedLocation
  );
  const sportData = selectedCenter?.sports.find(
    (sport) => sport.name === selectedSport
  );
  const courts = sportData?.courts || 0;
  const timeSlots = sportData?.timeSlots || [];

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.location.location === selectedLocation &&
      booking.sport.name === selectedSport &&
      booking.date.split("T")[0] === selectedDate.toISOString().split("T")[0]
  );

  const courtNames = Array.from(
    { length: courts },
    (_, index) => `Court ${index + 1}`
  );

  return (
    <div className="space-y-6">
      { }
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Schedule</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)} 
        >
          + New Customer
        </button>
      </header>

      { }
      <SignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleNewCustomerSubmit}
      />

      {/* Modal for Booking */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSubmit={handleNewBookingSubmit}
        time={selectedTime}
        court={selectedCourt}
        locationId={selectedCenter?._id} 
        sportId={sportData?._id}
        date={selectedDate}
      />

    
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
          onChange={(date) => setSelectedDate(date)}
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

     
      <div className="overflow-x-auto overflow-y-auto max-h-[600px] border rounded-lg">
        <table className="min-w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th className="sticky top-0 left-0 bg-white p-4 border w-1/6">
                Time
              </th>
              {courtNames.map((court) => (
                <th
                  key={court}
                  className="sticky top-0 bg-white p-4 border min-w-[120px] text-center"
                >
                  {court}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time) => (
              <tr key={time}>
                <td className="sticky left-0 bg-white p-4 border">{time}</td>
                {courtNames.map((court, index) => (
                  <td
                    key={court}
                    className="hover:bg-gray-100 p-4 border h-16 min-w-[120px] cursor-pointer"
                    onClick={() => {
                      setSelectedTime(time);
                      setSelectedCourt(index + 1); 
                      setIsBookingModalOpen(true); 
                    }}
                  >
                    {filteredBookings
                      .filter(
                        (booking) =>
                          booking.time === time && booking.court === index + 1
                      )
                      .map((booking) => (
                        <BookingCard
                          key={`${time}-${court}`}
                          booking={booking}
                        />
                      ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ScheduleTable;
