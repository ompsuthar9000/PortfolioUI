import FeaturedWork from "./sections/FeaturedWork";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import RecentPosts from "./sections/RecentPosts";

function App() {
	return (
		<main className="font-heebo">
			<Header />
			<Hero />
			<RecentPosts />
			<FeaturedWork />
			<Footer />
		</main>
	);
}

export default App;
