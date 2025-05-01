import { ORDER_CONSTANT, PATH } from '@/constants';
import { fetchOrderHistory } from '@/services';
import { MypageHeader, OrderHistoryClientWrapper, NoData } from '@/components';

const { ORDER_HISTORY, HOME, MY_PAGE } = PATH;

export async function generateMetadata() {
  return {
    title: ORDER_HISTORY.name,
  };
}

const OrderHistoryPage = async () => {
  const initialOrderHistory = await fetchOrderHistory();

  const linkItems = [
    { label: HOME.name, href: HOME.path },
    { label: MY_PAGE.name, href: '', isCurrent: true },
    {
      label: ORDER_HISTORY.name,
      href: ORDER_HISTORY.path,
      isCurrent: true,
    },
  ];

  return (
    <div className="gap-4xl mx-auto flex flex-col">
      <section className="gap-lg flex flex-col">
        <MypageHeader linkItems={linkItems} pageName={ORDER_HISTORY.name} />

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
