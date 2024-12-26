import { PageWrapper } from '../../components/base';
import {
  BalanceHistoryCard,
  CreditCard,
  QuickTransferCard,
  TransactionCard,
  WeeklyTransactionsChart,
} from '../../components/ui';
import ExpenceChart from '../../components/ui/ExpenceChart';
import { users } from '../../data';

export const Dashboard = () => {
  return (
    <PageWrapper>
      {/* col-1 */}
      <div className=" flex w-full justify-between">
        {/* cards */}
        <div className="flex flex-col w-[65%] gap-3">
          <div className=" flex items-center justify-between w-full">
            <h3 className=" text-base xl:text-lg font-semibold text-text-primary">
              My Cards
            </h3>
            <button className=" text-sm xl:text-base font-semibold text-text-primary">
              See All
            </button>
          </div>

          <div className=" flex items-center justify-between w-full gap-6">
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778000000001234"
            />
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778000000001234"
              isLight={true}
            />
          </div>
        </div>

        {/* recent transaction */}
        <div className="flex flex-col w-[32%] gap-3">
          <h3 className=" text-base xl:text-lg font-semibold text-text-primary">
            Recent Transaction
          </h3>
          <TransactionCard />
        </div>
      </div>

      {/* col-2 */}
      <div className=" flex items-center w-full justify-between">
        {/* weekly activity */}
        <div className="flex flex-col w-[65%] gap-3">
          <h3 className=" text-base xl:text-lg font-semibold text-text-primary">
            Weekly Activity
          </h3>
          <WeeklyTransactionsChart />
        </div>
        {/* expense */}
        <div className="flex flex-col w-[32%] gap-3">
          <h3 className=" text-base xl:text-lg font-semibold text-text-primary">
            Expense Statistics
          </h3>
          <ExpenceChart />
        </div>
      </div>
      {/* col-3 */}
      <div className=" flex items-center w-full justify-between">
        {/* quick transfer */}
        <div className="flex flex-col w-[42%]  gap-3">
          <h3 className=" text-base xl:text-lg font-semibold text-text-primary">
            Quick Transfer
          </h3>
          <QuickTransferCard users={users} />
        </div>
        {/* balance history */}
        <div className="flex flex-col w-[55%] gap-3">
          <h3 className=" text-base xl:text-lg font-semibold text-text-primary">
            Balance History
          </h3>
          <BalanceHistoryCard />
        </div>
      </div>
    </PageWrapper>
  );
};
