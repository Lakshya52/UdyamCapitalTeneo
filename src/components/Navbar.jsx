import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { services } from "../data/services";
import { blogs, news } from "../data/feed";

const routeLinks = [
	{ label: "Home", to: "/" },
	{ label: "About", to: "/about" },
	{ label: "Careers", to: "/careers" },
	{ label: "Contact", to: "/contact" },
];

const sectionLinks = [];

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const [insightsOpen, setInsightsOpen] = useState(false);
	const [mobServicesOpen, setMobServicesOpen] = useState(false);
	const [mobInsightsOpen, setMobInsightsOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	// Section anchors live on "/": from other routes, go home first, then scroll.
	const goSection = (e, id) => {
		e.preventDefault();
		if (location.pathname !== "/") {
			navigate("/");
			setTimeout(() => {
				document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
			}, 100);
		} else {
			document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-[#04163A]/95 backdrop-blur-md shadow-lg"
					: "bg-white/10 backdrop-blur-md shadow-lg"
			}`}
			onMouseLeave={() => { setServicesOpen(false); setInsightsOpen(false); }}
		>
			<div
				className={`w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px] flex items-center justify-between transition-all duration-300 ${
					scrolled ? "py-[12px]" : "py-[20px]"
				}`}
			>
				{/* logo */}
				<Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Udyam Capital home">
					<img
						src="/LogoWhite.png"
						alt="Udyam Capital logo"
						className="h-[40px] md:h-[50px]"
					/>
				</Link>

				{/* desktop links */}
				<nav className="hidden md:flex items-center gap-[36px]">
					{routeLinks.slice(0, 2).map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className={`nav-link font-haas text-[15px] leading-[158%] transition-colors duration-300 text-white`}
						>
							{link.label}
						</Link>
					))}
					{/* services dropdown */}
					<div>
						<button
							type="button"
							onClick={() => { setServicesOpen((v) => !v); setInsightsOpen(false); }}
							aria-expanded={servicesOpen}
							aria-label="Toggle services menu"
							className={`nav-link font-haas text-[15px] leading-[158%] transition-colors duration-300 text-white flex items-center gap-1`}
						>
							Services
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}>
								<path d="M6 9l6 6 6-6" />
							</svg>
						</button>
					</div>
					{/* insights dropdown */}
					<div>
						<button
							type="button"
							onClick={() => { setInsightsOpen((v) => !v); setServicesOpen(false); }}
							aria-expanded={insightsOpen}
							aria-label="Toggle insights menu"
							className={`nav-link font-haas text-[15px] leading-[158%] transition-colors duration-300 text-white flex items-center gap-1`}
						>
							Insights
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform duration-300 ${insightsOpen ? "rotate-180" : ""}`}>
								<path d="M6 9l6 6 6-6" />
							</svg>
						</button>
					</div>
					{routeLinks.slice(2).map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className={`nav-link font-haas text-[15px] leading-[158%] transition-colors duration-300 text-white`}
						>
							{link.label}
						</Link>
					))}
					{sectionLinks.map((section) => (
						<a
							key={section.id}
							href={section.id}
							onClick={(e) => goSection(e, section.id)}
							className={`nav-link font-haas text-[15px] leading-[158%] transition-colors duration-300 text-white`}
						>
							{section.label}
						</a>
					))}
				</nav>

				{/* mobile toggle */}
				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					aria-label={open ? "Close menu" : "Open menu"}
					aria-expanded={open}
					className={`md:hidden flex h-11 w-11 items-center justify-center transition-colors duration-300 ${scrolled ? "text-white" : "text-[#04163A]"}`}
				>
					{open ? (
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
							<path d="M6 6l12 12" />
							<path d="M18 6L6 18" />
						</svg>
					) : (
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
							<path d="M4 7h16" />
							<path d="M4 12h16" />
							<path d="M4 17h16" />
						</svg>
					)}
				</button>
			</div>

			{/* services mega panel */}
			<div
				className={`absolute left-0 right-0 top-full hidden md:block transition-all duration-300 ${
					servicesOpen
						? "visible opacity-100 translate-y-0"
						: "invisible opacity-0 -translate-y-2 pointer-events-none"
				}`}
			>
				<div className={`w-full border-t transition-colors duration-300 ${scrolled ? "bg-[#04163A] border-white/10" : "bg-white border-[#04163A]/10 shadow-xl"}`}>
					<div className="mx-auto w-full max-w-(--layout-max-width) px-6 md:px-[100px] py-10 grid gap-10 md:grid-cols-[1fr_2fr]">
						<div>
							<p className={`font-haas text-[13px] uppercase tracking-wide ${scrolled ? "text-white/60" : "text-[#04163A]/60"}`}>
								Our Services
							</p>
							<h3 className={`mt-2 font-haas font-bold text-2xl leading-snug ${scrolled ? "text-white" : "text-[#04163A]"}`}>
								Advisory across the full financing lifecycle.
							</h3>
							<p className={`mt-3 font-haas text-[15px] leading-relaxed ${scrolled ? "text-white/70" : "text-[#04163A]/70"}`}>
								From sizing the requirement to final disbursal — pick the practice you need.
							</p>
						</div>
						<div className="grid gap-3 sm:grid-cols-2">
							{services.map((service) => (
								<Link
									key={service.slug}
									to={`/services/${service.slug}`}
									onClick={() => setServicesOpen(false)}
									className={`rounded p-4 transition-colors duration-200 ${scrolled ? "hover:bg-white/10" : "hover:bg-[#0D7DD4]/10"}`}
								>
									<p className={`font-haas font-bold text-[16px] ${scrolled ? "text-white" : "text-[#04163A]"}`}>
										{service.title}
									</p>
									<p className={`mt-1 font-haas text-[13px] leading-snug line-clamp-2 ${scrolled ? "text-white/60" : "text-[#04163A]/60"}`}>
										{service.description}
									</p>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* insights mega panel */}
			<div
				className={`absolute left-0 right-0 top-full hidden md:block transition-all duration-300 ${
					insightsOpen
						? "visible opacity-100 translate-y-0"
						: "invisible opacity-0 -translate-y-2 pointer-events-none"
				}`}
			>
				<div className={`w-full border-t transition-colors duration-300 ${scrolled ? "bg-[#04163A] border-white/10" : "bg-white border-[#04163A]/10 shadow-xl"}`}>
					<div className="mx-auto w-full max-w-(--layout-max-width) px-6 md:px-[100px] py-10 grid gap-10 md:grid-cols-2">
						<div>
							<div className="flex items-center justify-between">
								<p className={`font-haas text-[13px] uppercase tracking-wide ${scrolled ? "text-white/60" : "text-[#04163A]/60"}`}>
									Blogs
								</p>
								<Link
									to="/blogs"
									onClick={() => setInsightsOpen(false)}
									className="font-haas font-semibold text-[14px] text-(--color-cyan) underline underline-offset-4"
								>
									View all
								</Link>
							</div>
							<div className="mt-3 flex flex-col">
								{blogs.map((post) => (
									<Link
										key={post.slug}
										to={`/blogs/${post.slug}`}
										onClick={() => setInsightsOpen(false)}
										className={`rounded px-4 py-3 transition-colors duration-200 ${scrolled ? "hover:bg-white/10" : "hover:bg-[#0D7DD4]/10"}`}
									>
										<p className={`font-haas font-bold text-[15px] ${scrolled ? "text-white" : "text-[#04163A]"}`}>
											{post.title}
										</p>
										<p className={`mt-0.5 font-haas text-[13px] ${scrolled ? "text-white/60" : "text-[#04163A]/60"}`}>
											{post.date}
										</p>
									</Link>
								))}
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<p className={`font-haas text-[13px] uppercase tracking-wide ${scrolled ? "text-white/60" : "text-[#04163A]/60"}`}>
									News
								</p>
								<Link
									to="/news"
									onClick={() => setInsightsOpen(false)}
									className="font-haas font-semibold text-[14px] text-(--color-cyan) underline underline-offset-4"
								>
									View all
								</Link>
							</div>
							<div className="mt-3 flex flex-col">
								{news.map((post) => (
									<Link
										key={post.slug}
										to={`/news/${post.slug}`}
										onClick={() => setInsightsOpen(false)}
										className={`rounded px-4 py-3 transition-colors duration-200 ${scrolled ? "hover:bg-white/10" : "hover:bg-[#0D7DD4]/10"}`}
									>
										<p className={`font-haas font-bold text-[15px] ${scrolled ? "text-white" : "text-[#04163A]"}`}>
											{post.title}
										</p>
										<p className={`mt-0.5 font-haas text-[13px] ${scrolled ? "text-white/60" : "text-[#04163A]/60"}`}>
											{post.date}
										</p>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* mobile menu */}
			{open && (
				<nav className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 backdrop-blur-md ${scrolled ? "border-white/10 bg-[#04163A]/95" : "border-[#04163A]/10 bg-white/80"}`}>
					{routeLinks.slice(0, 2).map((link) => (
						<Link
							key={link.to}
							to={link.to}
							onClick={() => setOpen(false)}
							className={`font-haas text-[16px] py-1 ${scrolled ? "text-white" : "text-[#04163A]"}`}
						>
							{link.label}
						</Link>
					))}
					{/* mobile services accordion */}
					<div>
						<button
							type="button"
							onClick={() => { setMobServicesOpen((v) => !v); setMobInsightsOpen(false); }}
							aria-expanded={mobServicesOpen}
							className={`flex w-full items-center justify-between py-1 font-haas text-[16px] ${scrolled ? "text-white" : "text-[#04163A]"}`}
						>
							Services
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform duration-300 ${mobServicesOpen ? "rotate-180" : ""}`}>
								<path d="M6 9l6 6 6-6" />
							</svg>
						</button>
						{mobServicesOpen && (
							<div className="ml-3 mt-1 mb-2 flex flex-col gap-3 border-l-2 border-[#0D7DD4] py-1 pl-4">
								{services.map((service) => (
									<Link
										key={service.slug}
										to={`/services/${service.slug}`}
										onClick={() => setOpen(false)}
										className={`font-haas text-[15px] ${scrolled ? "text-white/80" : "text-[#04163A]/80"}`}
									>
										{service.title}
									</Link>
								))}
							</div>
						)}
					</div>
					{/* mobile insights accordion */}
					<div>
						<button
							type="button"
							onClick={() => { setMobInsightsOpen((v) => !v); setMobServicesOpen(false); }}
							aria-expanded={mobInsightsOpen}
							className={`flex w-full items-center justify-between py-1 font-haas text-[16px] ${scrolled ? "text-white" : "text-[#04163A]"}`}
						>
							Insights
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform duration-300 ${mobInsightsOpen ? "rotate-180" : ""}`}>
								<path d="M6 9l6 6 6-6" />
							</svg>
						</button>
						{mobInsightsOpen && (
							<div className="ml-3 mt-1 mb-2 flex flex-col gap-3 border-l-2 border-[#0D7DD4] py-1 pl-4">
								<Link
									to="/blogs"
									onClick={() => setOpen(false)}
									className={`font-haas font-semibold text-[15px] text-(--color-cyan)`}
								>
									All Blogs
								</Link>
								{blogs.map((post) => (
									<Link
										key={post.slug}
										to={`/blogs/${post.slug}`}
										onClick={() => setOpen(false)}
										className={`font-haas text-[15px] ${scrolled ? "text-white/80" : "text-[#04163A]/80"}`}
									>
										{post.title}
									</Link>
								))}
								<Link
									to="/news"
									onClick={() => setOpen(false)}
									className={`font-haas font-semibold text-[15px] text-(--color-cyan)`}
								>
									All News
								</Link>
								{news.map((post) => (
									<Link
										key={post.slug}
										to={`/news/${post.slug}`}
										onClick={() => setOpen(false)}
										className={`font-haas text-[15px] ${scrolled ? "text-white/80" : "text-[#04163A]/80"}`}
									>
										{post.title}
									</Link>
								))}
							</div>
						)}
					</div>
					{routeLinks.slice(2).map((link) => (
						<Link
							key={link.to}
							to={link.to}
							onClick={() => setOpen(false)}
							className={`font-haas text-[16px] py-1 ${scrolled ? "text-white" : "text-[#04163A]"}`}
						>
							{link.label}
						</Link>
					))}
					{sectionLinks.map((section) => (
						<a
							key={section.id}
							href={section.id}
							onClick={(e) => {
								setOpen(false);
								goSection(e, section.id);
							}}
							className={`font-haas text-[16px] py-1 ${scrolled ? "text-white" : "text-[#04163A]"}`}
							>
							{section.label}
						</a>
					))}
				</nav>
			)}
		</header>
	);
};

export default Navbar;
