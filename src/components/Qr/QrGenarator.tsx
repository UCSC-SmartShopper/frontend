import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

// ReactDOM.render(<QRCode value="hey pakayooo" />, document.getElementById("Container"));

export default function QrGenarator() {
    return (
        <div>
        <QRCode value="hey pakayooo" />
        </div>
    );
    }