import React from 'react';

const Home = (props) => (
	<div className="main-content">
		<div className="container">
			<h2>{props.title}</h2>
			<div className="home-image"></div>
			<div className="thumbnail-container">
				<div className="home-thumbnail-1"></div>
				<div className="home-thumbnail-2"></div>
				<div className="home-thumbnail-3"></div>
			</div>
				<h4>The 64th Filmfare Awards ceremony, presented by The Times Group, honoured the best Indian Hindi-language films of 2018. The ceremony was held on 23 March 2019 in Mumbai. Raazi and Andhadhun won five awards each, with the former winning Best Film, Best Director, and Best Actress. </h4>
		</div>
	</div>
);

export default Home;