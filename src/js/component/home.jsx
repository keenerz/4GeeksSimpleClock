import React from "react";
import "/workspace/react-hello/src/js/component/home.jsx";

//create your first component
const Home = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i class="far fa-clock"></i>
			</div>
			<div className="four">0</div>
			<div className="three">0</div>
			<div className="two">0</div>
			<div className="one">0</div>
		</div>
	);
};

export default Home;
