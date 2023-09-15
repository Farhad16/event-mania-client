import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Wrapper from "../Wrapper";
import Layout from "../layout";
import FormInput from "../ui/FormInput";
import PasswordInput from "../ui/PasswordInput";
import { Link } from "react-router-dom";
import CustomeButton from "../ui/CustomButton";

function Login() {
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
      email: "",
      password: "",
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
            placeholder="Write your email email"
            type="email"
          />
          <PasswordInput
            label="Your Password *"
            control={control}
            inputClassName="text-sm py-3 text-black"
            error={errors?.password?.message}
            name="password"
            placeholder="Enter your password"
          />
          <div className="flex justify-between text-[14px] flex-row items-center">
            <Link to="/forgot-password">Forgot password?</Link>
            <p>
              Don&apos;t have an account?
              <Link to="/register" className="font-semibold ml-2 underline">
                Register
              </Link>
            </p>
          </div>
          <div className="text-center">
            <CustomeButton
              className="rounded-lg"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={25} className="text-white" />
              ) : (
                "Submit"
              )}
            </CustomeButton>
          </div>
        </form>
      </Wrapper>
    </Layout>
  );
}

export default Login;
