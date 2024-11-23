const Hero = () => {
	return (
		<section className="container flex md:flex-row flex-col-reverse md:justify-evenly py-10 items-center md:text-start text-center gap-5">
			<article className="flex justify-center flex-col md:items-start items-center gap-5">
				<h1 className="max-w-[31.625rem] text-[2.75rem] font-bold leading-[3.75rem]">Hi, I am John, Creative Technologist</h1>
				<p className="max-w-[31.063rem]">
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet.
				</p>
                <button className="btn btn-error text-[#fff] md:w-[13rem] w-full" type="button">Download Resume</button>
			</article>
			<div>
				<img src="/Ellipse 1 (2).png" alt="user" className="object-contain size-[15.188rem]" />
			</div>
		</section>
	);
};

export default Hero;
