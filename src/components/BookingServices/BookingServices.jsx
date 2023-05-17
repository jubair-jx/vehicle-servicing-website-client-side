import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/Provider";
import BookingServicesRow from "./BookingServicesRow";
import { useNavigate } from "react-router-dom";

const BookingServices = () => {
  const navigate = useNavigate();
  const { users } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/booking?email=${users.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token-pass")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          navigate("/");
        }
      });
  }, [url, navigate]);

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
  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const update = bookings.find((booking) => booking._id === id);
          update.status = "confirm";
          const newBookings = [update, ...remaining];
          setBookings(newBookings);
        }
        console.log(data);
      });
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
                handleBookingConfirm={handleBookingConfirm}
              ></BookingServicesRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingServices;
