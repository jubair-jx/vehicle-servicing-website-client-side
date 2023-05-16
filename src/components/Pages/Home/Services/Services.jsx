import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import ShowService from "./ShowService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-8">
        <p className="text-xl font-bold text-orange-400 mt-5">Service</p>
        <h1 className="text-4xl font-bold mt-5">Our Service Area</h1>
        <p className="text-sm mt-5">
          the majority have suffered alteration in some form, <br /> by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 mx-auto gap-10 mt-5 mb-12">
        {services.map((service) => (
          <ShowService key={service._id} service={service}></ShowService>
        ))}
      </div>
    </div>
  );
};

export default Services;
