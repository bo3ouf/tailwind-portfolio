import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saeed Khalid Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-Archivo">Abdulrahman Alblooshi</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
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
          <div>
            <h2>Saeed Khalid</h2>
            <h3>Developer and Designer.</h3>
            <p>
              Freelancer providing web development and design services. I have
              been working in the industry for 5 years. I have worked with
              companies like Google, Facebook, and Amazon.
            </p>
          </div>
          <div>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </section>
      </main>
    </div>
  );
}
