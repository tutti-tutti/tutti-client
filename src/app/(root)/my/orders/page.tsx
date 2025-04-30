import { ORDER_CONSTANT, PATH } from '@/constants';
import { fetchOrderHistory } from '@/services';
import { MypageHeader, OrderHistoryClientWrapper, NoData } from '@/components';

export async function generateMetadata() {
  return {
    title: PATH.ORDER_HISTORY.name,
  };
}

const OrderHistoryPage = async () => {
  const initialOrderHistory = await fetchOrderHistory();

  const linkItems = [
    { label: PATH.HOME.name, href: PATH.HOME.url },
    { label: PATH.MY_PAGE.name, href: '', isCurrent: true },
    {
      label: PATH.ORDER_HISTORY.name,
      href: PATH.ORDER_HISTORY.url,
      isCurrent: true,
    },
  ];

  return (
    <div className="gap-4xl mx-auto flex flex-col">
      <section className="gap-lg flex flex-col">
        <MypageHeader
          linkItems={linkItems}
          pageName={PATH.ORDER_HISTORY.name}
        />

        {initialOrderHistory.content.length === 0 ? (
          <NoData>
            <p>{ORDER_CONSTANT.MESSAGE.NO_DATA_ORDERS}</p>
          </NoData>
        ) : (
          <OrderHistoryClientWrapper
            initialOrderHistory={initialOrderHistory}
          />
        )}
      </section>
    </div>
  );
};

export default OrderHistoryPage;
