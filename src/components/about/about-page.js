import React from "react";

function AboutPage() {

    return (
        <div className="d-flex justify-content-center align-middle flex-column mt-6 align-middle" style={{height: "500px"}}>
            <h1 className="align-self-center" style={{fontSize: 100}}>About Page</h1>
            <h3 className="align-self-center font-italic" style={{fontWeight: "normal", fontSize: 50}}>
                React lab 2 'Reactive Notes App'
            </h3>
            <h6 className="align-self-center text-muted" style={{fontSize: 20}}>
                Stoiakevych Maxym
            </h6>
        </div>
    );
}

export default AboutPage;