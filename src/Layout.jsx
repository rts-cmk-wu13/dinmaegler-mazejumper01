import { Outlet, useNavigation } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
    const navigation = useNavigation();

    return (
        <div>
            <Header />
            <main>
                {navigation.state === "loading" ? <p>Loading...</p> : <Outlet />}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;