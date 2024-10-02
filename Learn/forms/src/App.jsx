import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);

    // Making a POST request to the Express server
    let response = await fetch("http://localhost:3000/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // sending form data as JSON
    });

    let resText = await response.text();
    console.log(data, resText);

    // Setting custom error if username is not "chetan"
    if (data.username !== "chetan") {
      setError("myform", { message: "My form is not in order" });
    }
  };

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            placeholder="username" 
            {...register("username", {
              required: true,
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" }
            })} 
            type="text"
          />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input placeholder="password" {...register("password")} type="password" />
          <br />
          <input disabled={isSubmitting} type="submit" />
          {errors.myform && <div>{errors.myform.message}</div>}
        </form>
      </div>
    </>
  );
}

export default App;
