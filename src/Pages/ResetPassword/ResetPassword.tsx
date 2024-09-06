import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); // Parse the query parameters
  const email = searchParams.get("email"); // Get email from URL
  const token = searchParams.get("token"); // Get token from URL

  console.log("Email Is", email);
  console.log("The Token is", token);
  return (
    <div>
      <h1>This Is reset password page</h1>
    </div>
  );
};

export default ResetPassword;
