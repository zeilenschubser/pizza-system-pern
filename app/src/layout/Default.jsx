import {Outlet} from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

const Default = () => {
	return (
		<main className="max-h-full">
			<Header/>
			<Outlet/>
			<Footer/>
		</main>
	);
}

export default Default;