import React from "react";
import ReactStars from "react-rating-stars-component";

function MyStarRating({ emergencyLevel }) {
	const ratingChanged = (newRating) => {
		console.log(newRating);
	};
	return (
		<ReactStars
			count={5}
			value={emergencyLevel}
			isEdit={false}
			onChange={ratingChanged}
			size={24}
			isHalf={true}
			emptyIcon={<i className="far fa-star"></i>}
			halfIcon={<i className="fa fa-star-half-alt"></i>}
			fullIcon={<i className="fa fa-star"></i>}
			activeColor="#ffd700"
		/>
	);
}

export default MyStarRating;
