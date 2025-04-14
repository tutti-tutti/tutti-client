import { axiosInstance } from '@/lib';
import { ORDERS_ENDPOINTS } from '@/constants';
import type {
  OrderProductItem,
  OrderCheckoutRequestAPISchema,
  OrderCheckoutResponseAPISchema,
  OrderDetailResponseAPISchema,
  OrderHistoryListResponseAPISchema,
} from '@/types';

export const checkoutOrder = async (
  orderProductItem: OrderProductItem[],
): Promise<OrderCheckoutResponseAPISchema> => {
  const payload: OrderCheckoutRequestAPISchema = {
    orderItems: orderProductItem,
  };
  const response = await axiosInstance.post(ORDERS_ENDPOINTS.CHECKOUT, payload);

  return response.data;
};

export const fetchOrderHistory =
  async (): Promise<OrderHistoryListResponseAPISchema> => {
    const response = await axiosInstance.get(ORDERS_ENDPOINTS.LIST);

    return response.data;
  };

export const fetchOrderDetail = async (
  orderId: string,
): Promise<OrderDetailResponseAPISchema> => {
  const response = await axiosInstance.get(ORDERS_ENDPOINTS.DETAIL(orderId));

  return response.data;
};
