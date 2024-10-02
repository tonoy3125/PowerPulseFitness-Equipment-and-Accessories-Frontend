import CompanyOverview from "@/components/CompanyOverview/CompanyOverview";
import ContactForm from "@/components/ContactForm/ContactForm";
import Team from "@/components/TeamMember/TeamMember";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

const AboutUs = () => {
  return (
    <div>
      <CompanyOverview />
      <Team />
      <WhatWeDo />
      <ContactForm />
    </div>
  );
};

export default AboutUs;
