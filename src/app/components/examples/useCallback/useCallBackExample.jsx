import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    // Without Callback
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);
    // With Callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p> Render withOutCallback: {withOutCallback.current}</p>
            <p> Render withCallback: {withCallback.current}</p>
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                onChange={handleChange}
                name="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
