import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/Provider";

const BookingServices = () => {
  const { users } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/booking?email=${users.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <h2>Book Item : {bookings.length} </h2>
    </div>
  );
};

export default BookingServices;
