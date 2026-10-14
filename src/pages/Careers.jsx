import React from "react";
import { Link } from "react-router-dom";
import { jobs } from "../data/jobs";

const culture = [
	{
		title: "Grow From Within",
		description:
			"We believe in nurturing our teams from within, providing opportunities for team members to grow and take their place as our next generation of leaders.",
	},
	{
		title: "Learn the Credit Craft",
		description:
			"Work shoulder-to-shoulder with senior advisors on live mandates — lender-grade preparation, parallel approaches, and negotiations you won't learn in a classroom.",
	},
	{
		title: "Performance Gets Rewarded",
		description:
			"Attractive performance incentives on top of fixed pay. Target-oriented, disciplined work is recognised and rewarded here.",
	},
	{
		title: "Small Team, Real Responsibility",
		description:
			"As an extension of our clients' leadership teams, we give our own people the same trust — real mandates, real follow-ups, real outcomes from day one.",
	},
];

const Careers = () => {
	return (
		<>
			{/* header */}
			<div className="w-full bg-(--color-dark-blue) pt-40 pb-14">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<h1 className="text-white font-bold font-haas text-3xl md:text-[42px] leading-tight">
						Careers
					</h1>
					<p className="mt-4 max-w-3xl text-white/75 font-haas text-[18px] leading-relaxed">
						We exist to empower entrepreneurs and leaders — and
						that starts with our own team. Builders of potential,
						fuelled by clarity, resilience, and forward momentum.
					</p>
				</div>
			</div>

			{/* culture + benefits */}
			<div className="w-full py-14 md:py-20">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<h2 className="text-(--color-cyan) text-2xl md:text-[32px] font-bold font-haas">
						Culture &amp; Benefits
					</h2>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
						{culture.map((item) => (
							<div
								key={item.title}
								className="bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-6 md:p-8"
							>
								<h3 className="text-black font-bold font-haas text-[21px]">
									{item.title}
								</h3>
								<p className="text-[#333333] text-[18px] font-haas mt-3 leading-relaxed">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* openings */}
			<div className="w-full pb-14 md:pb-20">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<h2 className="text-(--color-cyan) text-2xl md:text-[32px] font-bold font-haas">
						Current Openings
					</h2>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
						{jobs.map((job) => (
							<div
								key={job.slug}
								className="group bg-[#ECEEF1] border-t-4 border-(--color-cyan) p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(4,22,58,0.25)]"
							>
								<div className="flex items-center justify-between gap-4">
									<h3 className="text-black font-bold font-haas text-[21px] leading-snug transition-colors duration-300 group-hover:text-(--color-cyan)">
										{job.title}
									</h3>
									<Link
										to={`/careers/${job.slug}`}
										aria-label={`View ${job.title} details`}
										className="flex h-11 w-11 shrink-0 items-center justify-center bg-(--color-cyan) text-white transition-colors duration-300 hover:bg-[#0B6BB5]"
									>
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
											<path d="M5 12h14" />
											<path d="M13 6l6 6-6 6" />
										</svg>
									</Link>
								</div>
								<p className="mt-2 text-[#04163A]/60 font-haas text-[15px]">
									{job.location} · {job.type} · {job.experience}
								</p>
								<p className="mt-3 text-[#333333] font-haas text-[16px] leading-relaxed">
									{job.summary}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Careers;
