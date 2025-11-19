// src/components/AuthForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function AuthForm() {
  const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => {
//     console.log("submit", data);
//     // call your API here
//   };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      <h1 className="text-2xl font-semibold mb-1">Welcome back</h1>
      <p className="text-sm text-[--muted] mb-6">Sign in to continue</p>

      <form className="space-y-4">
        <div>
          <label className="block text-xs mb-1">Email</label>
          <input
            {...register("email")}
            required
            className="w-full bg-transparent border border-zinc-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--accent]"
          />
        </div>

        <div>
          <label className="block text-xs mb-1">Password</label>
          <input
            {...register("password")}
            type="password"
            required
            className="w-full bg-transparent border border-zinc-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--accent]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg font-semibold text-white bg-[--accent] hover:opacity-95"
        >
          Sign in
        </button>

        <div className="flex items-center justify-between text-xs text-[--muted]">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded-sm" />
            Remember me
          </label>
          <a className="underline" href="#">Forgot password?</a>
        </div>

        <div className="mt-4 text-center text-xs text-[--muted]">Or continue with</div>

        <div className="flex gap-2 mt-2">
          <button type="button" className="flex-1 py-2 rounded-lg border border-zinc-700">
            Google
          </button>
          <button type="button" className="flex-1 py-2 rounded-lg border border-zinc-700">
            GitHub
          </button>
        </div>
      </form>
    </motion.div>
  );
}
