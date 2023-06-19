import {
  ArchiveBoxArrowDownIcon,
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon
} from "@heroicons/react/20/solid";
import {
  ArchiveBoxIcon,
  BoltIcon,
  CalendarDaysIcon,
  UserIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  UsersIcon,
  HandRaisedIcon,
  PuzzlePieceIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";
import {
  collection,
  addDoc,
  getFirestore,
  query,
  where,
  getDocs,
  serverTimestamp
} from "firebase/firestore";
import Head from "next/head";
import { useState } from "react";
import { app } from "../../firebaseConfig";
import { GetServerSideProps } from "next";
import Image from 'next/image';

const primaryFeatures = [
  {
    name: "Idea Incubator",
    description:
      "Nurture your ideas with our integrated suite of AI tools, effortlessly turning rough concepts into well-defined projects, regardless of your technical proficiency.",
    href: "#",
    icon: LightBulbIcon
  },
  {
    name: "Project Portfolios",
    description:
      "Showcase your projects, achievements, and skills in a unique portfolio that goes beyond the traditional resume, creating a dynamic representation of your creative journey.",
    href: "#",
    icon: CodeBracketIcon
  },
  {
    name: "Community Collaboration",
    description:
      "Find like-minded creators, brainstorm ideas, and collaborate on projects within a diverse, inclusive network, breaking down barriers between dreamers and doers.",
    href: "#",
    icon: UserGroupIcon
  },
  {
    name: "Expert Mentorship",
    description:
      "Gain insights from industry veterans and leading experts who provide guidance and advice, enabling you to refine your projects and accelerate your learning.",
    href: "#",
    icon: UserIcon
  },
  {
    name: "AI-Driven Templates",
    description:
      "Experience the power of AI with personalized project templates that anticipate your needs, automatically shaping the blueprint of your ideas, and setting the stage for an exceptional creation journey.",
    href: "#",
    icon: CpuChipIcon
  },
  {
    name: "Cross-Disciplinary Integrations",
    description:
      "Explore boundless possibilities through seamless integration of expertise across fields with our smart tagging system, fueling innovation and expanding horizons.",
    href: "#",
    icon: PuzzlePieceIcon
  }
];

const db = getFirestore(app);

export default function Home() {
  const [email, setEmail] = useState("");

  async function submitEmail() {
    try {
      const docRef = collection(db, "subscribedEmail");
      await addDoc(docRef, {
        email: email,
        created: serverTimestamp()
      });

      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          subject: "Thanks for joining the Seren.fyi Journey!"
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }

      window.location = "/success";
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="bg-gray-900">
      <Head>
        <title>Seren.fyi</title>
        <meta
          name="description"
          content="Unleashing Potential - Everything you need to share your creations"
          key="desc"
        />
      </Head>
      <main>

        {/* Hero section */}
        <div className="relative isolate overflow-hidden">

          {/* This creates the grid */}
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true">
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />

              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}/>
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"/>
          </svg>


          {/* This creates the background blur */}
          <div
              className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)]
              lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">

            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-10"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, " +
                    "55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
              }}/>
          </div>

          <div className="flex items-center justify-center">
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pb-28 lg:flex lg:px-8 lg:pt-40">
              <div className="mx-auto max-w-4xl flex-shrink-0 lg:mx-0 lg:max-w-3xl lg:pt-8">
                <img className="h-24 mx-auto" src="/serenlogo.png" alt="Seren.fyi Logo" />
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Build. Share. Connect.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Filler text
                </p>
                <div className="flex">
                  <button className="mt-8 flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                    Sign up ↗
                  </button>
                  <button className="mt-8 flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 ml-4">
                    Learn More ↗
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>


        {/* Feature section */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-[#cf8d40]">
              Unleashing Potential
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to share your creations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore a comprehensive suite of dynamic features designed to
              inspire creativity, foster meaningful collaborations, and guide
              you seamlessly on your journey from initial concept to successful
              project completion.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#ad6f26]">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    {/* <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-indigo-400"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p> */}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 mt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Get notified when we’re launching.
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Be the first to know! Sign up to be informed the moment we
                  launch.
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={[email]}
                    onChange={(e) => setEmail(e.target.value)}
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    onClick={submitEmail}
                    className="flex-none rounded-md bg-[#ad6f26] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#ad6f26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <CalendarDaysIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <dt className="mt-4 font-semibold text-white">Launch</dt>
                  <dd className="mt-2 leading-7 text-gray-400">
                    Get ready for our launch in late summer. Sign up now for
                    future early access and be among the first to experience it
                    firsthand.
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <BoltIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <dt className="mt-4 font-semibold text-white">
                    Early Access
                  </dt>
                  <dd className="mt-2 leading-7 text-gray-400">
                    Secure exclusive early access privileges and join our
                    enthusiastic community by signing up today, ensuring
                    you&apos;re among the first to access our highly anticipated
                    upcoming product.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div
              className="pt-4 aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              }}
            />
          </div>
        </div>
        {/* Feature section */}
      </main>

      {/* Footer */}
      <footer aria-labelledby="footer-heading" className="relative">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2023 Seren.fyi, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
