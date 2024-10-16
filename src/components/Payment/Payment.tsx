import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import CheckoutNavbar from "@/Pages/Checkout/CheckoutNavbar/CheckoutNavbar";

const stripePromise = loadStripe(
  "pk_test_51OEBoSCj4lN4EMrEVhIRMQuU8XhFt6NHEwM44fNDVXhOIQoV1iE06Cty0HKLbfXam9j6DqHOIHQahz15bMMluCVm009U34dYUW"
);

const Payment = () => {
  return (
    <div>
      <div className="mx-4">
        <CheckoutNavbar />
      </div>
      <div className="mt-20 h-screen">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};
export default Payment;
