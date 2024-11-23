type Props = {
	title: string;
	date: string;
	subject: string;
	paragraph: string;
};
const PostCard = ({ title, date, subject, paragraph }: Props) => {
	return (
		<div className="flex flex-col bg-white max-w-[26.125rem]  p-5 justify-center items-start gap-3 ">
			<h1 className="max-w-[23.375rem] text-2xl font-bold">{title}</h1>
			<div className="flex gap-3 justify-center items-center">
				<p>{date} </p> <span>|</span> <p>{subject}</p>
			</div>
			<p className="max-w-[23.375rem]">{paragraph}</p>
		</div>
	);
};

export default PostCard;
