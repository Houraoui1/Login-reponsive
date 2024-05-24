import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LoginRequest } from "../redux/action/action";



const SignIn = () => {
    const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataSend) => {

    console.log("data from frontend", dataSend);

if (dataSend ){
  dispatch(LoginRequest(dataSend))
}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        {...register("email", { required: "email is required" })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <TextField
        id="outlined-basic"
        label="PAssword"
        variant="outlined"
        {...register("password", { required: "password is required" })}
      />

      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignIn;
