import { axiosInstance } from '@/lib';
import { ORDERS_ENDPOINTS } from '@/constants';
import type {
  CheckoutRequestItem,
  OrderCheckoutRequestAPISchema,
  OrderCheckoutResponseAPISchema,
  OrderDetailResponseAPISchema,
  OrderHistoryListResponseAPISchema,
} from '@/types';

export const checkoutOrder = async (
  checkoutRequestItems: CheckoutRequestItem[],
): Promise<OrderCheckoutResponseAPISchema> => {
  const payload: OrderCheckoutRequestAPISchema = {
    orderItems: checkoutRequestItems,
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
