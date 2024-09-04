"use client";
import styles from "./page.module.scss";

import { useState } from "react";

import { Form, SuccessMessage } from "./components";

export default function Home() {
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);

    const handleIsSuccessMessage = (isMessage: boolean) => {
        setIsSuccessMessage(isMessage);
    };

    return (
        <main className={styles.main}>
            {isSuccessMessage && <SuccessMessage />}
            <div className={styles.main_container}>
                <h1> contact us</h1>
                <Form onSuccessMessage={handleIsSuccessMessage} />
            </div>
        </main>
    );
}
