import React, { useEffect, useState } from "react";

const links = [
	{ label: "Home", href: "#top" },
	{ label: "Services", href: "#services" },
	{ label: "Insights", href: "#insights" },
	{ label: "Our Team", href: "#team" },
	{ label: "Careers", href: "#join" },
	{ label: "Contact", href: "#contact" },
];

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

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
		>
			<div
				className={`w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px] flex items-center justify-between transition-all duration-300 ${
					scrolled ? "py-[12px]" : "py-[20px]"
				}`}
			>
				{/* logo */}
				<a href="#top" aria-label="Udyam Capital home">
					<img
						src="/LogoWhite.png"
						alt="Udyam Capital logo"
						className="h-[40px] md:h-[50px]"
					/>
				</a>

				{/* desktop links */}
				<nav className="hidden md:flex items-center gap-[36px]">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className={`nav-link font-haas text-[15px] leading-[158%] transition-colors duration-300 text-white`}
						>
							{link.label}
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

			{/* mobile menu */}
			{open && (
				<nav className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 backdrop-blur-md ${scrolled ? "border-white/10 bg-[#04163A]/95" : "border-[#04163A]/10 bg-white/80"}`}>
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setOpen(false)}
							className={`font-haas text-[16px] py-1 ${scrolled ? "text-white" : "text-[#04163A]"}`}
						>
							{link.label}
						</a>
					))}
				</nav>
			)}
		</header>
	);
};

export default Navbar;
