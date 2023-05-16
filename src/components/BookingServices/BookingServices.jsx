import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/Provider";
import BookingServicesRow from "./BookingServicesRow";

const BookingServices = () => {
  const { users } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/booking?email=${users.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("SuccessFully Deleted");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingServicesRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                // handleBookingConfirm={handleBookingConfirm}
              ></BookingServicesRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingServices;
