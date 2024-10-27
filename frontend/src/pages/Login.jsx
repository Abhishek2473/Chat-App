import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-primary">
			<div className="w-full max-w-md p-10 space-y-8 bg-secondary shadow-2xl rounded-xl">
				<h2 className="text-4xl font-extrabold text-textLight text-center">Welcome Back</h2>
				<p className="text-center text-accent mb-6">Sign in to access your account</p>

				<form className="space-y-6" onSubmit={handleSubmit}>
					{/* Username */}
					<div>
						<label className="block text-textLight font-semibold">Username</label>
						<input
							type="text"
							placeholder="Enter your username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="input input-bordered w-full bg-primary border-accent text-textLight px-4 py-3 rounded-lg focus:outline-none focus:border-secondary"
						/>
					</div>

					{/* Password */}
					<div>
						<label className="block text-textLight font-semibold">Password</label>
						<input
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="input input-bordered w-full bg-primary border-accent text-textLight px-4 py-3 rounded-lg focus:outline-none focus:border-secondary"
						/>
					</div>

					{/* Login Button */}
					<div className="text-center">
						<button
							type="submit"
							disabled={loading}
							className="btn btn-accent w-full py-3 font-bold rounded-lg hover:bg-secondary hover:text-white transition duration-300"
						>
							{loading ? 'Signing In...' : 'Sign In'}
						</button>
					</div>
				</form>

				<p className="text-center text-textLight">
					Don't have an account? <Link to="/signup" className="text-accent underline">Sign Up</Link>
				</p>
			</div>
		</div>
	);
}
