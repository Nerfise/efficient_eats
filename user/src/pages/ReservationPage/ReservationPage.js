import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";

const ReservationPage = () => {
  const calendarRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    numberOfPerson: "",
    tableType: "NonVIP",
    date: "",
    notes: "",
  });

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/appointments/", formData);
      alert("You have successfully created a reservation!")
      setFormData({
        name: "",
        email: "",
        contactNo: "",
        numberOfPerson: "",
        tableType: "NonVIP",
        date: "",
        notes: "",
      });
    } catch (error) {
      alert("Someone already reserved for this spot, please select another date and time!");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
        Make a Reservation
      </h1>

      <div className="w-full max-w-5xl dark:bg-gray-700 dark:text-white rounded-lg p-8 shadow-lg dark:shadow-blue-500">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Reservation Calendar</h2>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            height="auto"
            aspectRatio={1.5}
          />
        </div>
        <div>
          <button
            onClick={handleShowForm}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Reserve a Table
          </button>
        </div>
        {showForm && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Reservation Form</h2>
            <form
              onSubmit={handleSubmit}
              className="text-gray-900 dark:text-black"
              
            >
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Contact */}
              <div className="mb-4">
                <label htmlFor="contactNp" className="block text-sm font-medium dark:text-white">
                  Contact
                </label>
                <input
                  type="text"
                  name="contactNo"
                  id="contactNo"
                  required
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Number of Persons */}
              <div className="mb-4">
                <label htmlFor="numberOfPersons" className="block text-sm font-medium dark:text-white">
                  Number of Persons
                </label>
                <input
                  type="number"
                  name="numberOfPerson"
                  id="numberOfPerson"
                  required
                  value={formData.numberOfPerson}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Table Type */}
              <div className="mb-4">
                <label htmlFor="tableType" className="block text-sm font-medium dark:text-white">
                  Table Type
                </label>
                <select
                  name="tableType"
                  id="tableType"
                  required
                  value={formData.tableType}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-500"
                >
                  <option value="NonVIP">Non-VIP</option>
                  <option value="SemiVIP">Semi-VIP</option>
                  <option value="VIP">VIP</option>
                </select>
              </div>

              {/* Date and Time */}
              <div className="mb-4">
                <label htmlFor="dateTime" className="block text-sm font-medium dark:text-white">
                  Date and Time
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Notes */}
              <div className="mb-4">
                <label htmlFor="notes" className="block text-sm font-medium dark:text-white">
                  Notes
                </label>
                <textarea
                  name="notes"
                  id="notes"
                  rows="4"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full rounded-lg border-gray-300 focus:ring focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit and Cancel Buttons */}
              <div className="mt-4">
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gray-900 dark:bg-blue-500 text-white font-semibold rounded-full hover:scale-105 transform transition duration-300 ease-in-out"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleHideForm}
                    className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:scale-105 transform transition duration-300 ease-in-out"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationPage;
