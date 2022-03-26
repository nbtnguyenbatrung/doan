import {Button, Result} from "antd";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {logout} from "../../../api/login/api";

const Error404 = () => {

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary">
                    <a href="/dashboard">Back Home</a>
                </Button>
            }
        />
    );
};

export default Error404;
