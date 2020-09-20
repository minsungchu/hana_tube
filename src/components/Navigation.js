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
        <div className="nav-container">
            <div className="row nav-inner inner">
                <Link className="col-md-2 center-block btn btn-default" to="/" exact="true"><i className="home fas fa-home"></i></Link>
                <Link className="col-md-2 center-block btn btn-default" to="/schana">신촌하나교회</Link>
                <Link className="col-md-2 center-block btn btn-default" to="/joychant">조이챈트</Link>
                <Link className="col-md-2 center-block btn btn-default" to="/tbd1">TBD</Link>
                <Link className="col-md-2 center-block btn btn-default" to="/tbd2">TBD</Link>
            </div>
        </div>
    );
}

export default Navigation;

//<Link to="/"><Button variant="outline-success" size="lg" block><i className="home fas fa-home"></i></Button></Link>
//<Button variant="outline-success" size="lg" block><Link to="/schana">신촌하나교회</Link></Button>
//<Button variant="outline-success" size="lg" block><Link to="/joychant">조이챈트</Link></Button>
//<Button variant="outline-success" size="lg" block><Link to="/TBD1">TBD</Link></Button>
//<Button variant="outline-success" size="lg" block><Link to="/TBD2">TBD</Link></Button>