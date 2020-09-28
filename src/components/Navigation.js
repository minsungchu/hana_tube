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
        <div className="nav">
            <div className="logo">
                <div className="logo__icon"><i class="fas fa-dove"></i></div>
                <div className="logo__title">HanaTube</div>
            </div>
            <div className="nav__items">
                <Link to="/" exact="true">신촌하나교회</Link>
                <Link to="/joychant">조이챈트</Link>
                <Link to="/hanamvment">하나무브먼트</Link>
                <Link to="/hanaworship">하나워쉽무브먼트</Link>
            </div>
            <ul className="nav__icons">
                <li><i class="fas fa-heart"></i></li>
                <li><i class="fas fa-envelope"></i></li>
            </ul>

        </div>
    );
}

export default Navigation;

//<Link to="/"><Button variant="outline-success" size="lg" block><i className="home fas fa-home"></i></Button></Link>
//<Button variant="outline-success" size="lg" block><Link to="/schana">신촌하나교회</Link></Button>
//<Button variant="outline-success" size="lg" block><Link to="/joychant">조이챈트</Link></Button>
//<Button variant="outline-success" size="lg" block><Link to="/TBD1">TBD</Link></Button>
//<Button variant="outline-success" size="lg" block><Link to="/TBD2">TBD</Link></Button>