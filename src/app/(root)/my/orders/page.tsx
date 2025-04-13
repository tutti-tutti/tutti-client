import { ORDER_CONSTANT, PATH_NAME, ROUTER_PATH } from '@/constants';
import { fetchOrderHistory } from '@/services';
import { MypageHeader, OrderHistoryClientWrapper, NoData } from '@/components';

export async function generateMetadata() {
  return {
    title: PATH_NAME.ORDER_HISTORY,
  };
}

const OrderHistoryPage = async () => {
  const initialOrderHistory = await fetchOrderHistory();

  const linkItems = [
    { label: PATH_NAME.HOME, href: ROUTER_PATH.HOME },
    { label: PATH_NAME.MY_PAGE, href: '', isCurrent: true },
    {
      label: PATH_NAME.ORDER_HISTORY,
      href: ROUTER_PATH.ORDERS_HISTORY,
      isCurrent: true,
    },
  ];

  return (
    <div className="gap-4xl mx-auto flex flex-col">
      <section className="gap-lg flex flex-col">
        <MypageHeader
          linkItems={linkItems}
          pageName={PATH_NAME.ORDER_HISTORY}
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
