import { Box } from '@mui/material'

function SignupForm() {
    return (
        <>
            <div className="w-full md:w-1/2">
                <div className="p-8 rounded-2xl shadow-2xl">
                    <Box
                        component="img"
                        sx={{ height: 50, display: { xs: "none", md: "flex" } }}
                        alt="Your logo"
                        src="/real-estate-logo.PNG"
                    />
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Sign Up to your Account
                    </h2>
                    <div className="mt-4 text-center text-sm text-zinc-500">
                        Already Have Account? <a
                            href="/login"
                            className="font-semibold text-blue-500">SignIn</a>
                    </div>
                    <form>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <div
                                    className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6"
                                >
                                    <div className="sm:col-span-4">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm/6 font-medium text-gray-900"
                                        >Full Name</label>
                                        <div className="mt-2">
                                            <input
                                                id="first-name"
                                                type="text"
                                                name="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm/6 font-medium text-gray-900"
                                        >Email address</label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm/6 font-medium text-gray-900"
                                        >Password</label>
                                        <div className="mt-2">
                                            <input
                                                id="pass"
                                                type="password"
                                                name="password"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm/6 font-medium text-gray-900"
                                        >Confirm Password</label>
                                        <div className="mt-2">
                                            <input
                                                id="confirm-pass"
                                                type='password'
                                                name="confirm-password"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignupForm
