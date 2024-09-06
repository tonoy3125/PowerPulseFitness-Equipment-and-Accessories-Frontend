import { useForgetPasswordMutation } from "@/redux/features/auth/authApi";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [forgetPassword] = useForgetPasswordMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Sending Email...");
    try {
      const userInfo = {
        email: data?.email,
      };
      await forgetPassword(userInfo).unwrap();
      toast.success(
        "We've sent you an email with a link to update your password.",
        { id: toastId, duration: 2000 }
      );
      navigate("/login");
    } catch (error) {
      toast.error("Something Went Wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="pt-14 pb-32 md:pb-44">
      <h1
        className="text-[#1d1d1f] text-4xl font-oswald text-center pb-10 md:pb-12"
        style={{ lineHeight: "1", letterSpacing: "0.025em" }}
      >
        Login
      </h1>
      <h2
        className="text-3xl font-oswald font-normal mb-6 text-center"
        style={{ lineHeight: "1", letterSpacing: "0.025em" }}
      >
        Reset your password
      </h2>
      <h2
        className="xs:text-xs sm:text-sm semi-sm:text-base font-normal text-[#1D1D1F] mb-4 uppercase font-oswald text-center"
        style={{ lineHeight: "1.6", letterSpacing: "0.025em" }}
      >
        We will send you an email to reset your password.
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-7 ml-3 semi-sm:ml-4 md:ml-36 lg:ml-[730px]">
          <h2
            className="text-base font-normal text-[#1D1D1F] mb-3 uppercase font-oswald"
            style={{ letterSpacing: "0.3em" }}
          >
            Email
          </h2>
          <input
            className="pt-3 pb-3 pl-3 w-[295px] sm:w-[350px] semi-sm:w-[390px] md:w-[461px] mx-auto border-[#e8e8e1] border-[1px] bg-[#f2f6f6] text-[#1D1D1F] font-oswald   focus:outline focus:outline-1 focus:outline-[#1D1D1F]"
            type="email"
            id=""
            placeholder=""
            {...register("email")}
          />
        </div>
        <div className="mb-5 flex items-center justify-center">
          <input
            style={{ lineHeight: "1.42", letterSpacing: ".3em" }}
            type="submit"
            className="py-3 bg-[#1d1d1f] text-white px-4 text-base font-bold cursor-pointer uppercase font-oswald login-button"
            value="Submit"
          />
        </div>
      </form>
      <div className="flex items-center justify-center">
        <button
          className="text-base font-oswald"
          style={{ lineHeight: "1.6", letterSpacing: "0.025em" }}
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
