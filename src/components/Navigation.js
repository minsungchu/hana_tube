import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// 신촌하나교회
// 조이챈트
// 하나무브먼트
// 하나워쉽무브먼트
// 방배하나교회
// 수원하나교회
function Navigation() {
    return (
        <div className="container">
            <div className="nav">
                <Link to="/schana">신촌하나교회</Link>
                <Link to="/joychant">조이챈트</Link>
            </div>
        </div>
    );
}

export default Navigation;