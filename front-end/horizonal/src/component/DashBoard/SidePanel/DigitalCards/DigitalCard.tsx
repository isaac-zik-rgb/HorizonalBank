import React from "react";
import BankList from "./BankList";
import AddBankButton from "./AddBankButton";
import CardImage from "./CardImage";
import { formateDate } from "../../AppUtils";

interface DigitalCardProps {
  cardNumber: string;
  cardHolderName: string;
  cvv: string;
  expiration: string;
}

const DigitalCard: React.FC<DigitalCardProps> = ({
  cardNumber,
  cardHolderName,
  cvv,
  expiration,
}) => {
  const expiryDate = formateDate(expiration);
  return (
    <section className="flex flex-col font-semibold max-w-[392px]">
      <div className="flex flex-col px-6 w-full">
        <header className="flex justify-between items-center w-full">
          <BankList />
          <AddBankButton />
        </header>
        <CardImage
          cardNumber={cardNumber}
          cardHolderName={cardHolderName}
          cvv={cvv}
          expiration={expiryDate}
        />
      </div>
    </section>
  );
};

export default DigitalCard;
