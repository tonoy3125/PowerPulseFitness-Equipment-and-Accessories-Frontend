import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./Accordion.css";
import { TAccordionDemoProps, TUserPayload } from "@/types";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useCreateProductReviewMutation } from "@/redux/features/productReview/productReviewApi";

export function AccordionDemo({
  longDescription,
  name,
  id,
}: TAccordionDemoProps) {
  const [rating, setRating] = useState(0);
  const user = useAppSelector(selectCurrentUser) as TUserPayload | null; // Get current user's ID
  const userId = user?.id as string;
  const [createProductReview] = useCreateProductReviewMutation();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // Handles rating click and sets the new rating
  const handleRatingClick = (index: number) => {
    const newRating = index + 1;
    setRating(newRating);
    setValue("rating", newRating);
  };

  const onsubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Submitting Review...");
    // console.log("Form data before submission:", data);
    // console.log("Current Rating:", rating);

    try {
      const reviewInfo = {
        productId: id,
        userId: userId,
        name: data?.name,
        email: data?.email,
        rating: data.rating,
        review: data?.review,
      };
      // console.log("Review Data Is ", reviewInfo);
      const res = await createProductReview(reviewInfo).unwrap();
      // console.log("Res Review Data Is", res);
      toast.success(res.message || "Review Created Successfully!!", {
        id: toastId,
        duration: 3000,
      });
      reset();
      setRating(0);
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Description</AccordionTrigger>
        <AccordionContent
          style={{ lineHeight: "1.6", letterSpacing: "0.05em" }}
        >
          {longDescription}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Reviews (0)</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-0  md:justify-between">
            <div className="flex-1">
              <h1 className="font-oswald font-medium text-xl text-[#2C2C2C] uppercase">
                Reviews
              </h1>
              <p className="text-[#7C7C94] font-oswald text-lg mt-4">
                There are no reviews yet.
              </p>
            </div>
            <div className="flex-1">
              <h1 className="font-oswald font-medium text-lg semi-sm:text-xl text-[#2C2C2C] uppercase">
                Be the first to review "{name}"'
              </h1>
              <p className="text-[#7C7C94] font-oswald text-base semi-sm:text-lg mt-4 mb-4">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form onSubmit={handleSubmit(onsubmit)}>
                <div>
                  <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                    Name *
                  </h2>
                  <div className="pt-1">
                    <input
                      className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                      type="text"
                      id=""
                      {...register("name", {
                        required: "Name is Required",
                      })}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm font-poppins font-medium pt-2">
                      {String(errors.name.message)}
                    </p>
                  )}
                </div>
                <div className="mt-6">
                  <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                    Email *
                  </h2>
                  <div className="pt-1">
                    <input
                      className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                      type="text"
                      id=""
                      {...register("email", {
                        required: "Email is Required",
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm font-poppins font-medium pt-2">
                      {String(errors.email.message)}
                    </p>
                  )}
                </div>
                <div className="mt-6">
                  <h2 className="font-oswald text-lg font-normal text-[#2C2C2C]">
                    Your rating *
                  </h2>
                  <div className="flex justify-start pt-5">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        onClick={() => handleRatingClick(index)}
                        {...register("rating", {
                          required: "Rating is Required",
                        })}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={index < rating ? "#EFA505" : "none"}
                        stroke="#EFA505"
                        className="w-5 h-5"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  {errors.rating && (
                    <p className="text-red-500 text-sm font-poppins font-medium pt-2">
                      {String(errors.rating.message)}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="font-oswald text-lg font-normal text-[#2C2C2C]"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("review", { required: "Review is required" })}
                    className="w-full border-b py-3 font-oswald border-b-[#C6C6C6] bg-[#f2f6f6] outline-none"
                  ></textarea>
                  {errors.review && (
                    <p className="text-red-500 text-sm font-poppins font-medium pt-2">
                      {String(errors.review.message)}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-3 mb-2">
                  <label className="custom-checkbox-container">
                    <input
                      type="checkbox"
                      {...register("agree", {
                        required: "You must agree to the terms",
                      })}
                      className="hidden"
                    />
                    <span className="custom-checkbox"></span>
                  </label>
                  <p className="text-sm font-oswald font-normal text-[#7C7C94]">
                    I agree that my submitted data is being collected and
                    stored.
                  </p>
                </div>
                {errors.agree && (
                  <p className="text-red-500 text-sm font-poppins font-medium pt-2">
                    {String(errors.agree.message)}
                  </p>
                )}
                <input
                  className="bg-[#EC3D08] px-6 py-3 text-white rounded-md font-oswald text-base mt-6 mb-10 cursor-pointer"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
