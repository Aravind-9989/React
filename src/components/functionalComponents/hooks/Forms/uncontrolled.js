

import { useRef } from "react";

const Uncontrolled = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        if (username.length > 5) {
            alert("Username must be 5 characters or less");
        }

        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <>
            <h1>Uncontrolled component example</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Username" ref={usernameRef} />
                <input type="password" name="password" ref={passwordRef} />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default Uncontrolled;
