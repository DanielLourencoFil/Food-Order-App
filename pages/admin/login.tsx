import React, { useState } from "react";

import useRouter from "next/router";

import axios from "axios";

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import styles from "../../styles/login.module.css";

const Login = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isHidePassword, setIsHidePassword] = useState<boolean>(true);
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const router = useRouter;

	const handleSubmitLogin = async (e: any) => {
		e.preventDefault();

		try {
			await axios.post("http://localhost:3000/api/login", {
				username,
				password,
			});
			router.push("/admin");
			setError(false);
		} catch (error) {
			console.log(error);

			setError(true);
		}
	};

	return (
		<div
			className="container"
			onClick={() => setIsFocus(document.activeElement?.id === "password")}
		>
			<section className={`section-center ${styles.login}`}>
				<h1 className={styles.title}>Admin Dashboard</h1>
				<form className={styles.form}>
					<label htmlFor="user">username</label>
					<input
						className={styles.username}
						id="user"
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
					<label htmlFor="password">password</label>
					<div
						className={`${styles.inputContainer} ${isFocus && styles.focus}`}
					>
						<input
							className={styles.password}
							id="password"
							type={`${isHidePassword ? "password" : "text"}`}
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
						<span onClick={() => setIsHidePassword(!isHidePassword)}>
							{" "}
							<BsFillEyeFill
								style={{ display: ` ${isHidePassword ? "none" : "block"}` }}
							/>
							<BsFillEyeSlashFill
								style={{ display: ` ${!isHidePassword ? "none" : "block"}` }}
							/>
						</span>
					</div>
					<p className={styles.error}>{error && "Sorry, wrong credentials!"}</p>
					<button
						className={styles.loginBtn}
						onClick={(e) => handleSubmitLogin(e)}
					>
						Login
					</button>
				</form>
			</section>
		</div>
	);
};

export default Login;
