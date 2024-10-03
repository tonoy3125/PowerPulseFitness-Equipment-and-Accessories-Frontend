import CompanyOverview from "@/components/CompanyOverview/CompanyOverview";
import ContactForm from "@/components/ContactForm/ContactForm";
import Team from "@/components/TeamMember/TeamMember";

import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import Widget from "../Widget/Widget";
import TestimonialSlider from "@/components/Testimonial/Testimonial";

const AboutUs = () => {
  return (
    <div>
      <CompanyOverview />
      <Team />
      <TestimonialSlider />
      <Widget />
      <WhatWeDo />
      <ContactForm />
    </div>
  );
};

export default AboutUs;
