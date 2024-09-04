"use client";

import { useState } from "react";
import styles from "./Form.module.scss";

import { useForm } from "react-hook-form";

export type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    queryType: boolean;
    message: string;
    consent: boolean;
};

interface Props {
    onSuccessMessage: (isMessage: boolean) => void;
}

export const Form: React.FunctionComponent<Props> = ({ onSuccessMessage }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const onHandleSubmit = (data: FormData) => {
        console.log(data);
        if (data) {
            onSuccessMessage(true);
        }
    };

    return (
        <>
            <form
                className={styles.form}
                onSubmit={handleSubmit(onHandleSubmit)}
            >
                <div className={styles.form_container}>
                    <div
                        className={`${styles.input_container} ${styles.fname}`}
                    >
                        <label htmlFor="first-name">
                            first name
                            <span
                                className={styles.required}
                                aria-hidden="true"
                            >
                                *
                            </span>
                            <span className={styles.sr_only}>required</span>
                        </label>
                        <input
                            type="text"
                            id="first-name"
                            {...register("firstName", {
                                required: "This field is required"
                            })}
                            aria-invalid="true"
                            aria-describedby="first-name-error-message"
                            autoComplete="given-name"
                        />

                        {errors.firstName && (
                            <p
                                className={styles.error_message}
                                id="first-name-error-message"
                            >
                                {errors.firstName.message}
                            </p>
                        )}
                    </div>
                    <div
                        className={`${styles.input_container} ${styles.lname}`}
                    >
                        <label htmlFor="last-name">
                            last name
                            <span
                                className={styles.required}
                                aria-hidden="true"
                            >
                                *
                            </span>
                            <span className={styles.sr_only}>required</span>
                        </label>
                        <input
                            type="text"
                            id="last-name"
                            {...register("lastName", {
                                required: "This field is required"
                            })}
                            aria-invalid="true"
                            aria-describedby="last-name-error-message"
                            autoComplete="family-name"
                        />
                        {errors.lastName && (
                            <p
                                className={styles.error_message}
                                id="last-name-error-message"
                            >
                                {errors.lastName.message}
                            </p>
                        )}
                    </div>
                    <div
                        className={`${styles.input_container} ${styles.email}`}
                    >
                        <label htmlFor="email">
                            email address
                            <span
                                className={styles.required}
                                aria-hidden="true"
                            >
                                *
                            </span>
                            <span className={styles.sr_only}>required</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", {
                                required: "This field is required",
                                pattern: {
                                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                    message:
                                        "Please enter a valid email address"
                                }
                            })}
                            aria-invalid="true"
                            aria-describedby="email-error-message"
                            autoComplete="email"
                        />
                        {errors.email && (
                            <p
                                className={styles.error_message}
                                id="email-error-message"
                            >
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <fieldset
                        className={`${styles.fieldset} ${styles.querytype}`}
                    >
                        <legend>
                            query type
                            <span
                                className={styles.required}
                                aria-hidden="true"
                            >
                                *
                            </span>
                            <span className={styles.sr_only}>required</span>
                        </legend>

                        <div
                            className={`${styles.input_container} ${styles.fieldset_input_container} `}
                        >
                            <input
                                type="radio"
                                id="general-enquiry"
                                value="general enquiry"
                                {...register("queryType", { required: true })}
                                aria-describedby="general-enquiry-error-message"
                            />
                            <label htmlFor="general-enquiry">
                                general enquiry
                            </label>
                        </div>
                        <div
                            className={` ${styles.input_container} ${styles.fieldset_input_container} `}
                        >
                            <input
                                type="radio"
                                id="support-request"
                                value="support request"
                                {...register("queryType", {
                                    required: "Please select a query type"
                                })}
                                aria-describedby="general-enquiry-error-message"
                            />
                            <label htmlFor="support-request">
                                support request
                            </label>
                        </div>
                        {errors.queryType && (
                            <p
                                className={styles.error_message}
                                id="general-enquiry-error-message"
                            >
                                {errors.queryType.message}
                            </p>
                        )}
                    </fieldset>
                    <div
                        className={`${styles.input_container} ${styles.message}`}
                    >
                        <label htmlFor="message">
                            message
                            <span
                                className={styles.required}
                                aria-hidden="true"
                            >
                                *
                            </span>
                            <span className={styles.sr_only}>required</span>
                        </label>
                        <textarea
                            id="message"
                            rows={7}
                            {...register("message", {
                                required: "This field is required"
                            })}
                            aria-invalid="true"
                            aria-describedby="textarea-error-message"
                            autoComplete="on"
                        ></textarea>
                        {errors.message && (
                            <p
                                className={styles.error_message}
                                id="textarea-error-message"
                            >
                                {errors.message.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className={styles.consent_container}>
                    <input
                        type="checkbox"
                        id="consent"
                        {...register("consent", {
                            required:
                                "To submit this form, please consent to being contacted"
                        })}
                        aria-invalid="true"
                        aria-describedby="consent-error-message"
                    />
                    <label htmlFor="consent">
                        I consent to being contacted by the team
                        <span className={styles.required} aria-hidden="true">
                            *
                        </span>
                        <span className={styles.sr_only}>required</span>
                    </label>
                    {errors.consent && (
                        <p
                            className={styles.error_message}
                            id="consent-error-message"
                        >
                            {errors.consent.message}
                        </p>
                    )}
                </div>

                <button title="submit" className={styles.btn_submit}>
                    submit
                </button>
            </form>
        </>
    );
};
