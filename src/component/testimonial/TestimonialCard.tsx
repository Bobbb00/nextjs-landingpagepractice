import '@/app/globals.css';
import { avatar } from '@/assets';
import Image from 'next/image';

interface TestimonialProps {
  imageSrc?: string;
  name: string;
  position: string;
  testimonialText: string;
}
const TestimonialCard = ({
  imageSrc,
  name,
  position,
  testimonialText,
}: TestimonialProps) => {
  return (
    <div className="flex h-80 w-[345px] flex-col items-center justify-between rounded-lg bg-white p-6 drop-shadow-[1px_5px_10px_rgba(0,0,0,0.25)]">
      <div>
        <Image
          src={imageSrc || avatar}
          height={124}
          width={124}
          className="rounded-full"
          alt="avatar-image"
        />
        <h6 className="mt-2.5 text-center text-[16px] font-bold">{name}</h6>
        <p className="font-regular mt-2.5 text-center text-[14px]">
          {position}
        </p>
      </div>
      <p className="font-regular mt-[24px] text-center text-[14px]">
        {testimonialText}
      </p>
    </div>
  );
};

export default TestimonialCard;
