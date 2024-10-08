import Link from "next/link";
import GradualSpacing from "./magicui/gradual-spacing";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
import Image from "next/image";


export async function Landing() {
  const session = await auth()
  return (
    <section id="landing" className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6 max-sm:mt-10 max-md:mt-32">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Empower Your Investments with <br />
              </h1>
              <GradualSpacing
                className="font-display text-3xl font-bold tracking-[-0.1em] 
                       text-green-600 dark:text-white md:text-6xl"
                text="Bull Broker"
              />
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Unlock the power of real-time market data, advanced portfolio
                management tools, and personalized investment advice to achieve
                your financial goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {session? (
                <Link
                href="/api/auth/signout"
                className="inline-flex h-10 items-center hover:bg-green-600 hover:text-white justify-center rounded-md border border-input 
                bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none
                focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Log Out
              </Link>
              ):(
                <Link
                href="/signup"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium hover-bg-accent
                text-primary-foreground shadow transition-colors focus-visible:outline-none hover:bg-muted hover:text-green-600
                focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Sign Up
              </Link>
              )} 
              
              {session? (<></>): (
                <Link
                href="/login"
                className="inline-flex h-10 items-center hover:bg-green-600 hover:text-white justify-center rounded-md border border-input 
                bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none
                focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Log In
              </Link>
              )}
              
            </div>
          </div>
          <Image
            src="/vercel.svg"
            width="4000"
            height="6000"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden object-contain rounded-xl  sm:w-full lg:order-last lg:aspect-square"
          ></Image>
          {session? (
            <div className="fixed bg-muted bottom-1 right-1 rounded-xl px-3">Logged In: {session.user?.email}</div>
          ):(
            <></>
          )}
        </div>
      </div>
    </section>
  );
}
