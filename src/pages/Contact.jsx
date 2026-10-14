import React, { useState } from "react";

const topics = [
	"Business Loan",
	"Working Capital",
	"Credit Rating Advisory",
	"CFO Services",
	"Something Else",
];

const faqs = [
	{
		q: "How does an engagement start?",
		a: "Every engagement runs the same way: an honest assessment first, lender-grade preparation next, and parallel approaches so lenders compete for your mandate — tracked from first conversation to final disbursal.",
	},
	{
		q: "What services do you offer?",
		a: "Transaction Advisory, Credit Ratings Advisory, CFO Services, and Debt & Capital Advisory — covering term loans, working-capital limits, property-backed funding, project finance and syndicated facilities.",
	},
	{
		q: "How are scope and commercials decided?",
		a: "No generic playbooks and no open-ended meters. Scope and commercials are agreed in writing before work begins.",
	},
	{
		q: "Where are you located?",
		a: "Udyam Capital – ACEONE FUTURISTIC OPC PVT LTD, Sector 18, Noida, Uttar Pradesh.",
	},
	{
		q: "I'm looking for a job. Where do I apply?",
		a: "All current openings live on our Careers page, with role details and a one-click email application.",
	},
];

const Contact = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		topic: topics[0],
		message: "",
		company: "",
	});
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState("idle");

	const set = (key) => (e) =>
		setForm((f) => ({ ...f, [key]: e.target.value }));

	const validate = () => {
		const next = {};
		if (form.name.trim().length < 2) next.name = "Please share your name.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
			next.email = "Please share a valid email address.";
		if (form.phone.trim() && !/^[+\d][\d\s-]{6,15}$/.test(form.phone.trim()))
			next.phone = "Please share a valid phone number.";
		if (form.message.trim().length < 10)
			next.message = "Please write a few words about your requirement (min 10 characters).";
		setErrors(next);
		return Object.keys(next).length === 0;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (status === "sending") return;
		if (form.company) {
			setStatus("success");
			return;
		}
		if (!validate()) return;
		setStatus("sending");
		try {
			const res = await fetch(
				"https://formsubmit.co/ajax/we.care@udyamcapital.com",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify({
						name: form.name.trim(),
						email: form.email.trim(),
						phone: form.phone.trim(),
						topic: form.topic,
						message: form.message.trim(),
						_subject: `Website enquiry: ${form.topic}`,
						_template: "table",
					}),
				}
			);
			if (!res.ok) throw new Error("send failed");
			setStatus("success");
		} catch {
			setStatus("error");
		}
	};

	const inputClass = (bad) =>
		`w-full border bg-white px-4 py-3 font-haas text-[16px] text-black outline-none transition-colors duration-200 placeholder:text-[#04163A]/40 ${
			bad
				? "border-red-500"
				: "border-[#04163A]/20 focus:border-(--color-cyan)"
		}`;

	const [openFaq, setOpenFaq] = useState(0);

	return (
		<>
			{/* header */}
			<div className="w-full bg-(--color-dark-blue) pt-40 pb-14">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<h1 className="text-white font-bold font-haas text-3xl md:text-[42px] leading-tight">
						Contact Us
					</h1>
					<p className="mt-4 max-w-3xl text-white/75 font-haas text-[18px] leading-relaxed">
						Have a mandate in mind? Reach out to discuss your
						requirement with our team.
					</p>
				</div>
			</div>

			<div className="w-full py-14 md:py-20">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
						{/* contact methods */}
						<div className="flex flex-col gap-5">
							<div className="bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-6 md:p-8">
								<h2 className="text-black font-bold font-haas text-[21px]">
									Email
								</h2>
								<div className="mt-3 flex flex-col gap-2">
									<a
										href="mailto:we.care@udyamcapital.com"
										className="text-(--color-cyan) font-haas text-[18px] underline underline-offset-4 break-all"
									>
										we.care@udyamcapital.com
									</a>
									<a
										href="mailto:info@udyamcapital.com"
										className="text-(--color-cyan) font-haas text-[18px] underline underline-offset-4 break-all"
									>
										info@udyamcapital.com
									</a>
								</div>
							</div>
							<div className="bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-6 md:p-8">
								<h2 className="text-black font-bold font-haas text-[21px]">
									Phone
								</h2>
								<div className="mt-3 flex flex-col gap-2">
									<a
										href="tel:01204445816"
										className="text-(--color-cyan) font-haas text-[18px]"
									>
										Landline : 0120 444 5816
									</a>
									<a
										href="tel:+918287598661"
										className="text-(--color-cyan) font-haas text-[18px]"
									>
										Mobile : +91 82875 98661
									</a>
								</div>
							</div>
						</div>

						{/* office + map */}
						<div className="bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-6 md:p-8 flex flex-col">
							<h2 className="text-black font-bold font-haas text-[21px]">
								Office
							</h2>
							<p className="mt-3 text-[#333333] font-haas text-[18px] leading-relaxed">
								Udyam Capital – ACEONE FUTURISTIC OPC PVT LTD,
								Sector 18, Noida, Uttar Pradesh
							</p>
							<div className="mt-4 flex-1 min-h-[280px]">
								<iframe
									title="Udyam Capital office map — Sector 18, Noida"
									src="https://www.google.com/maps?q=Sector+18,+Noida,+Uttar+Pradesh&output=embed"
									loading="lazy"
									className="h-full min-h-[280px] w-full border-0"
								/>
							</div>
						</div>
					</div>

					{/* enquiry form + guidance */}
					<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="bg-[#ECEEF1] border-t-4 border-(--color-cyan) p-6 md:p-8">
							<h2 className="text-black font-bold font-haas text-[21px]">
								Send an Enquiry
							</h2>
							{status === "success" ? (
								<div className="mt-4 border border-[#04163A]/15 bg-white p-6">
									<p className="text-black font-haas font-bold text-[18px]">
										Thank you — your enquiry is on its way.
									</p>
									<p className="mt-2 text-[#333333] font-haas text-[16px] leading-relaxed">
										Our team will get back to you on your
										email address shortly.
									</p>
								</div>
							) : (
								<form
									onSubmit={onSubmit}
									noValidate
									className="mt-4 flex flex-col gap-4"
								>
									{/* honeypot */}
									<input
										type="text"
										value={form.company}
										onChange={set("company")}
										tabIndex={-1}
										autoComplete="off"
										aria-hidden="true"
										className="hidden"
									/>
									<div>
										<input
											type="text"
											placeholder="Your name *"
											value={form.name}
											onChange={set("name")}
											className={inputClass(errors.name)}
										/>
										{errors.name && (
											<p className="mt-1 text-red-600 font-haas text-[14px]">
												{errors.name}
											</p>
										)}
									</div>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div>
											<input
												type="email"
												placeholder="Email *"
												value={form.email}
												onChange={set("email")}
												className={inputClass(errors.email)}
											/>
											{errors.email && (
												<p className="mt-1 text-red-600 font-haas text-[14px]">
													{errors.email}
												</p>
											)}
										</div>
										<div>
											<input
												type="tel"
												placeholder="Phone (optional)"
												value={form.phone}
												onChange={set("phone")}
												className={inputClass(errors.phone)}
											/>
											{errors.phone && (
												<p className="mt-1 text-red-600 font-haas text-[14px]">
													{errors.phone}
												</p>
											)}
										</div>
									</div>
									<select
										value={form.topic}
										onChange={set("topic")}
										aria-label="Enquiry topic"
										className="w-full border border-[#04163A]/20 bg-white px-4 py-3 font-haas text-[16px] text-black outline-none focus:border-(--color-cyan)"
									>
										{topics.map((topic) => (
											<option key={topic} value={topic}>
												{topic}
											</option>
										))}
									</select>
									<div>
										<textarea
											placeholder="Your requirement *"
											rows={4}
											value={form.message}
											onChange={set("message")}
											className={`${inputClass(errors.message)} resize-y`}
										/>
										{errors.message && (
											<p className="mt-1 text-red-600 font-haas text-[14px]">
												{errors.message}
											</p>
										)}
									</div>
									{status === "error" && (
										<p className="text-red-600 font-haas text-[15px]">
											Something went wrong sending your
											enquiry. Please try again or email
											us directly.
										</p>
									)}
									<button
										type="submit"
										disabled={status === "sending"}
										className="inline-flex items-center justify-center gap-3 self-start bg-(--color-cyan) px-8 py-4 text-white font-haas font-semibold text-[16px] transition-colors duration-300 hover:bg-[#0B6BB5] disabled:opacity-60"
									>
										{status === "sending"
											? "Sending…"
											: "Send Enquiry"}
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
											<path d="M5 12h14" />
											<path d="M13 6l6 6-6 6" />
										</svg>
									</button>
								</form>
							)}
						</div>

						<div className="flex flex-col gap-5">
							<div className="bg-[#ECEEF1] border-t-4 border-(--color-cyan) p-6 md:p-8">
								<h2 className="text-black font-bold font-haas text-[21px]">
									What to Include
								</h2>
								<p className="mt-3 text-[#333333] font-haas text-[16px] leading-relaxed">
									To help us respond faster, share these
									basics in your first message:
								</p>
								<ul className="mt-4 flex flex-col gap-3">
									{[
										"Nature of your business and turnover",
										"Loan amount required and its purpose",
										"Existing loans, if any",
										"Your city and best contact number",
									].map((point) => (
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
							<div className="bg-[#ECEEF1] border-t-4 border-(--color-cyan) p-6 md:p-8">
								<h2 className="text-black font-bold font-haas text-[21px]">
									How Engagements Start
								</h2>
								<p className="mt-3 text-[#333333] font-haas text-[16px] leading-relaxed">
									Every engagement runs the same way: an
									honest assessment first, lender-grade
									preparation next, and parallel approaches
									so lenders compete for your mandate. No
									generic playbooks and no open-ended meters;
									scope and commercials are agreed in writing
									before work begins.
								</p>
							</div>
						</div>
					</div>

					{/* FAQ */}
					<div className="mt-14">
						<h2 className="text-(--color-cyan) text-2xl md:text-[32px] font-bold font-haas">
							Frequently Asked Questions
						</h2>
						<div className="mt-8 flex flex-col gap-4">
							{faqs.map((faq, i) => {
								const openFaqItem = openFaq === i;
								return (
									<div
										key={faq.q}
										className="border border-[#04163A]/15 bg-white"
									>
										<button
											type="button"
											onClick={() =>
												setOpenFaq(openFaqItem ? -1 : i)
											}
											aria-expanded={openFaqItem}
											className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
										>
											<span className="text-black font-haas font-bold text-[17px]">
												{faq.q}
											</span>
											<svg
												width="18"
												height="18"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2.5"
												strokeLinecap="round"
												aria-hidden="true"
												className={`shrink-0 text-(--color-cyan) transition-transform duration-300 ${
													openFaqItem ? "rotate-45" : ""
												}`}
											>
												<path d="M12 5v14" />
												<path d="M5 12h14" />
											</svg>
										</button>
										{openFaqItem && (
											<p className="px-6 pb-6 text-[#333333] font-haas text-[16px] leading-relaxed">
												{faq.a}
											</p>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
