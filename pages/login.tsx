import React, { useState } from "react";
import styles from "../styles/login.module.css";

const Login = () => {
	const [user, setUser] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isHidePassword, setIsHidePassword] = useState<boolean>(true);

	return (
		<div className="container">
			<section className={`section-center ${styles.login}`}>
				<form className={styles.form}>
					<label htmlFor="user">username</label>
					<input
						id="user"
						type="text"
						onChange={(e) => setUser(e.target.value)}
						value={user}
					/>
					<label htmlFor="password">password</label>
					<div className={styles.inputContainer}>
						<input
							className={styles.password}
							id="password"
							type={`${isHidePassword ? "password" : "text"}`}
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
						<span onClick={() => setIsHidePassword(!isHidePassword)}>X</span>
					</div>
				</form>
			</section>
		</div>
	);
};

export default Login;
