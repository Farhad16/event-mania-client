import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Wrapper from "../Wrapper";
import Layout from "../layout";
import FormInput from "../ui/FormInput";
import PasswordInput from "../ui/PasswordInput";
import { Link } from "react-router-dom";

function Register() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(3.5);

  const {
    handleSubmit,
    control,
    getValues,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
  });

  const onSubmit = async ({ email, comment, name }: any) => {
    setLoading(true);
    try {
      setLoading(false);
    } catch (err: any) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout showNav={false}>
      <Wrapper className="py-10 flex justify-center items-center">
        <form
          className="flex flex-col rounded-lg p-6 shadow-lg space-y-5 bg-slate-200 bg-opacity-50 sm:w-[500px] w-full box-shadow"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput
            label="Write full name *"
            rules={{
              required: { message: "First name is required", value: true },
            }}
            error={errors?.name?.message || ""}
            name="fName"
            placeholder="Write first name"
            type="text"
            control={control}
          />

          <FormInput
            label="Your email *"
            control={control}
            inputClassName="text-sm py-3"
            error={errors?.email?.message || ""}
            controllerClassName="text-black"
            rules={{
              required: { message: "Email required", value: true },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email",
              },
            }}
            name="email"
            placeholder="Write your email"
            type="email"
          />
          <PasswordInput
            label="Your password *"
            control={control}
            inputClassName="text-sm py-3 text-black"
            error={errors?.password?.message}
            name="password"
            placeholder="Enter your password"
          />
          <PasswordInput
            label="Confirm password *"
            control={control}
            inputClassName="text-sm py-3 text-black"
            error={errors?.cpassword?.message}
            name="password"
            placeholder="Confirm your password"
          />
          <div className="flex justify-between text-[14px] flex-row items-center">
            <Link to="/forgot-password">Forgot password?</Link>
            <p>
              Already have an account?
              <Link to="/login" className="font-semibold ml-2 underline">
                Login
              </Link>
            </p>
          </div>
          <div className="text-center">
            <button
              className="mt-2 text-white transition duration-300 ease-in-out outline-none focus:outline-none hover:scale-[1.03] pt-2 pb-3 px-6 !text-md bg-gradient-to-r from-[#4e86f7] to-[#bf10f4] rounded-lg font-semibold"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={25} className="text-white" />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </Wrapper>
    </Layout>
  );
}

export default Register;
