import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { getCart, addOrUpdateToCart, removeFromCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

const QUERY_KEY = (uid) => ["carts", uid || ""];
// 다른 유저가 로그인 하는 경우를 대비해서 uid도 쿼리키에 추가한다.

export default function useProducts() {
    const { uid } = useAuthContext();
    const queryClient = useQueryClient();
    const cartQuery = useQuery({
        queryKey: QUERY_KEY(uid),
        queryFn: () => getCart(uid),
        staleTime: 1000 * 60,
        enabled: !!uid, // uid가 없다면 해당 쿼리가 실행되지 않도록 한다.
    });
    const addOrUpdateItem = useMutation({
        mutationFn: (product) => addOrUpdateToCart(uid, product),
        onSuccess: () => queryClient.invalidateQueries(QUERY_KEY(uid)),
    });
    const removeItem = useMutation({
        mutationFn: (id) => removeFromCart(uid, id),
        onSuccess: () => queryClient.invalidateQueries(QUERY_KEY(uid)),
    });

    return { cartQuery, addOrUpdateItem, removeItem };
}
