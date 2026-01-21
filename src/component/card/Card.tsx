import Button from '../button/Button';
import Toogle from '../toogle/Toogle';
import '../../app/globals.css';
import Image from 'next/image';
import { symbol } from '@/assets';
interface CardProps {
  name: string;
  price: string;
  bill: 'TEXT' | 'YEAR';
  billString?: string;
  featureLists: string[];
  position: 'LEFT' | 'CENTER' | 'RIGHT';
  btnLabel: string;
}

const Card = ({
  name,
  price,
  bill,
  billString,
  featureLists,
  position,
  btnLabel,
}: CardProps) => {
  const cardStyle = () => {
    if (position === 'CENTER') {
      return 'h-[555px] rounded-2xl drop-shadow-[0_0_100px_rgba(0,0,0,0.3)]';
    }
    if (position === 'LEFT') {
      return 'h-[500px] rounded-l-2xl border-border border-r-0 border-[1px]';
    }
    if (position === 'RIGHT') {
      return 'h-[500px] rounded-r-2xl border-border border-l-0   border-[1px]';
    }
  };
  return (
    <div
      className={`w-[375px] bg-white ${cardStyle()} flex flex-col justify-between`}
    >
      <div className="p-6">
        <h6 className="text-[36px] font-bold">{name}</h6>
        <p className="font-regular text-[16px]">{price}</p>
      </div>

      <div className="border-natural w-full border-t-[1px]"></div>
      <div className="px-6 py-2">
        {bill === 'TEXT' ? (
          <p className="text-grey font-regular text-[14px]">{billString}</p>
        ) : (
          <Toogle label="Billed Yearly" />
        )}
      </div>
      <div className="border-natural w-full border-t-[1px]"></div>

      <div className="px-6 py-4">
        {featureLists.map((feature, index) => (
          <div key={index} className="mb-3 flex items-center gap-3">
            <Image src={symbol} alt="check-icon" />
            <p className="font-regular text-[14px]">{feature}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto mb-6 flex w-full flex-col items-center justify-center px-6">
        <Button
          label={btnLabel}
          variant={position === 'CENTER' ? 'solid' : 'outline'}
          styling="w-full"
        />
        {position === 'CENTER' && (
          <p className="mt-4 text-[14px]">
            or{' '}
            <a href="#" className="font-bold underline">
              Contact Sales
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
