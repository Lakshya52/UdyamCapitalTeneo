import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			{/* header */}
			<div className="w-full bg-(--color-dark-blue) pt-40 pb-14">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<h1 className="text-white font-bold font-haas text-3xl md:text-[42px] leading-tight">
						About Us
					</h1>
					<p className="mt-4 max-w-3xl text-white/75 font-haas text-[18px] leading-relaxed">
						Strategic Partner in your Successful Business Journey.
						We are a Strategic Management Advisory Firm focused on
						solving Business Challenges with our Expertise,
						Groundbreaking Solutions and a Collaborative Mindset.
					</p>
				</div>
			</div>

			{/* vision / mission */}
			<div className="w-full py-14 md:py-20">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-6 md:p-8">
							<h2 className="text-black font-bold font-haas text-[21px]">
								Vision
							</h2>
							<p className="text-[#333333] text-[18px] font-haas mt-3 leading-relaxed">
								To be the most trusted and reliable partner,
								empowering businesses to grow and create
								enduring value.
							</p>
						</div>
						<div className="bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-6 md:p-8">
							<h2 className="text-black font-bold font-haas text-[21px]">
								Mission
							</h2>
							<p className="text-[#333333] text-[18px] font-haas mt-3 leading-relaxed">
								To enable businesses to thrive and stay
								competitive by delivering Innovative, Customized
								Solutions that foster Transformation and Growth.
							</p>
						</div>
					</div>

					<p className="mt-10 max-w-3xl text-black font-times font-semibold text-xl md:text-[28px] leading-snug">
						&ldquo;We are dedicated to achieving outstanding
						outcomes and creating lasting value for all our
						clients.&rdquo;
					</p>
					<p className="mt-4 text-(--color-cyan) font-haas font-bold text-[18px]">
						More than Advice — We deliver Results.
					</p>

					<div className="mt-10 flex flex-wrap gap-4">
						<a
							href="/#services"
							className="inline-flex items-center gap-3 bg-(--color-cyan) px-6 py-3 text-white font-haas font-semibold text-[15px] transition-colors duration-300 hover:bg-[#0B6BB5]"
						>
							Our Services
						</a>
						<Link
							to="/contact"
							className="inline-flex items-center gap-3 rounded border border-[#04163A] px-6 py-3 text-[#04163A] font-haas font-semibold text-[15px] transition-colors duration-300 hover:bg-[#04163A] hover:text-white"
						>
							Get In Touch
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
