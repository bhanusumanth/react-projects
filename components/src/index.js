import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" />
                </a>
                <div className="context">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Todat at 6:00 PM
                        </span>
                    </div>
                    <div className="text">
                        Nice Blog Post
                    </div>
                </div>
            </div>
        </div>
    );  
};

ReactDOM.render(<App /> , document.getElementById("root"));