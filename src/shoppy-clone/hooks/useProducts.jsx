import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { getProducts as fbGetProducts, addNewProduct } from "../api/firebase";

// 이 커스텀 훅을 사용하는 이유는 새로은 product가 업데이트 되었을 때 바로바로 useQuery의 캐시를 업데이트 하기 위함!
// 여기 저기서 queryKey를 직접 사용하는 것은 실수의 위험이 많으므로 이렇게 하는 것이 좋다!

const QUERY_KEY = ["products"];

export default function useProducts() {
    const queryClient = useQueryClient();
    const productsQuery = useQuery({
        queryKey: QUERY_KEY,
        queryFn: fbGetProducts,
        staleTime: 1000 * 60,
    });
    const addProduct = useMutation({
        mutationFn: ({ product, url }) => addNewProduct(product, url),
        onSuccess: () => queryClient.invalidateQueries(QUERY_KEY),
    });

    return { productsQuery, addProduct };
    // 유저는 이 훅을 통해서 사용할 수 있도록 한다!
}
