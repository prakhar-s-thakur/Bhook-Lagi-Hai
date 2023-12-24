import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://th.bing.com/th/id/OIG.xDawWvI8xBBxeBpQ2QS2?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                     <li>Home</li>
                     <li>About Us</li>
                     <li>Contact Us</li>
                     <li>Cart</li>
                </ul>
            </div>
    </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
          <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
