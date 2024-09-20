import React from "react";

function User({ user: { photoURL, displayName } }) {
    return (
        <div className="flex items-center shrink-0">
            <img
                className="w-10 h-10 rounded-full mr-2"
                src={photoURL}
                alt={displayName}
            />
            <span className="hidden md:block">{displayName}</span>
        </div>
    );
}
// hidden이지만 md부터는 block요소로 나타나도 됨
export default User;
