import Head from "next/head";
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-md md:text-3xl dark:text-slate-50 font-extralight">
              <a href="https://www.abdulrahmanalblooshi.com" target="_new">
                Abdulrahman Alblooshi
              </a>
            </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    className="text-2xl text-yellow-400 cursor-pointer"
                    onClick={() => setDarkMode(false)}
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(true)}
                    className="cursor-pointer text-2xl text-gray-900"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-3xl py-3 text-teal-600 font-semibold md:text-6xl">
              Saeed Khalid
            </h2>
            <h3 className="text-lg py-2 md:text-3xl dark:text-slate-50 ">
              Developer and Designer.
            </h3>
            <p className="text-md mx-auto py-2 leading-8 text-gray-800 dark:text-gray-300 md:text-lg max-w-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let&#39;s get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-200">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} alt="dev ed" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="py-20">
          <div>
            <h3 className="text-3xl py-1 text-center">Services</h3>
            <p className="text-md py-5 mx-auto leading-8 text-gray-800 dark:text-gray-300 text-center max-w-xl">
              Since the beginning of my journey as a freelance designer and
              developer nearly 10 years ago, I&#39;ve done remote work for
              <span className="text-teal-500"> agencies</span> consulted for
              <span className="text-teal-500"> startups</span>, and collaborated
              with talented people to create digital products for both business
              and consumer use. I&#39;m quietly confident, naturally curious,
              and perpetually working on improving my chops one design problem
              at a time.
            </p>
            <p className="text-md py-2 mx-auto leading-8 text-gray-800 dark:text-gray-300 text-center max-w-xl">
              I offer a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex justify-center gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-slate-50">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-slate-50">
                Creating elegant designs suited to your brand and business
                needs.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 dark:text-gray-300 py-1">Photoshop</p>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                Illustrator
              </p>
              <p className="text-gray-800 dark:text-gray-300 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-slate-50">
                Consulting
              </h3>
              <p className="py-2 dark:text-slate-50">
                Helping you with your brand with my experience and knowledge.
              </p>
              <h4 className="py-4 text-teal-600">
                Consulting services I provide
              </h4>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                Helping you with building your brand
              </p>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                Helping you with your business
              </p>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                Helping you with your website
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-slate-50">
                Coding
              </h3>
              <p className="py-2 dark:text-slate-50">
                I use the latest tech stacks, languages and frameworks.
              </p>
              <h4 className="py-4 text-teal-600">
                Frameworks and languages I use
              </h4>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                JavaScript (Next.js/React.js)
              </p>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                Bootstrap & Tailwind
              </p>
              <p className="text-gray-800 dark:text-gray-300 py-1">
                HTML & CSS
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div>
            <h3 className="text-3xl py-1 dark:text-slate-50 text-center">
              Portfolio
            </h3>
            <p className="text-md py-5 mx-auto leading-8 text-gray-800 dark:text-gray-300 text-center max-w-4xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300 text-center">
              I offer a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-xl object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
