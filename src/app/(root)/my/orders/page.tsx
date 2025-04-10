import { fetchOrderHistoryList } from '@/services';
import { MypageHeader, OrderHistoryClientWrapper, NoData } from '@/components';

const pageTitle = '주문 내역';

export async function generateMetadata() {
  return {
    title: pageTitle,
  };
}

const OrderHistoryPage = async () => {
  const initialOrderHistoryList = await fetchOrderHistoryList();

  const linkItems = [
    { label: '홈', href: '/' },
    { label: '마이페이지', href: '', isCurrent: true },
    { label: '주문내역', href: '/orders', isCurrent: true },
  ];

  return (
    <div className="gap-4xl mx-auto flex flex-col">
      <section className="gap-lg flex flex-col">
        <MypageHeader linkItems={linkItems} pageName={pageTitle} />
        {!initialOrderHistoryList || initialOrderHistoryList.length === 0 ? (
          <NoData>
            <p>아직 주문하신 내역이 없습니다.</p>
          </NoData>
        ) : (
          <OrderHistoryClientWrapper
            initialOrderHistoryList={initialOrderHistoryList}
          />
        )}
      </section>
    </div>
  );
};

export default OrderHistoryPage;
