import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";


export default function QrGenarator() {
    return (
        <div>
        <QRCode value="hey machan" />
        </div>
    );
    }