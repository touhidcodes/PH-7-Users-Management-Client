import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	const handleUser = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		form.reset();
	};
	return (
		<>
			<h1>Users Management System</h1>
			<h4>users: {users.length}</h4>
			<form onSubmit={handleUser}>
				<input type='text' name='name' id='' placeholder='name' /> <br />
				<input type='email' name='email' id='' placeholder='email' />
				<br />
				<input type='submit' value='Add User' />
			</form>
			<div>
				{users.map((user) => (
					<p key={user.id}>
						{user.id} : {user.name}
					</p>
				))}
			</div>
		</>
	);
}

export default App;
