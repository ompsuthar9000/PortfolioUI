import PostCard from "../components/PostCard";
import { postCard } from "../constants/data";

const RecentPosts = () => {
	return (
		<section className=" bg-recentPosts md:p-10 py-5 flex flex-col gap-5">
			<ul className="container flex justify-between lg:px-16">
				<li className="text-base">Recent posts</li>
				<li className="text-blue-600">View all</li>
			</ul>
			<div className="container flex md:flex-row flex-col  lg:justify-evenly justify-between gap-5 items-center">
				{postCard.map((el) => {
					return (
						<PostCard
							title={el.title}
							date={el.date}
							subject={el.subject}
							paragraph={el.paragraph}
							key={el.id}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default RecentPosts;
