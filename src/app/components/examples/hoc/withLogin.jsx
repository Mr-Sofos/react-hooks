import React from "react";
import Component from "./someComponent";
import Subtitle from "../../common/typografy/subtitle";

const withLogin = (component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
        <>{isLogin ? <Component {...props} /> : <Subtitle>Auth</Subtitle>}</>
    );
};

export default withLogin;
