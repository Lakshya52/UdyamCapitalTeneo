import React from "react";
import { Link } from "react-router-dom";
import { news } from "../data/feed";

const News = () => {
	return (
		<>
			{/* header */}
			<div className="w-full bg-(--color-dark-blue) pt-40 pb-14">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<h1 className="text-white font-bold font-haas text-3xl md:text-[42px] leading-tight">
						News
					</h1>
					<p className="mt-4 max-w-3xl text-white/75 font-haas text-[18px] leading-relaxed">
						Firm announcements, closed mandates, and milestones
						from Udyam Capital.
					</p>
				</div>
			</div>

			<div className="w-full py-14 md:py-20">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						{news.map((post) => (
							<article
								key={post.slug}
								className="group bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#C2DDF9] hover:shadow-[0_20px_40px_-15px_rgba(4,22,58,0.35)]"
							>
								<p className="text-[#04163A]/50 font-haas text-[13px] uppercase tracking-wide">
									{post.date}
								</p>
								<h2 className="mt-2 text-black font-haas font-bold text-[21px] leading-snug transition-colors duration-300 group-hover:text-(--color-cyan)">
									{post.title}
								</h2>
								<p className="mt-3 text-[#333333] font-haas text-[16px] leading-relaxed">
									{post.excerpt}
								</p>
								<Link
									to={`/news/${post.slug}`}
									className="mt-4 inline-block text-(--color-cyan) font-haas font-semibold text-[15px] underline underline-offset-4"
								>
									Read more
								</Link>
							</article>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default News;
