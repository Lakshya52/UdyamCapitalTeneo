import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="w-full max-w-(--layout-max-width) mx-auto px-6 md:px-[100px] pt-40 pb-20 text-center">
			<h1 className="text-[#04163A] font-times font-semibold text-6xl md:text-[96px] leading-none">
				404
			</h1>
			<p className="mt-6 text-[#333333] font-haas text-[18px]">
				This page wandered off like an unprepared credit memo.
			</p>
			<Link
				to="/"
				className="mt-8 inline-flex items-center gap-3 bg-(--color-cyan) px-6 py-3 text-white font-haas font-semibold text-[15px] transition-colors duration-300 hover:bg-[#0B6BB5]"
			>
				Back to Home
			</Link>
		</div>
	);
};

export default NotFound;
