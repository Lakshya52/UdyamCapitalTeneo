import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

const quickLinks = [
	// { label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Blogs", href: "/blogs" },
	{ label: "News", href: "/news" },
	{ label: "Careers", href: "/careers" },
	{ label: "Contact", href: "/contact" },
];

function GiantWatermark() {
	const wrapRef = useRef(null);
	const textRef = useRef(null);

	useLayoutEffect(() => {
		const wrap = wrapRef.current;
		const text = textRef.current;
		if (!wrap || !text) return;

		const fit = () => {
			// Measure natural width at 100px, then scale font-size so
			// width == container width. No horizontal squeeze — glyphs
			// keep natural proportions, only font-size (height) changes.
			text.style.fontSize = "100px";
			const natural = text.scrollWidth;
			const avail = wrap.clientWidth;
			if (natural > 0 && avail > 0) {
				text.style.fontSize = `${Math.min((100 * avail) / natural, 200)}px`;
			}
		};

		fit();
		// Re-fit once fonts load (face change alters natural width)
		let cancelled = false;
		if (document.fonts?.ready) {
			document.fonts.ready.then(() => {
				if (!cancelled) fit();
			});
		}
		const ro = new ResizeObserver(fit);
		ro.observe(wrap);
		return () => {
			cancelled = true;
			ro.disconnect();
		};
	}, []);

	return (
		<div className="relative z-10 mx-auto w-full max-w-(--layout-max-width) px-6 md:px-[100px]">
			<div ref={wrapRef} className="w-full">
				<div
					ref={textRef}
					aria-hidden="true"
					className="w-max max-w-none origin-left -translate-y-[25%] text-center font-haas font-bold leading-[0.8] tracking-[-0.04em] text-[#04163A]/10"
				>
					UdyamCapital
				</div>
			</div>
		</div>
	);
}

const Footer = () => {
	return (
		<footer id="contact" className="relative flex h-fit w-full flex-col justify-end overflow-hidden bg-white  text-[#04163A]">
			{/* link columns */}
			<div className="relative z-10 w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px] py-12 md:py-16 grid gap-10 md:gap-12 md:grid-cols-[2fr_1fr_1fr]">
				{/* brand */}
				<div>
					<img
						src="/LogoNormal.png"
						className="h-[64px]"
						alt="Udyam Capital logo"
					/>
					<p className="mt-6 max-w-2xl text-[#04163A]/70 font-haas text-[16px] leading-relaxed">
						Udyam Capital is your trusted strategic partner,
						committed to empowering businesses with tailored
						financial, operational, and technological solutions. We
						combine deep expertise with a forward-thinking approach
						to help you unlock growth, build resilience, and create
						lasting value. From honest assessment to final outcome —
						we work as an extension of your leadership team,
						turning complex challenges into stepping stones for
						transformation.
					</p>
					<p className="mt-5 text-[#04163A]/50 font-haas text-[15px] leading-relaxed">
						© 2026 Udyam Capital. All Rights Reserved.
					</p>
				</div>

				{/* quick links */}
				<div>
					<h4 className="font-haas font-bold text-[17px] uppercase tracking-wide">
						Quick Links
					</h4>
					<ul className="mt-6 flex flex-col gap-4">
						{quickLinks.map((link) => (
							<li key={link.label}>
								{link.href.startsWith("/#") ? (
									<a
										href={link.href}
										className="text-[#04163A]/70 font-haas text-[16px] transition-colors duration-300 hover:text-[#04163A]"
									>
										{link.label}
									</a>
								) : (
									<Link
										to={link.href}
										className="text-[#04163A]/70 font-haas text-[16px] transition-colors duration-300 hover:text-[#04163A]"
									>
										{link.label}
									</Link>
								)}
							</li>
						))}
					</ul>
					<ul className="mt-4 flex flex-col gap-4 ">
						<li>
							<span className="text-[#04163A]/70 font-haas text-[16px]">
								Terms &amp; Conditions
							</span>
						</li>
						<li>
							<span className="text-[#04163A]/70 font-haas text-[16px]">
								Privacy Policy
							</span>
						</li>
					</ul>
				</div>

				{/* services + contact */}
				<div className="flex flex-col gap-12">
					{/* services */}
					<div>
						<h4 className="font-haas font-bold text-[17px] uppercase tracking-wide">
							Our Services
						</h4>
						<ul className="mt-6 flex flex-col gap-4">
							{services.map((service) => (
								<li key={service.slug}>
									<Link
										to={`/services/${service.slug}`}
										className="text-[#04163A]/70 font-haas text-[16px] transition-colors duration-300 hover:text-[#04163A]"
									>
										{service.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* contact */}
					<div>
						<h4 className="font-haas font-bold text-[17px] uppercase tracking-wide">
							Contact Us
						</h4>
						<div className="mt-6 flex flex-col gap-4">
							<a
								href="mailto:we.care@udyamcapital.com"
								className="text-[#04163A]/70 font-haas text-[16px] break-all transition-colors duration-300 hover:text-[#04163A]"
							>
								we.care@udyamcapital.com
							</a>
							<a
								href="tel:+918287598661"
								className="text-[#04163A]/70 font-haas text-[16px] transition-colors duration-300 hover:text-[#04163A]"
							>
								+91 82875 98661
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Giant watermark — locked to the same container width as navbar, no squeeze */}
			<GiantWatermark />
		</footer>
	);
};

export default Footer;
