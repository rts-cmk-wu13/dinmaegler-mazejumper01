import React from 'react';
import { NavLink } from "react-router"; 
import AgentBanner from '../components/Agents/AgentBanner';
import Agents from '../components/Agents/Agents';


export default function Boliger() {

    return (
        <>
        <AgentBanner />
        <Agents />
        </>
    )
}