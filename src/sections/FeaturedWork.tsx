import FeturedCard from "../components/FeturedCard";
import { feturedWork } from "../constants/data";

const FeaturedWork = () => {
	return (
		<section className="container flex flex-col justify-center items-center gap-5">
			<h2 className="py-5  lg:pl-12 lg:w-full ">Featured works</h2>
			{feturedWork.map((el) => {
				return (
					<FeturedCard
						title={el.title}
						imgSrc={el.imgSrc}
						date={el.date}
						subject={el.subject}
						paragraph={el.paragraph}
						key={el.id}
					/>
				);
			})}
		</section>
	);
};

export default FeaturedWork;
