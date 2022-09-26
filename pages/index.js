import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninjas | Homepage</title>
      </Head>
      <div>
        <section id="hero">
          <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
              <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                Bring everyone together to build better products
              </h1>
              <p className="max-w-sm text-center hover:text-darkGrayishBlue md:text-left">
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
              </p>
              <div className="flex justify-content md:justify-start">
                <a href="#" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline bg-red-500">
                  Get Started
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image src="/assets/img/illustration-intro.svg" alt="" width="500" height="150" />
            </div>
          </div>
        </section>

        <section id="features">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What different about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the complexity. Out software is tailor-mad for modern digital product teams.
            </p>
          </div>

          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3d md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-red-500 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500">01</div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-dark">
                  See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smalles of details. Never lose sight of the bigger picture again.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div
                    className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500"
                  >
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced built-in reports
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Advanced built-in reports
                </h3>
                <p className="text-darkGrayishBlue">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>
            <div
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div
                    className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500"
                  >
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced built-in reports
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Advanced built-in reports
                </h3>
                <p className="text-darkGrayishBlue">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 className="text-4xl font-bold text-center">
              What different about manage?
            </h2>
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
              <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">
                <Image src="/assets/img/avatar-anisha.png" width="48" height="48" className="mt-14" alt="" />
                <h5 className="text-lg font-bold">Anisha Li</h5>
                <p className="text-sm text-darkGrayishBlue">
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
              <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">
                <Image src="/assets/img/avatar-anisha.png" width="48" height="48" className="mt-14" alt="" />
                <h5 className="text-lg font-bold">Anisha Li</h5>
                <p className="text-sm text-darkGrayishBlue">
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
              <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">
                <Image src="/assets/img/avatar-anisha.png" width="48" height="48" className="mt-14" alt="" />
                <h5 className="text-lg font-bold">Anisha Li</h5>
                <p className="text-sm text-darkGrayishBlue">
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </p>
              </div>
            </div>

            <div className="my-16">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-500"
            >Get Started</a
          >
        </div>
          </div>
        </section>
        <section id="cta" className="bg-red-400">
          <div className="container flex flex-col items-center justify-content px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
            <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
              Simplify how your team works today
            </h2>
            <div>
              <a href="#" className="p-3 px-5 pt-2 text-red-300 bg-white rounded-full shadow-2xl baseline hover:bg-gray-900">Get started</a>
            </div>
          </div>
        </section>

      </div >
    </>
  )
}
