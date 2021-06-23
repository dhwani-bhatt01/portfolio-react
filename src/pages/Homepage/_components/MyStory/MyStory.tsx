import MyPicture from "./../../../../assets/about-me.png";
import SectionHeading from "./../../../../components/SectionHeading/SectionHeading";
import "./MyStory.scss";

const MyStory = () => {
	return (
		<div className="about-me container">
			<div className="about-me__content">
				<SectionHeading title="My Story" />
				<p className="about-me__oneliner">
					Contrasting Cacophony, Hey this is Dhwani!
				</p>
				<p className="about-me__details">
					A fresher who is eager to use her fresh ideas and keen to invest her
					time and efforts to grow. I'm a <span> developer, designer,</span> and
					<span> writer</span> who is focused, energized to continue to work
					hard as success is inevitable. Hence putting in the work and doing
					what it takes to manifest my dream life.
				</p>
			</div>
			<div className="about-me__picture">
				<img src={MyPicture} alt="profile" />
			</div>
		</div>
	);
};

export default MyStory;
