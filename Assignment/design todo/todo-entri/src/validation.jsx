import React from "react";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./validation.css";
function Validations() {
  let data;

  const submit = async () => {
    try {
      const request = await fetch("http://127.0.0.1:4000/getdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
        credentials: "include",
      });

      const response = await request.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const userSchema = yup.object().shape({
    firstname: yup.string().required("please enter a firstname"),
    lastname: yup.string().required("please enter a lastname"),
    email: yup.string().email().required("please enter a email"),
    password: yup.string().min(4).max(12).required("enter password"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  console.log(register);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
      className="container"
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit(submit)}
      >
        <TextField
          {...register}
          sx={{ width: "300px" }}
          placeholder="firstname"
        ></TextField>
        <span className="error">{errors.fullname?.message}</span>
        <TextField
          {...register}
          sx={{ width: "300px" }}
          placeholder="last name"
        ></TextField>
        <span className="error">{errors.username?.message}</span>

        <TextField
          {...register}
          sx={{ width: "300px" }}
          placeholder="email"
        ></TextField>
        <span className="error">{errors.email?.message}</span>

        <TextField
          {...register}
          sx={{ width: "300px" }}
          placeholder="password"
        ></TextField>
        <span className="error">{errors.password?.message}</span>

        <Button
          onClick={handleSubmit(submit)}
          sx={{ width: "300px", backgroundColor: "white" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Validations;
