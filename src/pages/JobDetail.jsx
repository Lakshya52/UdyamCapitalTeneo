import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { jobs } from "../data/jobs";

const JobDetail = () => {
	const { slug } = useParams();
	const job = jobs.find((j) => j.slug === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	if (!job) {
		return (
			<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px] pt-40 pb-20">
				<h1 className="text-black font-bold font-haas text-2xl">
					Opening not found
				</h1>
				<Link
					to="/careers"
					className="inline-block mt-6 text-(--color-cyan) font-haas text-[15px] underline underline-offset-4"
				>
					All openings
				</Link>
			</div>
		);
	}

	return (
		<>
			{/* header */}
			<div className="w-full bg-(--color-dark-blue) pt-40 pb-14">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<p className="text-white/60 font-haas text-[15px] uppercase tracking-wide">
						Careers · Now Hiring
					</p>
					<Link
						to="/careers"
						className="inline-block mt-2 text-white/70 font-haas text-[15px] underline underline-offset-4"
					>
						All openings
					</Link>
					<h1 className="mt-4 text-white font-bold font-haas text-3xl md:text-[42px] leading-tight">
						{job.title}
					</h1>
					<p className="mt-4 max-w-3xl text-white/75 font-haas text-[18px] leading-relaxed">
						{job.company}
					</p>
				</div>
			</div>

			<div className="w-full py-14 md:py-20">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					{/* meta strip */}
					<div className="grid grid-cols-2 md:grid-cols-5 gap-5">
						{[
							{ label: "Location", value: job.location },
							{ label: "Experience", value: job.experience },
							{ label: "Salary", value: job.salary },
							{ label: "Employment", value: job.type },
							{ label: "Openings", value: job.openings },
						].map((item) => (
							<div
								key={item.label}
								className="bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-5"
							>
								<p className="text-[#04163A]/50 font-haas text-[13px] uppercase tracking-wide">
									{item.label}
								</p>
								<p className="mt-1 text-black font-haas font-bold text-[16px] leading-snug">
									{item.value}
								</p>
							</div>
						))}
					</div>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-6 md:p-8">
							<h2 className="text-black font-bold font-haas text-[21px]">
								Role &amp; Responsibilities
							</h2>
							<ul className="mt-4 flex flex-col gap-3">
								{job.responsibilities.map((point) => (
									<li
										key={point}
										className="flex gap-3 text-[#333333] font-haas text-[16px] leading-relaxed"
									>
										<span
											aria-hidden="true"
											className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-cyan)"
										/>
										{point}
									</li>
								))}
							</ul>
						</div>
						<div className="bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-6 md:p-8">
							<h2 className="text-black font-bold font-haas text-[21px]">
								Candidate Profile
							</h2>
							<ul className="mt-4 flex flex-col gap-3">
								{job.profile.map((point) => (
									<li
										key={point}
										className="flex gap-3 text-[#333333] font-haas text-[16px] leading-relaxed"
									>
										<span
											aria-hidden="true"
											className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-cyan)"
										/>
										{point}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* compensation + apply */}
					<div className="mt-5 bg-[#ECEEF1] border-t-4 border-(--color-cyan) p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
						<div>
							<h2 className="text-black font-bold font-haas text-[21px]">
								Compensation
							</h2>
							<p className="mt-2 text-[#333333] font-haas text-[18px]">
								{job.salary.replace(" / month + Incentives", " per month + Attractive Performance Incentives")}
							</p>
						</div>
						<a
							href={`mailto:we.care@udyamcapital.com?subject=Application%3A%20${encodeURIComponent(job.title)}`}
							className="inline-flex shrink-0 items-center gap-3 self-start md:self-auto bg-(--color-cyan) px-8 py-4 text-white font-haas font-semibold text-[16px] transition-colors duration-300 hover:bg-[#0B6BB5]"
						>
							Apply Now
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
								<path d="M5 12h14" />
								<path d="M13 6l6 6-6 6" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default JobDetail;
