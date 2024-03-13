import React, { useCallback, useState } from "react";
import Custombutton from "./custombutton";

const ProfileExample = () => {
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(0);

    const handleAge = useCallback(() => {
        setAge(age + 10);
    }, [age]);

    const handleSalary = useCallback(() => {
        setSalary(salary + 10000000);
    }, [salary]);

    return (
        <>
            <h1>Salary: {salary}</h1>
            <h1>Age: {age}</h1>
            <CustomButton onClick={handleAge}>Age Increment</CustomButton>
            <CustomButton onClick={handleSalary}>Salary Increment</CustomButton>
        </>
    );
};

export default ProfileExample;
