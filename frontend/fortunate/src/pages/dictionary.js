import React, { Component } from "react";
import { wordsList } from "./wordsList";

class dictionary extends Component {
	render() {
		return (
			<div>
				<h1 style={{ color: "gold" }}>Dictionary</h1>
				<ul>
					{wordsList.map((item, index) => {
						return (
							<li key={index}>
								<div>
									<b style={{ color: "gold" }}>
										{" "}
										<i> {item.word}</i>
									</b>
									<i style={{ color: "white" }}>
										{" "}
										{" : "}
										{item.meaning}{" "}
									</i>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default dictionary;
