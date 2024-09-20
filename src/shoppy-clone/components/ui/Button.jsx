import React from "react";

function Button({ text, onClick }) {
    return <button className="bg-shoppyBrand text-white py-2 px-4 rounded-md hover:brightness-110" onClick={onClick}>{text}</button>;
}

export default Button;
