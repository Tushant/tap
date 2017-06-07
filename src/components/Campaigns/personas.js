import React from 'react';
import ReactModal from 'react-modal';

export const Personas = props => {
	// console.log('props', props);
	const renderPersonas =
		props.personas &&
		props.personas.map((persona, i) => {
			console.log(persona);
			return (
				// <div key={i}>
				// 	{persona.personas &&
				// 		persona.personas.map((person, i) => {
				// 			return (
				<div key={i}>
					<span>
						<input type="checkbox" />
						<li style={{ listStyle: 'none' }}>{persona.name}</li>
					</span>
				</div>
				// 			);
				// 		})}
				// </div>
			);
		});
	return (
		<ReactModal
			isOpen={props.showModal}
			onRequestClose={props.hideModal}
			contentLabel="Modal"
		>
			<h1>Personas</h1>
			{renderPersonas && renderPersonas}
		</ReactModal>
	);
};
