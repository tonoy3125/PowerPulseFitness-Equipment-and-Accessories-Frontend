import { useState } from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    if (cardNumberElement === null) {
      console.error("Card element is not loaded or is null");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement, // Use the element directly, Stripe handles extracting the values
      billing_details: {
        name: data.cardName, // React Hook Form manages this
      },
    });

    if (error) {
      setError(error.message ?? "An unexpected error occurred");
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError(null);
      // Handle successful payment method creation (e.g., send it to your server)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
      <div className="input-wrapper">
        <label>Card Name</label>
        <Controller
          name="cardName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              className="p-[10px] text-[16px] text-[#333] placeholder:text-[#aab7c4] bg-[#f5f5f5] w-full rounded border border-gray-300 outline-none font-poppins"
              placeholder="Card Holder Name"
              required
            />
          )}
        />
      </div>

      <div className="input-wrapper">
        <label>Card Number</label>
        <Controller
          name="cardNumber"
          control={control}
          render={() => (
            <CardNumberElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#333",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                    padding: "10px",
                    backgroundColor: "#f5f5f5",
                  },
                  invalid: {
                    color: "#e5424d",
                  },
                },
              }}
            />
          )}
        />
      </div>

      <div className="input-wrapper flex-container">
        <div className="flex-item">
          <label>MM/YY</label>
          <Controller
            name="cardExpiry"
            control={control}
            render={() => (
              <CardExpiryElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#333",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                      padding: "10px",
                      backgroundColor: "#f5f5f5",
                    },
                    invalid: {
                      color: "#e5424d",
                    },
                  },
                }}
              />
            )}
          />
        </div>

        <div className="flex-item">
          <label>CVC</label>
          <Controller
            name="cardCvc"
            control={control}
            render={() => (
              <CardCvcElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#333",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                      padding: "10px",
                      backgroundColor: "#f5f5f5",
                    },
                    invalid: {
                      color: "#e5424d",
                    },
                  },
                }}
              />
            )}
          />
        </div>
      </div>

      {error && <div className="error-message font-poppins mb-1">{error}</div>}

      <button
        type="submit"
        className="submit-button"
        disabled={!stripe || !elements}
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
