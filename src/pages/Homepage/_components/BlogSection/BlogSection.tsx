import React from "react";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import BlogCard from "./_components/BlogCard";
import { BlogCardData } from "./_components/BlogCard.data";
import "./BlogSection.scss";
import Button from "../../../../components/Button/Button";

const BlogSection = () => {
	return (
		<div className="blogs container">
			<SectionHeading title="Blogs" />
			<div className="blogs__cards">
				{BlogCardData.map((data) => (
					<BlogCard
						cardImg={data.cardImg}
						title={data.title}
						description={data.description}
						brief={data.brief}
					/>
				))}
			</div>
			<div className="btn-container">
				<Button label="View all Blogs" type="large" />
			</div>
		</div>
	);
};

export default BlogSection;
