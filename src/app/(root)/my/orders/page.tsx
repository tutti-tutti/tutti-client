import { fetchOrderHistoryList } from '@/services';
import { MypageHeader, OrderHistoryListGroup } from '@/components';

export async function generateMetadata() {
  return {
    title: '주문 내역',
  };
}

const OrderHistoryPage = async () => {
  const orderHistoryList = await fetchOrderHistoryList();

  return (
    <div className="gap-4xl mx-auto flex flex-col">
      <section className="gap-lg flex flex-col">
        <MypageHeader>주문 내역</MypageHeader>
        <OrderHistoryListGroup orderHistoryList={orderHistoryList} />
      </section>
    </div>
  );
};

export default OrderHistoryPage;
