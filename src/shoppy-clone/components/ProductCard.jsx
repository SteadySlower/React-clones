import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({
    product, // 이렇게 하면 풀어서 가져온 property 외에도 쓸 수 있다.
    product: { id, image, title, category, price },
}) {
    const navigate = useNavigate();
    return (
        <li
            onClick={() => {
                navigate(`/shoppy/products/${id}`, { state: { product } });
            }}
            className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
        >
            <img className="w-full" src={image} alt={title} />
            <div className="mt-2  px-2 text-lg flex justify-between items-center">
                <h3 className="truncate">{title}</h3>
                <p>{`₩${price}`}</p>
            </div>
            <p className="mb-2 px-2 text-gray-600">{category}</p>
        </li>
    );
}

export default ProductCard;
