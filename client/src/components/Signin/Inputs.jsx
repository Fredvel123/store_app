import React from 'react';

function Inputs({ type, placeh }) {
	return (
		<div>
			<input
				className="form-control mt-5 "
				type={type}
				placeholder={placeh}
			/>
		</div>
	);
}

export default Inputs;
