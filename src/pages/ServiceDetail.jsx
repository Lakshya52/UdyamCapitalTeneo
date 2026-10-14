import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";

const ServiceDetail = () => {
	const { slug } = useParams();
	const service = services.find((s) => s.slug === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	if (!service) {
		return (
			<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px] pt-40 pb-20">
				<h1 className="text-black font-bold font-haas text-2xl">
					Service not found
				</h1>
				<Link
					to="/"
					className="inline-block mt-6 text-(--color-cyan) font-haas text-[15px] underline underline-offset-4"
				>
					Back to home
				</Link>
			</div>
		);
	}

	return (
		<>
			{/* header */}
			<div className="w-full bg-(--color-dark-blue) pt-40 pb-14">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<a
						href="/#services"
						className="text-white/70 font-haas text-[15px] underline underline-offset-4"
					>
						All services
					</a>
					<h1 className="mt-4 text-white font-bold font-haas text-3xl md:text-[42px] leading-tight">
						{service.title}
					</h1>
				</div>
			</div>

			{/* body */}
			<div className="w-full py-14 md:py-20">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<p className="max-w-3xl text-[#333333] text-[18px] font-haas leading-relaxed">
						{service.description}
					</p>
					<p className="mt-8 max-w-3xl text-[#333333] text-[15px] font-haas leading-relaxed">
						Every engagement runs the same way: an honest
						assessment first, lender-grade preparation next, and
						parallel approaches so lenders compete for your mandate.
						Scope and commercials are agreed in writing before work
						begins.
					</p>
				</div>
			</div>
		</>
	);
};

export default ServiceDetail;
