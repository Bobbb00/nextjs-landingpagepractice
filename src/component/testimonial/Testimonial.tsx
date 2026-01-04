import '@/app/globals.css';
import { avatar } from '@/assets';
import Image from 'next/image';

interface TestimonialProps {
  imageSrc?: string;
  name: string;
  position: string;
  testimonialText: string;
}
const Testimonial = ({
  imageSrc,
  name,
  position,
  testimonialText,
}: TestimonialProps) => {
  return (
    <div className="h-80 w-[345px] p-6  flex flex-col justify-between items-center drop-shadow-[1px_5px_10px_rgba(0,0,0,0.25)] rounded-lg bg-white">
      <div>
        <Image
          src={imageSrc || avatar}
          height={124}
          width={124}
          className="rounded-full"
          alt="avatar-image"
        />
        <h6 className="text-[16px] font-bold mt-2.5 text-center">
          {name}
        </h6>
        <p className="text-[14px] font-regular mt-2 text-center">
          {position}
        </p>
      </div>
      <p className="text-[14px] font-regular text-center">
        {testimonialText}
      </p>
    </div>
  );
};

export default Testimonial;
