import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function HomeHouses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("https://dinmaegler.onrender.com/homes")
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setHouses(data.results);
        } else if (Array.isArray(data)) {
          setHouses(data);
        } else {
          console.error("Unknown data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="flex flex-col items-center gap-y-[3rem]">

        <div className="flex flex-col items-center gap-y-[1.5rem] mt-[2.5rem]">

            <h2 className="text-[2.375rem] font-bold ">Udvalgte Boliger</h2>

            <p className="w-[70ch] text-center ">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>

        </div>

        <div className="grid grid-rows-[1fr_1fr] grid-cols-[1fr_1fr] justify-items-center gap-[1.75rem]">
     
            {houses.slice(0, 4).map((house, index) => (
            <div
                key={house.id || index}
                className="flex flex-col 
                w-[33.75rem]  bg-white rounded-lg shadow-md  h-[27.875rem]">
                <img
                src={
                    house.images && house.images.length > 0
                    ? house.images[0].formats?.thumbnail?.url || house.images[0].url
                    : "https://via.placeholder.com/1400x933?text=No+Image"
                }

                alt={house.adress1}
                className="w-[33.75rem] max-h-[14rem] object-cover"
                />

                <div className="grid cols-[1fr] gap-y-[0.5rem] p-[1.25rem]">
                
                  <p className="text-base text-[0.875rem] font-bold">
                  {house.adress1} • {house.city}
                  </p>

                  <p>{house.city} {house.postalcode }</p>

                  <p> <span className="font-bold">{house.type}</span> • Ejerudgift: {house.cost} kr.</p>

                  <div className="w-[30.75rem] justify-self-center self-center my-[1rem] h-[0.1rem]  bg-[#D3DEE8]     "/>


                  <div className="grid items-center grid-cols-[3rem_1fr_1fr] ">



                      <p
                      className={`font-bold w-[1.875rem] h-[1.875rem] flex items-center justify-center text-white rounded
                          ${
                          house.energylabel === "A"
                              ? "bg-[#10AC84]"
                              : house.energylabel === "B"
                              ? "bg-[#F2C94C]"
                              : house.energylabel === "C"
                              ? "bg-[#F2994A]"
                              : house.energylabel === "D"
                              ? "bg-red-600"
                              : "bg-gray-400" // fallback 
                          }
                      `}>
                      {house.energylabel}
                      </p>

                      <p>{house.rooms}</p>

                      <p className="text-[1.25rem] font-bold">
                      DKK {house.price?.toLocaleString() || house.payment?.toLocaleString()}
                      </p>

                  </div>

              </div>
            </div>
            ))}
        </div>
           

        <Link className="h-[3.87rem] mb-[2.5rem] " to="/boliger">
            <button className="w-[13.4rem] h-[inherit] cursor-pointer bg-[#162A41] text-white flex items-center justify-center ">
                Se alle boliger
            </button>
        </Link>

    </section>
  );
}
