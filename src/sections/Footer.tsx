const Footer = () => {
	return (
		<footer className="container flex flex-col justify-center items-center gap-5 p-10">
			<div className="flex gap-5 justify-center items-center">
				<img src="/fb.png" alt="facebook" className="object-contain size-8" />
				<img src="/Group.png" alt="instagram" className="object-contain size-8" />
				<img src="/insta.png" alt="twiter" className="object-contain size-8" />
				<img src="/Linkedin.png" alt="linkedin" className="object-contain size-8" />
			</div>

			<p>Copyright ©2020 All rights reserved </p>
		</footer>
	);
};

export default Footer;
