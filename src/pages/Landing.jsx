import React, { useState } from "react";
import { Link } from "react-router-dom";
import { services as ourOfferings } from "../data/services";
import { blogs, news } from "../data/feed";

const Landing = () => {
	const [feedTab, setFeedTab] = useState("news");
	const whatSetsUsApart = [
		{
			title: "Strategic Depth with Execution Focus",
			description:
				"Our consultants combine decades of multi-industry experience with cutting-edge insights, delivering practical strategies that drive measurable results—not just theoretical advice.",
		},
		{
			title: "Customized, Collaborative Approach",
			description:
				"Every business is unique. That's why we partner closely with you, acting as an extension of your leadership team, to co-create solutions that align with your goals, culture, and market dynamics.",
		},
		{
			title: "Empowerment-Driven Philosophy",
			description:
				"At our core, we are builders of potential. We exist to empower entrepreneurs and leaders—fueling ambition with clarity, resilience, and forward momentum.",
		},
		{
			title: "Results That Speak",
			description:
				"Our work is defined by outcomes: capital raised, operations optimized, risks mitigated, and value unlocked. We're not just in the business of consulting—we're in the business of impact.",
		},
		{
			title: "Holistic Scope, Single Partner",
			description:
				"A holistic approach that covers everything you need for sustained growth — from financial management to operational and IT solutions — under one roof.",
		},
		{
			title: "Challenges Into Stepping Stones",
			description:
				"We transform challenges into stepping stones, giving you the clarity, resilience, and confidence to keep moving forward — no matter how complex the terrain.",
		},
	];
	return (
		<>
			{/* navbar */}
			{/* hero */}
			<div
				id="top"
				className="h-[100dvh] w-full flex flex-col overflow-hidden"
			>
				<div
					style={{ backgroundSize: "125% auto" }}
					className="relative bg-[url('/Dubai.webp')] bg-center bg-no-repeat flex flex-col flex-1 min-h-0 w-full overflow-hidden text-white"
				>
					{/* overlay - Teneo style: horizontal + vertical fade */}
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								"linear-gradient(90deg, rgb(5,19,54) 0%, rgba(5,19,54,0.875) 12.5%, rgba(5,19,54,0.75) 25%, rgba(5,19,54,0.624) 37.5%, rgba(5,19,54,0.5) 50%, rgba(5,19,54,0.25) 75%, rgba(5,19,54,0) 100%)",
						}}
					/>
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								"linear-gradient(rgb(5,19,54) 0%, rgba(5,19,54,0.875) 12.5%, rgba(5,19,54,0.75) 25%, rgba(5,19,54,0.624) 37.5%, rgba(5,19,54,0.5) 50%, rgba(5,19,54,0.25) 75%, rgba(5,19,54,0) 100%)",
						}}
					/>
					<div className="relative z-10 w-full max-w-(--layout-max-width) mx-auto px-[100px] h-full mt-20 flex justify-center flex-col">
						<h1 className="text-left text-[80px] max-w-5xl leading-[90%] font-haas">
							Partner Of Your <br /> Successful Business <br />{" "}
							Journey
						</h1>
						<div className="mt-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
							<p className="text-left text-xl max-w-xl font-[15px] leading-[158%] font-haas">
							Focused on solving Business Challenges with our
							Expertise, Groundbreaking Solutions and a
							Collaborative Mindset.
						</p>
						<a
							href="#services"
							className="inline-flex items-center gap-3 self-start md:self-auto shrink-0 rounded border border-white px-6 py-3 text-white font-haas font-semibold text-[15px] transition-colors duration-300 hover:bg-white hover:text-[#04163A]"
						>
							Explore Our Services
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
								<path d="M5 12h14" />
								<path d="M13 6l6 6-6 6" />
							</svg>
						</a>
						</div>
					</div>
				</div>

				{/* feed toggle */}
				<div className="w-full shrink-0 bg-(--color-dark-blue) text-white">
					<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px] flex items-center">
						<div
							className="inline-flex  bg-white/10"
							role="tablist"
							aria-label="Toggle blogs and news"
						>
							<button
								type="button"
								role="tab"
								aria-selected={feedTab === "blogs"}
								onClick={() => setFeedTab("blogs")}
								className={`cursor-pointer px-5 py-1.5 font-haas text-[15px] transition-all duration-300 ${feedTab === "blogs" ? "bg-white text-[#04163A] font-semibold" : "text-white/70 hover:text-white"}`}
							>
								Blogs
							</button>
							<button
								type="button"
								role="tab"
								aria-selected={feedTab === "news"}
								onClick={() => setFeedTab("news")}
								className={`cursor-pointer px-5 py-1.5 font-haas text-[15px] transition-all duration-300 ${feedTab === "news" ? "bg-white text-[#04163A] font-semibold" : "text-white/70 hover:text-white"}`}
							>
								News
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* landing page intro - blogs / news feed */}
			<div
				id="insights"
				className="w-full h-fit bg-linear-to-r from-(--color-dark-blue) via-(--color-light-blue) to-(--color-purple) rounded-br-[150px] scroll-mt-24"
			>
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px] py-14 md:py-20">
					<h2 className="mb-12 text-white font-times font-semibold text-3xl md:text-[38px] leading-tight">
						{feedTab === "blogs" ? "Latest Blogs" : "Latest News"}
					</h2>
					{feedTab === "blogs" ? (
						<p className="text-white font-haas text-xl">
							Every engagement runs the same way: an honest
							assessment first, lender-grade preparation next, and
							parallel approaches so lenders compete for your
							mandate — tracked from first conversation to final
							disbursal. No generic playbooks and no open-ended
							meters; scope and commercials are agreed in writing
							before work begins.
						</p>
					) : (
						<p className="text-white font-haas text-xl">
							Updates from the firm — closed mandates, new
							practices, and milestones from Udyam Capital, as we
							continue partnering with entrepreneurs on their
							growth journeys.
						</p>
					)}
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
						{(feedTab === "blogs" ? blogs : news)
							.slice(0, 2)
							.map((post) => (
								<article
									key={post.slug}
									className="rounded bg-white/10 p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
								>
									<p className="text-white/60 font-haas text-[13px] uppercase tracking-wide">
										{post.date}
									</p>
									<h3 className="mt-2 text-white font-haas font-bold text-[19px] leading-snug">
										{post.title}
									</h3>
									<p className="mt-3 text-white/75 font-haas text-[15px] leading-relaxed">
										{post.excerpt}
									</p>
								</article>
							))}
					</div>
				</div>
			</div>

			{/* our offerings */}
			<div id="services" className="w-full py-14 md:py-20 scroll-mt-24">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<h2 className="text-(--color-cyan) text-2xl md:text-[32px] font-bold font-haas text-[38px]">
						Our Service Offerings
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
						{ourOfferings.map((item) => (
							<div
								key={item.slug}
								className="group bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-6 md:p-8 min-h-[240px] transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#C2DDF9] hover:shadow-[0_20px_40px_-15px_rgba(4,22,58,0.35)]"
							>
								<div className="flex items-center justify-between gap-4">
									<h3 className="text-black font-bold font-haas text-[21px] transition-colors duration-300 group-hover:text-(--color-cyan)">
										{item.title}
									</h3>
									<Link
										to={`/services/${item.slug}`}
										aria-label={`View ${item.title} details`}
										className="flex h-11 w-11 shrink-0 items-center justify-center bg-(--color-cyan) text-white opacity-0 transition-all duration-300 group-hover:opacity-100 focus-visible:opacity-100 hover:bg-[#0B6BB5] [@media(hover:none)]:opacity-100"
									>
										<svg
											className="transition-transform duration-300"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											aria-hidden="true"
										>
											<path d="M5 12h14" />
											<path d="M13 6l6 6-6 6" />
										</svg>
									</Link>
								</div>
								<p className="text-[#333333] text-[18px] font-haas mt-3">
									{item.description}
								</p>
							</div>
						))}
						<div className="bg-[#ECEEF1] border-t-4 border-(--color-cyan) p-6 md:p-8 min-h-[240px] md:col-start-3 md:row-start-1 md:row-span-2 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#E0E3E8] hover:shadow-[0_20px_40px_-15px_rgba(4,22,58,0.25)]">
							<h3 className="text-black font-bold font-haas text-[21px]">
								Contact Us
							</h3>
							<p className="text-[#333333] text-[18px] font-haas mt-3">
								Have a mandate in mind? Reach out to discuss
								your requirement with our team.
							</p>
							<div className="mt-4 flex flex-col gap-2">
								<a
									href="mailto:we.care@udyamcapital.com"
									className="text-(--color-cyan) font-haas text-[16px] underline underline-offset-4 break-all"
								>
									we.care@udyamcapital.com
								</a>
								<a
									href="tel:+918287598661"
									className="text-(--color-cyan) font-haas text-[16px]"
								>
									+91 82875 98661
								</a>
							</div>
							<a
								href="mailto:we.care@udyamcapital.com"
								className="mt-6 md:mt-auto md:pt-6 inline-flex items-center gap-3 self-start bg-(--color-cyan) px-6 py-3 text-white font-haas font-semibold text-[15px] transition-colors duration-300 hover:bg-[#0B6BB5]"
							>
								Contact Us
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M5 12h14" />
									<path d="M13 6l6 6-6 6" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* team quote */}
			<div
				id="team"
				className="relative w-full overflow-hidden bg-[#051336] scroll-mt-24"
			>
				<img
					src="/TeamQuoteImage.png"
					alt="Office building facade"
					className="absolute inset-y-0 right-0 h-full w-full md:w-[48%] object-cover object-center"
				/>
				{/* gradient - brand stops, fading left so text stays readable */}
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(24,51,120,0.68) 19%, #112355 36%, #051336 100%)",
					}}
				/>
				<div className="relative z-10 w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px] py-14 md:py-20">
					<p className="max-w-3xl text-white font-times font-semibold text-[38px] leading-snug">
						We help entrepreneurs navigate complex challenges and
						achieve meaningful results
					</p>
					<p className="mt-4 text-white/85 font-times italic text-sm md:text-base">
						- Team Udyam Capital.
					</p>
				</div>
			</div>

			{/* what sets us apart */}
			<div id="why-us" className="w-full py-14 md:py-20 scroll-mt-24">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<h2 className="text-(--color-cyan) text-2xl md:text-[32px] font-bold font-haas text-[38px]">
						What Set's Us Apart
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
						{whatSetsUsApart.map((item) => (
							<div
								key={item.title}
								className="bg-[#0D7DD4]/20 p-6 md:p-8 min-h-[240px]"
							>
								<h3 className="text-black font-bold font-haas text-[21px]">
									{item.title}
								</h3>
								<p className="text-[#333333] text-[18px] font-haas mt-3">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* join our team */}
			<div
				id="join"
				className="relative w-full overflow-hidden bg-[#051336] scroll-mt-24"
			>
				<img
					src="/JoinOurTeam.png"
					alt="Team members joining hands"
					className="absolute inset-y-0 right-0 h-full w-full md:w-[48%] object-cover object-center"
				/>
				{/* gradient - brand stops, fading left so text stays readable */}
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(24,51,120,0.68) 19%, #112355 36%, #051336 100%)",
					}}
				/>
				<div className="relative z-10 w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px] py-14 md:py-20">
					<h2 className="text-white font-times font-semibold text-3xl md:text-[38px] leading-tight">
						Join Our Team
					</h2>
					<p className="mt-6 max-w-3xl text-white font-haas font-bold text-base md:text-[18px] leading-relaxed">
						We leverage the collective experience and expertise of
						our team members and network of senior advisors to
						provide unique insights and perspectives to our clients.
						We believe in nurturing our teams from within, providing
						opportunities for team members to grow and take their
						place as our next generation of leaders.
					</p>
					<Link
						to="/careers"
						className="mt-8 inline-flex items-center gap-3 rounded border border-white px-6 py-3 text-white font-haas font-semibold text-[15px] transition-colors duration-300 hover:bg-white hover:text-[#051336]"
					>
						View Openings
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<path d="M5 12h14" />
							<path d="M13 6l6 6-6 6" />
						</svg>
					</Link>
				</div>
			</div>

			{/* footer */}
		</>
	);
};

export default Landing;
