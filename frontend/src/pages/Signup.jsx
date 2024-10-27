import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup'; // Adjust the path based on your structure

export default function Signup() {
	const { loading, signup } = useSignup();
	const [formData, setFormData] = useState({
		fullName: '',
		username: '',
		password: '',
		confirmPassword: '',
		gender: 'male',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(formData);
	};

	return (
		<div className="min-h-screen bg-primary flex items-center justify-center">
			<div className="w-full max-w-lg p-10 space-y-6 bg-secondary shadow-lg rounded-lg">
				<h2 className="text-3xl font-bold text-textLight text-center">Create Your Account</h2>

				<form className="space-y-4" onSubmit={handleSubmit}>
					{/* Full Name */}
					<div className="relative">
						<label className="block text-textLight">Full Name</label>
						<input
							type="text"
							name="fullName"
							value={formData.fullName}
							onChange={handleChange}
							placeholder="Enter your full name"
							className="input input-bordered w-full bg-primary border-accent text-textLight focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 transition-shadow duration-200"
						/>
					</div>

					{/* Username */}
					<div className="relative">
						<label className="block text-textLight">Username</label>
						<input
							type="text"
							name="username"
							value={formData.username}
							onChange={handleChange}
							placeholder="Enter your username"
							className="input input-bordered w-full bg-primary border-accent text-textLight focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 transition-shadow duration-200"
						/>
					</div>

					{/* Password */}
					<div className="relative">
						<label className="block text-textLight">Password</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="Enter your password"
							className="input input-bordered w-full bg-primary border-accent text-textLight focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 transition-shadow duration-200"
						/>
					</div>

					{/* Confirm Password */}
					<div className="relative">
						<label className="block text-textLight">Confirm Password</label>
						<input
							type="password"
							name="confirmPassword"
							value={formData.confirmPassword}
							onChange={handleChange}
							placeholder="Confirm your password"
							className="input input-bordered w-full bg-primary border-accent text-textLight focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 transition-shadow duration-200"
						/>
					</div>

					{/* Gender */}
					<div className="relative">
						<label className="block text-textLight">Gender</label>
						<select
							name="gender"
							value={formData.gender}
							onChange={handleChange}
							className="input input-bordered w-full bg-primary border-accent text-textLight focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 transition-shadow duration-200"
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</div>

					{/* Submit Button */}
					<div className="text-center">
						<button 
							type="submit"
							disabled={loading}
							className={`btn btn-accent w-full py-3 font-bold rounded-lg hover:bg-secondary hover:text-white transition duration-300 ${loading ? "opacity-50" : ""}`}
						>
							{loading ? 'Signing Up...' : 'Sign Up'}
						</button>
					</div>
				</form>

				<p className="text-center text-textLight">
					Already have an account? <Link className="text-accent hover:underline" to="/login">Login</Link>
				</p>
			</div>
		</div>
	);
}
