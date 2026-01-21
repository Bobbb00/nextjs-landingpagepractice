import '@/app/globals.css';
import { david, maya, sarah } from '@/assets';
import TestimonialCard from '@/component/testimonial/TestimonialCard';

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="mt-[100px] flex scroll-mt-28 flex-col items-center justify-center"
    >
      <h2 className="text-[35px] font-bold">What Our Customer Say</h2>
      <h3 className="font-regular text-[28px]">
        Trusted By <span className="text-primary font-bold">500+</span>{' '}
        businesses who already run smarter with FlowSync
      </h3>
      <div className="mt-[50px] flex items-center justify-center gap-[100px]">
        <TestimonialCard
          imageSrc={sarah.src}
          name="Sarah L."
          position="Operations Manager"
          testimonialText="“FlowSync saved us countless hours every week. Setting up automation was so smooth, even for a non-tech person like me.”"
        />
        <TestimonialCard
          imageSrc={david.src}
          name="David M."
          position="Product Lead"
          testimonialText="“We used to juggle multiple tools, now everything runs seamlessly. Our team productivity went up 40%.”"
        />
        <TestimonialCard
          imageSrc={maya.src}
          name="Maya P."
          position="Startup Founder"
          testimonialText="“I love how easy it is to connect apps and let them work in the background. It feels like having an extra teammate.” "
        />
      </div>
    </section>
  );
};

export default Testimonial;
