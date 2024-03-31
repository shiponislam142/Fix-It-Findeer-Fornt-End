import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <section className="gradient-form h-full bg-neutral-200">
        <div className="container h-full">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-cyan-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <Image
                          className="mx-auto w-48"
                          src={logo}
                          alt="logo"
                          width={70}
                          height={70}
                        />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          We are The Fix-It-Finder Team
                        </h4>
                      </div>

                      <form>
                        <p className="mb-4">Please register your account</p>
                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                          />
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >
                            Name
                          </label>
                        </div>

                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                          />
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >
                            Email
                          </label>
                        </div>

                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput11"
                            placeholder="Password"
                          />
                          <label
                            htmlFor="exampleFormControlInput11"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >
                            Password
                          </label>
                        </div>

                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button className="btn btn-warning my-3 w-full">
                            Register
                          </button>
                          <br />
                        </div>

                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Do have an account?</p>
                          <Link href="/login">
                            <button
                              type="button"
                              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                            >
                              Login
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h2 className="text-3xl font-extrabold my-3 border-b-4 py-2">
                        Please Register
                      </h2>
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        আপনার তথ্য সংরক্ষণ আর গোপনিয়তা কক্ষা করা আমাদের ইমানি
                        দায়িত্ব। আপনি কোন সংকোচ ছাড়া আমার সাথে যুক্ত হতে পারেন।
                        আমরা সব সময় আপনার পাশ্বে আছি থাকব ইনসাআল্লাহ্ ।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
