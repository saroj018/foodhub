'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const getData: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(getData)}>
      <div className="border-1 border-gray-500 shadow-md shadow-black h-[450px] w-[380px] rounded-md py-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl mb-5 font-semibold">Sign Up</h1>
        <input
          placeholder="Username"
          className="border-t-0 border-l-0 border-r-0 border-b-2 p-1 h-[40px] ou outline-none focus:placeholder-transparent w-[90%] my-2 pl-2 focus:border-b-red-500 transition-all duration-100"
          type="text"
          {...register('username', {
            required: {
              value: true,
              message: "username is missing",
            }
            
          })}
        />
        <span className="text-red-500 text-sm mr-[200px] mt-[-10px] inline">{errors?.username?.message}</span>
        <input
          placeholder="Email"
          className="border-t-0 border-l-0 border-r-0 border-b-2 p-1 h-[40px] outline-none w-[90%] my-2 pl-2 focus:placeholder-transparent focus:border-b-red-500 transition-all duration-100"
          type="text"
          {...register('email', {
            required: {
              value: true,
              message: "email is missing"
              ,
            },
            pattern: {
              value: /^.*@.*$/,
              message: "invalid email format"
            },
          })}
        />
        <span className="text-red-500 text-sm mr-[215px] mt-[-10px] inline">{errors?.email?.message}</span>
        <input
          placeholder="Password"
          className="border-t-0 border-l-0 border-r-0 border-b-2 p-1 h-[40px] outline-none w-[90%] my-2 pl-2 focus:placeholder-transparent focus:border-b-red-500 transition-all duration-100"
          type="password"
          {...register('password', {
            required: {
              value: true,
              message: "password is missing"
            },
          })}
        />
        <span className="text-red-500 text-sm mr-[200px] mt-[-10px] inline">{errors?.password?.message}</span>
        <button className="w-[90%] h-[40px] rounded-md cursor-pointer bg-red-500 text-white my-3">
          Sign Up
        </button>
        <a className="text-sm text-blue-500 my-5" href="">
          Having trouble logging in?
        </a>
        <Link href={'/signin'}><p className="min-w-[350px] flex justify-center items-center rounded-md cursor-pointer border h-[40px]">Sign Up</p></Link>
      </div>
    </form>
  );
};

export default SignIn;
