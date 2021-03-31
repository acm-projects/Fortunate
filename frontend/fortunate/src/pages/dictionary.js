import React, { Component } from "react";
import { wordsList } from "./wordsList";

class dictionary extends Component {
	render() {
		// Sort definitiions alphabetically by term
		wordsList.sort((a, b) => a.term.localeCompare(b.term));

		return (
			<div>
				<h1 style={{ color: "gold" }}>Dictionary</h1>
				<ul style={{ color: "white" }}>
					{wordsList.map((item, index) => {
						return (
							<li key={index}>
								{/* TODO: Remove parenthesis from section reference name*/}
								<a name={item.term.toLowerCase()} />
								<i style={{ color: "gold" }}>
									<b>{item.term}</b>
								</i>
								<i style={{ color: "white" }}>
									{" : " + item.definition}
								</i>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default dictionary;
