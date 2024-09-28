import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import ProductCard from "./ProductCard";

function Products() {
    const {
        isLoading,
        error,
        data: products,
    } = useQuery({ queryKey: ["allProducts"], queryFn: getProducts });
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </ul>
        </>
    );
}

export default Products;
