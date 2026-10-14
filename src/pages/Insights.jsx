import React from "react";
import { blogs, news } from "../data/feed";

const FeedSection = ({ title, posts }) => (
	<div className="mt-12 first:mt-0">
		<h2 className="text-(--color-cyan) text-2xl md:text-[32px] font-bold font-haas">
			{title}
		</h2>
		<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
			{posts.map((post) => (
				<article
					key={post.slug}
					className="bg-[#D6E9FB] border-t-4 border-(--color-cyan) p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#C2DDF9] hover:shadow-[0_20px_40px_-15px_rgba(4,22,58,0.35)]"
				>
					<p className="text-[#04163A]/50 font-haas text-[13px] uppercase tracking-wide">
						{post.date}
					</p>
					<h3 className="mt-2 text-black font-haas font-bold text-[21px] leading-snug">
						{post.title}
					</h3>
					<p className="mt-3 text-[#333333] font-haas text-[16px] leading-relaxed">
						{post.excerpt}
					</p>
				</article>
			))}
		</div>
	</div>
);

const Insights = () => {
	return (
		<>
			{/* header */}
			<div className="w-full bg-(--color-dark-blue) pt-40 pb-14">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<h1 className="text-white font-bold font-haas text-3xl md:text-[42px] leading-tight">
						Insights
					</h1>
					<p className="mt-4 max-w-3xl text-white/75 font-haas text-[18px] leading-relaxed">
						Ideas from our advisory desk, plus firm announcements
						and milestones.
					</p>
				</div>
			</div>

			<div className="w-full py-14 md:py-20">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px] flex flex-col gap-14">
					<FeedSection title="Blogs" posts={blogs} />
					<FeedSection title="News" posts={news} />
				</div>
			</div>
		</>
	);
};

export default Insights;
