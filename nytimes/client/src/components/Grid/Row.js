import React from "react";

export const Row = ({ fluid, children }) => (
    <div className = {`container${fluid ? "-fluid" : ""}`}>
        {children}
        </div>
    );