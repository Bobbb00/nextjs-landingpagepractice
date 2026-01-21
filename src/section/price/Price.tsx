'use client';
import '@/app/globals.css';
import Card from '@/component/card/Card';

const Price = () => {
  return (
    <section
      id="price"
      className="mt-[100px] flex scroll-mt-28 flex-col items-center justify-center py-[100px]"
    >
      <h2 className="text-[36px] font-bold">Our Plans & Services</h2>
      <h3 className="font-regular text-[28px]">
        Pick the tools that fit your business best
      </h3>

      <div className="mt-[50px] flex items-center justify-center">
        <Card
          name="Free"
          price="$0"
          bill="TEXT"
          billString="Free For Everyone"
          featureLists={[
            'All Free Features +',
            'Connect 100+ apps',
            'Advanced Automations',
            'Premium Support',
          ]}
          position="LEFT"
          btnLabel="Get Started"
        />

        <Card
          name="Pro"
          price="$49 per user/month"
          bill="YEAR"
          billString="Billed Yearly"
          featureLists={[
            'All Free Features +',
            'Connect 100+ apps',
            'Advanced Automations',
            'Premium Support',
          ]}
          position="CENTER"
          btnLabel="Get Started"
        />

        <Card
          name="Enterprise"
          price="Contact Us"
          bill="TEXT"
          billString="Custom Solutions for your team"
          featureLists={[
            'All Free Features +',
            'Connect 100+ apps',
            'Advanced Automations',
            'Premium Support',
          ]}
          position="RIGHT"
          btnLabel="Request Trial"
        />
      </div>
    </section>
  );
};

export default Price;
