import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

const Services = () => {
	return (
		<>
			{/* header */}
			<div className="w-full bg-(--color-dark-blue) pt-40 pb-14">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<h1 className="text-white font-bold font-haas text-3xl md:text-[42px] leading-tight">
						Our Services
					</h1>
					<p className="mt-4 max-w-3xl text-white/75 font-haas text-[18px] leading-relaxed">
						End-to-end advisory across the full financing lifecycle
						— from sizing the requirement to final disbursal.
					</p>
				</div>
			</div>

			{/* listing */}
			<div className="w-full py-14 md:py-20">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						{services.map((service) => (
							<div
								key={service.slug}
								className="group bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-6 md:p-8 min-h-[240px] transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#C2DDF9] hover:shadow-[0_20px_40px_-15px_rgba(4,22,58,0.35)]"
							>
								<div className="flex items-center justify-between gap-4">
									<h2 className="text-black font-bold font-haas text-[21px] transition-colors duration-300 group-hover:text-(--color-cyan)">
										{service.title}
									</h2>
									<Link
										to={`/services/${service.slug}`}
										aria-label={`View ${service.title} details`}
										className="flex h-11 w-11 shrink-0 items-center justify-center bg-(--color-cyan) text-white transition-colors duration-300 hover:bg-[#0B6BB5]"
									>
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
											<path d="M5 12h14" />
											<path d="M13 6l6 6-6 6" />
										</svg>
									</Link>
								</div>
								<p className="text-[#333333] text-[18px] font-haas mt-3 leading-relaxed">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
