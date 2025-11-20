import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

interface IFormInput {
  email: string;
  password: string;
}

export default function AuthForm() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    window.location.href = "/";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full md:w-1/2 flex flex-col justify-center p-8"
    >
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-semibold mb-1">Welcome back</h1>
        <p className="text-sm text-zinc-500 mb-6">Sign in to continue</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs mb-1" htmlFor="email">Email</label>
            <input
              id='email'
              {...register("email")}
              required
              className="w-full bg-transparent border border-zinc-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              {...register("password")}
              type="password"
              required
              className="w-full bg-transparent border border-zinc-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg font-semibold text-white bg-indigo-600 hover:opacity-95"
          >
            Sign in
          </button>

          <div className="flex items-center justify-between text-xs text-zinc-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded-sm" />
              Remember me
            </label>
            <a className="underline" href="#">Forgot password?</a>
          </div>

          <div className="mt-4 text-center text-xs text-zinc-500">Or continue with</div>

          <div className="flex gap-2 mt-2">
            <button type="button" className="flex-1 py-2 rounded-lg border border-zinc-300 cursor-pointer hover:text-indigo-800 hover:font-bold">
              Google
            </button>
            <button type="button" className="flex-1 py-2 rounded-lg border border-zinc-300 cursor-pointer hover:text-indigo-800 hover:font-bold">
              GitHub
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
