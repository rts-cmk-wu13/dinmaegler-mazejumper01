import HomeAgents from '../components/Home/HomeAgents';
import HomeHero from '../components/Home/HomeHero';
import HomeHouses from '../components/Home/HomeHouses';
import HomeInfo from '../components/Home/HomeInfo';
import HomeNyhed from '../components/Home/HomeNyhed';
import HomeDownload from '../components/Home/HomeDownload';

export default function home() {

    return (
        <>
        <HomeHero />
        <HomeInfo />
        <HomeHouses />
        <HomeNyhed />
        <HomeAgents />
        <HomeDownload />

        </>
    )
}

