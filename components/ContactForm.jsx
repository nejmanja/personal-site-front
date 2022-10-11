import React from "react";
import styles from "./ContactForm.module.css";
import utilStyles from "../styles/utils.module.css";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

export default function ContactForm({ className }) {
	const form = useRef();
	const [mailStatus, setMailStatus] = useState(undefined);
	const [email, setEmail] = useState("");
	const [error, setError] = useState(null);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_wjuqsvu",
				"personal_site_inquiries",
				e.target,
				"g808vjvN8xf8WrAAJ"
			)
			.then(
				(result) => {
					setMailStatus(result.status);
					console.log(mailStatus);
				},
				(error) => {
					console.log(error.text);
					setMailStatus(-1);
				}
			);
	};

	const handleChange = (e) => {
        // regex string: string @ string . string(at least 2 chars)
		setError(!/\S+@\S+\.\S{2,}/.test(e.target.value));
        setEmail(e.target.value);
	};

	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className={`${styles.contactForm} ${className}`}
		>
			<label className={`${styles.label} ${styles.name}`}>
				Name:
				<input
					type="text"
					className={`${styles.input} ${utilStyles.ffSansNormal}`}
					name="from_name"
				/>
			</label>
			<label className={`${styles.label} ${styles.email}`}>
				Email:
				<input
					type="email"
					className={`${styles.input} ${utilStyles.ffSansNormal}`}
					name="from_email"
                    onChange={handleChange}
                    value={email}
                    error={[error]}
				/>
                {error && <p className={styles.error}>Please enter a valid email!</p>}
			</label>
			<label className={`${styles.label} ${styles.textarea}`}>
				Message:
				<textarea
					rows="6"
					className={`${styles.input} ${utilStyles.ffSansNormal}`}
					name="message"
				/>
			</label>
			<input
				type="submit"
				value="Send!"
				className={`${styles.submit} ${utilStyles.ffSansCond} ${utilStyles.letterSpacing3} ${utilStyles.uppercase} ${utilStyles.fs400} ${utilStyles.textLight}`}
			/>
		</form>
	);
}
