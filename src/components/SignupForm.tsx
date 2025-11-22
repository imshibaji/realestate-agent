import { Box } from '@mui/material'

function SignupForm() {

    const handleSubmit = () => {
        console.log("handleSubmit clicked");
        
        window.location.href = "/login";
    }

    return (
        <>
            <div className="w-full md:w-1/2">
                <div className="p-4">
                    <div className="text-center">
                        <Box
                            component="img"
                            sx={{
                                height: 50,
                                display: { xs: "none", md: "block" },
                                mx: "auto",
                            }}
                            alt="Your logo"
                            src="/real-estate-logo.PNG"
                        />

                        <h2 className="text-2xl font-semibold text-gray-900 mt-4">
                            Create your account
                        </h2>

                        <p className="mt-2 text-sm text-zinc-500">
                            Already have an account?{" "}
                            <a href="/login" className="font-semibold text-blue-500">Sign in</a>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="full-name"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >Full Name</label>
                                <div className="mt-2">
                                    <input
                                        id="full-name"
                                        type="text"
                                        name="full-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
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

                            <div>
                                <label
                                    htmlFor="pass"
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

                            <div>
                                <label
                                    htmlFor="confirm-pass"
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

                        <div className="mt-6 flex items-center justify-center gap-x-6">
                            <button
                                type="submit"
                                className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Create account</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignupForm
