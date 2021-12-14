import React, { useState } from "react";
import $ from "jquery";
//include images into your bundle
import ribbon from "../../img/ribbon_white.png";
import feliz_navidad from "../../img/feliz_navidad.png";
import christmas from "../../video/christmas.mp4";

//create your first component
const Home = () => {
	const [isClicked, setIsClicked] = useState(false);

	window.onload = () => {
		// $(document).ready(function () {
		// 	var $clickMe = $(".click-icon"),
		// 		$card = $(".card");

		// 	$card.on("click", function () {
		// 		$(this).toggleClass("is-opened");
		// 		$clickMe.toggleClass("is-hidden");
		// 	});
		// });
		let video = document.getElementById("myVideo");
		video.play();
	};

	return (
		<>
			<video autoPlay muted loop id="myVideo">
				<source src={christmas} type="video/mp4" />
				Your browser does not support HTML5 video.
			</video>
			<div
				className={`card ${isClicked ? "is-opened" : ""}`}
				onClick={(e) => {
					isClicked == true
						? setIsClicked(false)
						: setIsClicked(true);
				}}>
				<div className="card-page cart-page-front">
					<div className="card-page cart-page-outside"></div>
					<div className="card-page cart-page-inside">
						<span className="merry-christmas">
							<img src={feliz_navidad} />
						</span>
					</div>
				</div>
				<div className="card-page cart-page-bottom">
					<p>
						Felices fiestas para todos ustedes, mis amigos y
						familiares. Deseo que el espíritu de la navidad se haga
						presente en sus hogares y en sus corazones para que
						encuentren paz, armonía y amor.
						<br />
						¡Feliz Navidad!
					</p>
				</div>
			</div>

			<span className={`click-icon ${isClicked ? "" : ""}`}>
				<img src={ribbon} />
			</span>
			<div className="sharethis-inline-share-buttons"></div>
		</>
	);
};

export default Home;
