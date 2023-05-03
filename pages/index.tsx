/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import { Karla, DM_Serif_Display } from "next/font/google";
import Head from "next/head";
import Link from 'next/link'

const karla = Karla({ subsets: ["latin"] });
const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Insure - Home Page</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>

      <Header />
      <main className={`h-screen w-screen bg-white text-white ${karla.className}`}>
        {/* Intro */}
        <section className="bg-image flex w-full flex-col bg-dark-violet md:h-[430px] md:flex-row md:gap-6 md:px-20 md:py-10 lg:h-[600px] lg:px-24 lg:py-24 xl:h-[600px] xl:px-36">
          <div className="order-2 flex-col items-center bg-dark-violet bg-transparent px-6 py-16 text-center md:order-1 md:mx-auto md:block md:w-[50%] md:py-8 md:text-left lg:py-24">
            <div className="border-top"></div>
            <h1
              className={`mt-8 text-4xl md:mt-0 md:break-words xl:text-5xl ${dmSerifDisplay.className}`}
            >
              <span className="inline-block md:w-full md:break-words">
                Humanizing
              </span>{" "}
              your insurance.
            </h1>
            <p className="mt-6 md:mt-2 lg:mt-6">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>

            <button className="mx-auto mt-8 block border border-white px-6 py-2 text-xs font-bold uppercase text-white transition delay-100 ease-in-out hover:bg-white hover:text-very-dark-violet md:mx-0 md:mt-2 lg:mt-8 lg:px-10 lg:text-lg">
              view plans
            </button>
          </div>

          <div className="order-1 md:order-2 md:w-[50%]">
            <img
              id="intro-desktop"
              src="/assets/image-intro-desktop.jpg"
              alt=""
              className="hidden md:block"
            />
            <img
              id="intro-mobile"
              src="/assets/image-intro-mobile.jpg"
              alt=""
              className="w-full md:hidden"
            />
          </div>
        </section>

        {/* How we work */}
        <section className="px-6 pb-32 text-center text-very-dark-violet md:px-24 lg:px-32">
          <div className="mx-auto mt-32 w-36 border-t border-[#C396C6] lg:mx-0"></div>

          <h2
            className={`mt-8 text-5xl md:break-words lg:text-left xl:text-5xl ${dmSerifDisplay.className}`}
          >
            We're different
          </h2>
          <div className="lg:flex lg:gap-4 lg:text-left">
            <div className="flex-col">
              <img
                src="/assets/icon-snappy-process.svg"
                alt=""
                className="mx-auto mt-16 block lg:mx-0"
              />

              <h3
                className={`text-3xl font-bold ${dmSerifDisplay.className} mt-8`}
              >
                Snappy Process
              </h3>
              <p className="mt-4 font-semibold text-dark-grayish-violet">
                Our application process can be completed in minutes, not hours.
                Don’t get stuck filling in tedious forms.
              </p>
            </div>
            <div className="flex-col">
              <span>
                <img
                  src="assets/icon-affordable-prices.svg"
                  alt=""
                  className="mx-auto mt-16 block lg:mx-0"
                />
              </span>
              <h3
                className={`text-3xl font-bold ${dmSerifDisplay.className} mt-8`}
              >
                Affordable Prices
              </h3>
              <p className="mt-4 font-semibold text-dark-grayish-violet">
                We don't want you worrying about high monthly costs. Our prices
                may be low, but we still offer the best coverage possible.
              </p>
            </div>
            <div className="flex-col pb-24">
              <span>
                <img
                  src="assets/icon-people-first.svg"
                  alt=""
                  className="mx-auto mt-16 block lg:mx-0"
                />
              </span>
              <h3
                className={`text-3xl font-bold ${dmSerifDisplay.className} mt-8`}
              >
                People First
              </h3>
              <p className="mt-4 font-semibold text-dark-grayish-violet">
                Our plans aren't full of conditions and clauses to prevent
                payouts. We make sure you're covered when you need it.
              </p>
            </div>
          </div>

          <div className="lg:bg-center-right items-center justify-between bg-dark-violet bg-pattern-how-we-work-mobile bg-right-top bg-no-repeat px-8 pb-12 pt-16 text-white md:flex md:bg-pattern-how-we-work-desktop md:px-12 lg:px-16">
            <div className="">
              <h2
                className={`mt-8 text-4xl md:mt-0 md:break-words md:text-3xl xl:text-5xl ${dmSerifDisplay.className} md:text-left`}
              >
                <span className="inline-block md:w-full md:break-words">
                  Find out more
                </span>{" "}
                about how we work
              </h2>
            </div>
            <button className="mx-auto mt-10 block border border-white px-6 py-2 text-xs font-bold uppercase text-white transition delay-100 ease-in-out hover:bg-white hover:text-very-dark-violet md:mt-0">
              HOW WE WORK
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="bg-very-light-gray bg-pattern-footer-mobile bg-top bg-no-repeat px-6 text-very-dark-violet md:px-24 lg:px-32 pb-24 md:pb-10"
        >
          <div className="items-center justify-center space-y-6 pb-16 pt-24 md:flex md:justify-between border-b border-dark-grayish-violet">
            <img
              src="/assets/logo.svg"
              alt=""
              className="mx-auto block md:mx-0"
            />

            <ul className="flex items-center justify-center gap-3 text-dark-grayish-violet">
              <li>
                <a
                  href="https://facebook.com
                  "
                  target="_blank"
                  className="text-dark-grayish-violet transition delay-100 ease-in-out hover:text-very-dark-violet"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="currentColor"
                      d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="text-dark-grayish-violet transition delay-100 ease-in-out hover:text-very-dark-violet"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="20"
                  >
                    <path
                      fill="currentColor"
                      d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="text-dark-grayish-violet transition delay-100 ease-in-out hover:text-very-dark-violet"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="text-dark-grayish-violet transition delay-100 ease-in-out hover:text-very-dark-violet"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:justify-between md:text-left text-center uppercase font-extrabold text-sm md:inline-flex md:space-x-20 lg:space-x-32 xl:space-x-56">
            <ul>
              <li className="py-6 mt-2  text-dark-grayish-violet"><p>our company</p></li>
              <li className="hover:underline "><Link href={'/#'}>how we work</Link></li>
              <li className="hover:underline"><Link href={'/#'}>why insure?</Link></li>
              <li className="hover:underline"><Link href={'/#'}>check price</Link></li>
              <li className="hover:underline"><Link href={'/#'}>reviews</Link></li>
            </ul>

            <ul>
              <li className="py-6 mt-2  text-dark-grayish-violet"><p>help me</p></li>
              <li className="hover:underline "><Link href={'/#'}>faq</Link></li>
              <li className="hover:underline"><Link href={'/#'}>terms of use</Link></li>
              <li className="hover:underline"><Link href={'/#'}>privacy policy</Link></li>
              <li className="hover:underline"><Link href={'/#'}>cookies</Link></li>
            </ul>

            <ul>
              <li className="py-6 mt-2  text-dark-grayish-violet"><p>contact</p></li>
              <li className="hover:underline "><Link href={'/#'}>sales</Link></li>
              <li className="hover:underline"><Link href={'/#'}>support</Link></li>
              <li className="hover:underline"><Link href={'/#'}>live chat</Link></li>
            </ul>

            <ul>
              <li className="py-6 mt-2  text-dark-grayish-violet"><p>others</p></li>
              <li className="hover:underline "><Link href={'/#'}>careers</Link></li>
              <li className="hover:underline"><Link href={'/#'}>press</Link></li>
              <li className="hover:underline"><Link href={'/#'}>licenses</Link></li>              
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
}
