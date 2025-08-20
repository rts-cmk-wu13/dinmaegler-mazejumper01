import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import HouseFilter from "./HouseFilter";

export default function HomeHouses() {
  const [houses, setHouses] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 12000000],
    type: "",
  });

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

  // filtrer baseret på filters
  const filteredHouses = houses.filter((house) => {
    const price = house.price || house.payment || 0;
    const matchPrice =
      price >= filters.priceRange[0] && price <= filters.priceRange[1];
    const matchType = filters.type ? house.type === filters.type : true;
    return matchPrice && matchType;
  });

  return (
    <section className="flex flex-col items-center gap-y-[3rem]">
      <div className="flex flex-col items-center gap-y-[1.5rem] mt-[2.5rem]">
        {/* Filter komponent */}
        <HouseFilter onFilterChange={setFilters} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.75rem]">
        {filteredHouses.map((house, index) => (
          <div
            key={house.id || index}
            className="flex flex-col w-[33.75rem] bg-white rounded-lg shadow-md h-[27.875rem]"
          >
            <img
              src={
                house.images && house.images.length > 0
                  ? house.images[0].formats?.thumbnail?.url || house.images[0].url
                  : "https://placehold.co/400"
              }
              alt={house.adress1}
              className="w-[33.75rem] max-h-[14rem] object-cover"
            />
            <div className="p-[1.25rem]">
              <p className="font-bold">
                {house.adress1} • {house.city}
              </p>
              <p>
                {house.city} {house.postalcode}
              </p>
              <p>
                <span className="font-bold">{house.type}</span> • Ejerudgift:{" "}
                {house.cost} kr.
              </p>
              <p className="text-[1.25rem] font-bold mt-2">
                DKK {house.price?.toLocaleString("da-DK")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
