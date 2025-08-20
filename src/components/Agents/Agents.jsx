import React, { useEffect, useState } from "react";

export default function Agents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("https://dinmaegler.onrender.com/agents")
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setAgents(data.results);
        } else if (Array.isArray(data)) {
          setAgents(data);
        } else {
          console.error("Unknown data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching agents:", error);
      });
  }, []);

  return (
    <section className="flex flex-col items-center gap-y-[3rem] my-[2.5rem]">
      <div className="grid grid-cols-[1fr_1fr_1fr] justify-items-center gap-[1.75rem]">
        {agents.map((agent, index) => (
          <div
            key={agent.id || index}
            className="flex flex-col items-center 
                w-[21.875rem]  bg-white rounded-s shadow-md  h-[28.125rem]"
          >
            <img
              src={
                agent.image
                  ? agent.image.formats?.thumbnail?.url || agent.image.url
                  : "https://via.placeholder.com/500x333?text=No+Agent+Image"
              }
              alt={agent.name}
            />
            <div className="grid cols-[1fr] gap-y-[0.5rem] p-[1.25rem]">
                <p className="text-center text-[0.875rem] font-bold">
                  {agent.name}
                </p>

                <p className="text-center">{agent.title}</p>

                <div className="flex items-center justify-center gap-x-[1rem]">
                  <img src="../src/assets/mail.svg" alt="mail" />
                  <img src="../src/assets/in.svg" alt="linkedin" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
