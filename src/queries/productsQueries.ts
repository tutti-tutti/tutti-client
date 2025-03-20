import { queryOptions } from '@tanstack/react-query';

import { Product } from "@/types";
import { fetchProducts, fetchRecommededProducts, fetchProductById } from "@/services";

export const getProductsQueryOptions = queryOptions({
    queryKey: ['products', 'list'],
    queryFn: async () => {
        const res = await fetchProducts();
        
        return res;
    }
});

export const getRecommededProductsQueryOptions = queryOptions({
    queryKey: ['products', 'recommeded-list'],
    queryFn: async () => {
        const res = await fetchRecommededProducts();
        
        return res;
    }
});

export const getProductByIdQueryOptions = (productId: string) => queryOptions({
    queryKey: ['products', productId],
    queryFn: async () => {
        const res : Product = await fetchProductById(productId);

        return res;
    }
});
