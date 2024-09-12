import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./Accordion.css";

export function AccordionDemo({ description, name }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Description</AccordionTrigger>
        <AccordionContent
          style={{ lineHeight: "1.6", letterSpacing: "0.05em" }}
        >
          {description}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Reviews (0)</AccordionTrigger>
        <AccordionContent>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="font-oswald font-medium text-xl text-[#2C2C2C] uppercase">
                Reviews
              </h1>
              <p className="text-[#7C7C94] font-oswald text-lg mt-4">
                There are no reviews yet.
              </p>
            </div>
            <div className="flex-1">
              <h1 className="font-oswald font-medium text-xl text-[#2C2C2C] uppercase">
                Be the first to review "{name}"'
              </h1>
              <p className="text-[#7C7C94] font-oswald text-lg mt-4 mb-4">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form>
                <div>
                  <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                    Name *
                  </h2>
                  <div className="pt-1">
                    <input
                      className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                      type="text"
                      name="name"
                      id=""
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                    Email *
                  </h2>
                  <div className="pt-1">
                    <input
                      className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                      type="text"
                      name="email"
                      id=""
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                    Your rating *
                  </h2>
                  <div className="flex justify-start pt-5">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#EFA505"
                        className="w-5 h-5"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    for="message"
                    className="font-oswald text-lg font-normal text-[#2C2C2C]"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                  ></textarea>
                </div>
                <div className="flex items-center gap-2">
                  <label className="custom-checkbox-container">
                    <input type="checkbox" className="hidden" />
                    <span className="custom-checkbox"></span>
                  </label>
                  <p className="text-sm font-oswald font-normal text-[#7C7C94]">
                    I agree that my submitted data is being collected and
                    stored.
                  </p>
                </div>
                <input className="bg-[#EC3D08] px-6 py-3 text-white rounded-md font-oswald text-base mt-6 mb-10" type="button" value="Submit" />
              </form>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
