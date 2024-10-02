import { CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import { FaPenToSquare } from "react-icons/fa6";
import "./ContactForm.css";
import { PiTelegramLogo } from "react-icons/pi";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending message...");

    emailjs
      .sendForm("service_c0zm213", "template_nhaqj9y", form.current, {
        publicKey: "bK8RydNwVnirPGhf4",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully!", {
            id: toastId,
            duration: 3000,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="container mx-auto mt-10 mb-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-40 w-full">
        <div className="w-full lg:w-1/2 rounded-lg px-3 py-5 sm:px-5 sm:py-10 md:py-20 md:px-16 bg-[#FFFFFF]">
          <h1 className="text-4xl font-oswald font-bold text-[#2C2C2C] mb-5">
            Contact Form
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex items-center  navlink-hover-effect   mt-6 pb-1">
              <GoPerson className="text-2xl text-[#808080]" />
              <input
                className="w-full pl-3 py-3 outline-none font-poppins text-base text-[#808080]"
                type="text"
                name="from_name"
                id=""
                placeholder="Name"
              />
            </div>
            <div className="flex items-center  navlink-hover-effect  mt-6 pb-1">
              <IoIosMail className="text-2xl text-[#808080]" />
              <input
                className="w-full pl-3 py-3 outline-none font-poppins text-base text-[#808080]"
                type="text"
                name="from_email"
                id=""
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center  navlink-hover-effect  mt-6 pb-7">
              <FaPenToSquare className="text-2xl text-[#808080]" />
              <input
                className="w-full pl-3 py-3 outline-none font-poppins text-base text-[#808080]"
                type="text"
                name="message"
                id=""
                placeholder="How Can we help you? Feel free to get in touch"
              />
            </div>
            <div className="flex items-center gap-3 mt-6 mb-2">
              <label className="custom-checkbox-container">
                <input type="checkbox" className="hidden" />
                <span className="custom-checkbox"></span>
              </label>
              <p
                className="text-sm font-oswald font-normal text-[#808080]"
                style={{ letterSpacing: "0.050em" }}
              >
                I agree that my data is{" "}
                <span className="navlink-hover-effect  ">
                  collected and stored.
                </span>
              </p>
            </div>
            <button
              className="mt-10 bg-[#EC3D08] hover:bg-[#E21010] text-white py-4 px-6 text-base font-poppins uppercase flex items-center gap-3"
              style={{ letterSpacing: "2px" }}
            >
              <PiTelegramLogo className="text-xl" />
              Get In Touch
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <h3
            className="font-poppins text-[#2C2C2C] text-start font-semibold text-base uppercase mb-5"
            style={{ letterSpacing: "0.050em" }}
          >
            Contact Us
          </h3>
          <h1
            className="font-lora text-xl semi-sm:text-2xl md:text-3xl lg:text-4xl text-start   lg:w-[360px]   uppercase text-[#2C2C2C] font-bold mb-5"
            style={{ lineHeight: "1.2", letterSpacing: "0.025em" }}
          >
            Have questions? Get in touch!
          </h1>
          <p
            className="font-poppins text-[#808080] text-start font-semibold text-base lg:w-[230px] mb-5"
            style={{ lineHeight: "1.5", letterSpacing: "0.025em" }}
          >
            785 15h Street, Office 478 Berlin, De 81566
          </p>
          <p
            className="font-poppins text-[#808080] text-start font-semibold text-base lg:w-[230px] mb-6"
            style={{ lineHeight: "1.5", letterSpacing: "0.025em" }}
          >
            info@email.com
          </p>
          <h3 className="font-poppins text-[#2C2C2C] text-start font-semibold text-base uppercase mb-7">
            +1 840 841 25 69
          </h3>
          <div className="flex items-center justify-start gap-2 mt-4 ml-0 md:ml-5 lg:ml-0">
            <div className="border max-w-full px-3 py-3 text-[#808080] hover:text-[#40AFF3]  cursor-pointer">
              <FaFacebookF className=" text-xl" />
            </div>
            <div className="border max-w-full px-3 py-3 text-[#808080] hover:text-[#40AFF3] cursor-pointer">
              <FaInstagram className=" text-xl" />
            </div>
            <div className="border max-w-full px-3 py-3 text-[#808080] hover:text-[#40AFF3] cursor-pointer">
              <FaPinterestP className=" text-xl" />
            </div>
            <div className="border max-w-full px-3 py-3 text-[#808080] hover:text-[#40AFF3] cursor-pointer">
              <CiTwitter className=" text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;