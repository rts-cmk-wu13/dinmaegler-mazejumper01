import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function HouseFilter({ onFilterChange }) {
  const [priceRange, setPriceRange] = useState([0, 12000000]);
  const [type, setType] = useState("");

  // kaldes når noget ændres
  const updateFilters = (newPrice = priceRange, newType = type) => {
    if (onFilterChange) {
      onFilterChange({
        priceRange: newPrice,
        type: newType,
      });
    }
  };

  const handlePriceChange = (val) => {
    setPriceRange(val);
    updateFilters(val, type);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    updateFilters(priceRange, e.target.value);
  };

  return (
    <div className="w-full max-w-4xl">
      {/* Title */}
      <h2 className="text-lg font-medium mb-6 relative inline-block text-[#2A2C30]">
        Søg efter dit drømmehus
        <span className="absolute -bottom-1 left-0 w-[3ch] h-[2px] bg-[#162A41]"></span>
      </h2>

      <div className="flex items-center gap-10">
        {/* Ejendomstype dropdown */}
        <div className="flex flex-col">
          <label className="text-sm mb-2 text-[#2A2C30]">Ejendomstype</label>
          <select
            value={type}
            onChange={handleTypeChange}
            className="border border-[#C4C4C4] rounded-md px-3 py-2 text-sm text-[#2A2C30] focus:ring-1 focus:ring-[#162A41] focus:outline-none"
          >
            <option value="">Ejendomstype</option>
            <option value="Villa">Villa</option>
            <option value="Ejerlejlighed">Ejerlejlighed</option>
            <option value="Byhus">Byhus</option>
            <option value="Landejendom">Landejendom</option>
          </select>
        </div>

        {/* Pris slider */}
        <div className="flex-1 w-[33.75rem]">
          <label className="text-sm mb-2 block text-[#302a2a]">
            Pris-interval
          </label>
          <Slider
            range
            min={0}
            max={12000000}
            step={50000}
            value={priceRange}
            onChange={handlePriceChange}
            trackStyle={[{ backgroundColor: "#C4C4C4" }]}
            handleStyle={[
              {
                borderColor: "#162A41",
                backgroundColor: "#fff",
                width: 16,
                height: 16,
              },
              {
                borderColor: "#162A41",
                backgroundColor: "#fff",
                width: 16,
                height: 16,
              },
            ]}
            railStyle={{ backgroundColor: "#C4C4C4" }}
          />
          <div className="flex justify-between mt-2 text-sm text-[#7B7B7B]">
            <span>{priceRange[0].toLocaleString("da-DK")} kr.</span>
            <span>{priceRange[1].toLocaleString("da-DK")} kr.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
