import React from "react";
import { useParams } from "react-router-dom";

function Videos(props) {
    const { keyword } = useParams();
    return (
        <div>
            {keyword ? `Videos of query ${keyword}` : "Videos 🔥"}
        </div>
    );
}

export default Videos;
