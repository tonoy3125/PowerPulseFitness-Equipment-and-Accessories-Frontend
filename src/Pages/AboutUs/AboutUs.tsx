import CompanyOverview from "@/components/CompanyOverview/CompanyOverview";
import ContactForm from "@/components/ContactForm/ContactForm";
import Team from "@/components/TeamMember/TeamMember";
import Testimonial from "@/components/Testimonial/Testimonial";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

const AboutUs = () => {
  return (
    <div>
      <CompanyOverview />
      <Team />
      <Testimonial/>
      <WhatWeDo />
      <ContactForm />
    </div>
  );
};

export default AboutUs;
