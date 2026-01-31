"use client";

import { useState } from "react";

export default function login(){
	const [value, setValue] = useState("");	
	const [jsonOutput, setJsonOutput] = useState<string | null>(null);


	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const jsonData = {
			input: value,
		};

		setJsonOutput(JSON.stringify(jsonData, null, 2));
	};


	return(
	<div>
		<form>
			<h2>Login</h2>

			<input 
			type="text" 
			placeholder="enter in key"
			value = {value}
			onChange={(e) => setValue(e.target.value)}
			/> 
			
			<button type="submit">
			Submit
			</button>
		</form>

		{jsonOutput && (<pre> {jsonOutpu} </pre> )}

	</div>

	);

}







