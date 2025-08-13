import React, { useState } from "react";

export default function HomeNyhed() {
    const [form, setForm] = useState({ email: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="relative h-[17.75rem] flex justify-center items-center gap-y-[1.5rem] my-[2.5rem]
         bg-[url('../src/assets/giant-building-with-sun.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-[#455463] before:opacity-90">
  
            <div className="relative flex z-10 gap-x-[2rem]">
                <h2 className="text-white text-[1.875rem] font-bold max-w-[30.5ch]">
                Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
                </h2>

                <form className="bg-white h-[4.625rem] flex">
                <input
                    name="email"
                    type="email"
                    placeholder="Indtast din email adresse"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className=" ml-[1rem] rounded w-[33.75rem] h-[inherit] bg-white text-gray-900 placeholder-gray-500 focus:outline-none "
                
                
                />

                <button className="mr-[1rem] cursor-pointer"><img src="../src/assets/Arrow.svg" alt="" /></button>
                </form>
            </div>

            </div>

    );
}
