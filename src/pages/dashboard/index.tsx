import { Link } from 'react-router-dom';
import { PageWrapper } from '../../components/base';
import { Suspense, lazy } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { users } from '../../data';

const BalanceHistoryCard = lazy(
  () => import('../../components/ui/BalanceHistoryCard')
);
const CreditCard = lazy(() => import('../../components/ui/CreditCard'));
const QuickTransferCard = lazy(
  () => import('../../components/ui/QuickTransferCard')
);
const TransactionCard = lazy(
  () => import('../../components/ui/TransactionCard')
);
const WeeklyTransactionsChart = lazy(
  () => import('../../components/ui/WeeklyTransactionChart')
);
const ExpenceChart = lazy(() => import('../../components/ui/ExpenceChart'));

export const Dashboard = () => {
  return (
    <PageWrapper>
      {/* col-1 */}
      <div className="flex w-full justify-between flex-col lg:flex-row gap-5 lg:gap-0">
        {/* cards */}
        <div className="flex flex-col w-full lg:w-[65%] gap-3">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-base xl:text-lg font-semibold text-text-primary">
              My Cards
            </h3>
            <Link to={'/creditCards'}>
              <button className="text-sm xl:text-base font-semibold text-text-primary">
                See All
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-between w-full gap-6 overflow-x-auto">
            <Suspense
              fallback={
                <Skeleton
                  height={200}
                  borderRadius={24}
                  baseColor="#e9ecef"
                  highlightColor="#adb5bd"
                  width={300}
                />
              }
            >
              <CreditCard
                balance={5756}
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778000000001234"
              />
            </Suspense>
            <Suspense
              fallback={
                <Skeleton
                  height={200}
                  borderRadius={24}
                  baseColor="#e9ecef"
                  highlightColor="#adb5bd"
                  width={300}
                />
              }
            >
              <CreditCard
                balance={5756}
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778000000001234"
                isLight={true}
              />
            </Suspense>
          </div>
        </div>

        {/* recent transaction */}
        <div className="flex flex-col w-full lg:w-[32%] gap-3">
          <h3 className="text-base xl:text-lg font-semibold text-text-primary">
            Recent Transaction
          </h3>
          <Suspense
            fallback={
              <Skeleton
                height={180}
                baseColor="#e9ecef"
                highlightColor="#adb5bd"
                borderRadius={24}
              />
            }
          >
            <TransactionCard />
          </Suspense>
        </div>
      </div>

      {/* col-2 */}
      <div className="flex w-full justify-between flex-col lg:flex-row gap-5 lg:gap-0">
        {/* weekly activity */}
        <div className="flex flex-col w-full lg:w-[65%] gap-3">
          <h3 className="text-base xl:text-lg font-semibold text-text-primary">
            Weekly Activity
          </h3>
          <Suspense
            fallback={
              <Skeleton
                height={300}
                baseColor="#e9ecef"
                highlightColor="#adb5bd"
                borderRadius={24}
              />
            }
          >
            <WeeklyTransactionsChart />
          </Suspense>
        </div>

        {/* expense */}
        <div className="flex flex-col w-full lg:w-[32%] gap-3">
          <h3 className="text-base xl:text-lg font-semibold text-text-primary">
            Expense Statistics
          </h3>
          <Suspense
            fallback={
              <Skeleton
                height={300}
                baseColor="#e9ecef"
                highlightColor="#adb5bd"
                borderRadius={24}
              />
            }
          >
            <ExpenceChart />
          </Suspense>
        </div>
      </div>

      {/* col-3 */}
      <div className="flex w-full justify-between flex-col lg:flex-row gap-5 lg:gap-0">
        {/* quick transfer */}
        <div className="flex flex-col w-full lg:w-[42%] gap-3">
          <h3 className="text-base xl:text-lg font-semibold text-text-primary">
            Quick Transfer
          </h3>
          <Suspense
            fallback={
              <Skeleton
                height={300}
                baseColor="#e9ecef"
                highlightColor="#adb5bd"
                borderRadius={24}
              />
            }
          >
            <QuickTransferCard users={users} />
          </Suspense>
        </div>

        {/* balance history */}
        <div className="flex flex-col w-full lg:w-[55%] gap-3">
          <h3 className="text-base xl:text-lg font-semibold text-text-primary">
            Balance History
          </h3>
          <Suspense
            fallback={
              <Skeleton
                height={300}
                baseColor="#e9ecef"
                highlightColor="#adb5bd"
                borderRadius={24}
              />
            }
          >
            <BalanceHistoryCard />
          </Suspense>
        </div>
      </div>
    </PageWrapper>
  );
};
