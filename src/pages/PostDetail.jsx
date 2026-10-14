import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogs, news } from "../data/feed";

const sources = {
	blog: { posts: blogs, indexTo: "/blogs", indexLabel: "All blogs" },
	news: { posts: news, indexTo: "/news", indexLabel: "All news" },
};

const PostDetail = ({ kind }) => {
	const { slug } = useParams();
	const { posts, indexTo, indexLabel } = sources[kind] ?? sources.blog;
	const post = posts.find((p) => p.slug === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	if (!post) {
		return (
			<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px] pt-40 pb-20">
				<h1 className="text-black font-bold font-haas text-2xl">
					Post not found
				</h1>
				<Link
					to={indexTo}
					className="inline-block mt-6 text-(--color-cyan) font-haas text-[15px] underline underline-offset-4"
				>
					{indexLabel}
				</Link>
			</div>
		);
	}

	return (
		<>
			{/* header */}
			<div className="w-full bg-(--color-dark-blue) pt-40 pb-14">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<Link
						to={indexTo}
						className="text-white/70 font-haas text-[15px] underline underline-offset-4"
					>
						{indexLabel}
					</Link>
					<p className="mt-4 text-white/60 font-haas text-[13px] uppercase tracking-wide">
						{post.date}
					</p>
					<h1 className="mt-2 max-w-4xl text-white font-bold font-haas text-3xl md:text-[42px] leading-tight">
						{post.title}
					</h1>
				</div>
			</div>

			{/* body */}
			<div className="w-full py-14 md:py-20">
				<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px]">
					<div className="max-w-3xl flex flex-col gap-6">
						{(post.body ?? [post.excerpt]).map((para, i) => (
							<p
								key={i}
								className="text-[#333333] text-[18px] font-haas leading-relaxed"
							>
								{para}
							</p>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default PostDetail;
