import { PageWrapper } from '../../components/base';
import { CreditCard } from '../../components/ui';

export const Dashboard = () => {
  return (
    <PageWrapper>
      {/* col-1 */}
      <div className=" flex items-center w-full">
        {/* cards */}
        <div className="flex flex-col w-[60%] gap-3">
          <div className=" flex items-center justify-between w-full">
            <h3 className=" text-base xl:text-lg font-semibold text-text-primary">
              My Cards
            </h3>
            <button className=" text-sm xl:text-base font-semibold text-text-primary">
              See All
            </button>
          </div>

          <div className=" flex items-center justify-between w-full gap-7">
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
            />
          </div>
        </div>
        {/* recent transaction */}
        <div></div>
      </div>

      {/* col-2 */}
      <div>dash</div>
      {/* col-3 */}
      <div>dash</div>
    </PageWrapper>
  );
};
