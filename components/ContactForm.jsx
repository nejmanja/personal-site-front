import React from "react";
import styles from "./ContactForm.module.css";
import utilStyles from "../styles/utils.module.css";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

export default function ContactForm({ className }) {
    const form = useRef();
    const [mailStatus, setMailStatus] = useState(undefined);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState({
        email: null,
        name: null,
        message: null,
    });

    const sendEmail = (e) => {
        e.preventDefault();
        if (
            error.email !== false ||
            error.name !== false ||
            error.message !== false
        ) {
            setError((prev) => ({
                email: prev.email === null ? true : prev.email,
                name: prev.name === null ? true : prev.name,
                message: prev.message === null ? true : prev.message,
            }));
            return;
        }

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
                },
                (error) => {
                    console.log(error.text);
                    setMailStatus(-1);
                }
            );
    };

    const handleChange = (e, property) => {
        // regex string: string @ string . string(at least 2 chars)
        if (property === "email")
            setError((prev) => {
                return {
                    ...prev,
                    [property]: !/\S+@\S+\.\S{2,}/.test(e.target.value),
                };
            });
        else
            setError((prev) => {
                return {
                    ...prev,
                    [property]: e.target.value === "",
                };
            });

        setFormData((prev) => {
            return { ...prev, [property]: e.target.value };
        });
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
                    value={formData.name}
                    onChange={(e) => handleChange(e, "name")}
                    error={[error.name]}
                />
                {error.name && (
                    <p className={styles.error}>Please enter your name!</p>
                )}
            </label>
            <label className={`${styles.label} ${styles.email}`}>
                Email:
                <input
                    type="email"
                    className={`${styles.input} ${utilStyles.ffSansNormal}`}
                    name="from_email"
                    onChange={(e) => handleChange(e, "email")}
                    value={formData.email}
                    error={[error.email]}
                />
                {error.email && (
                    <p className={styles.error}>Please enter a valid email!</p>
                )}
            </label>
            <label className={`${styles.label} ${styles.textarea}`}>
                Message:
                <textarea
                    rows="6"
                    className={`${styles.input} ${utilStyles.ffSansNormal}`}
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleChange(e, "message")}
                    error={[error.message]}
                />
                {error.message && (
                    <p className={styles.error}>Message cannot be empty!</p>
                )}
            </label>
            <input
                type="submit"
                disabled={mailStatus === 200}
                value={mailStatus === 200 ? "Success!" : "Send!"}
                className={`${
                    mailStatus === 200 ? styles.submit_disabled : styles.submit
                } ${utilStyles.ffSansCond} ${utilStyles.letterSpacing3} ${
                    utilStyles.uppercase
                } ${utilStyles.fs400} ${utilStyles.textLight}`}
            />
            {mailStatus && mailStatus !== 200 && (
                <p className={`${styles.error} ${styles.statusError}`}>
                    An error occured while sending the email, please try again!
                </p>
            )}
        </form>
    );
}
