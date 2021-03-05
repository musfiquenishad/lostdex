import React from "react";
import Hero from "../Layouts/Hero";
import Navbar from "../Components/Navbar";
import SubHero from "../Layouts/SubHero";
import Features from "../Layouts/Features";
import SubFeatures from "../Layouts/SubFeatures";
import CallToAction from "../Layouts/CallToAction";

function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<SubHero />
			<Features />
			<SubFeatures />
			<CallToAction />
		</div>
	);
}

export default Home;
