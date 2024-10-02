"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signin, signinwithGithub, signinwithGoogle } from "@/actions/user";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ToastContainer,toast } from "react-toastify";

export function LoginForm() {
  const router = useRouter()

  const handlesignin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formdata = new FormData(event.currentTarget);
    try {
      const result = await signin(formdata);
      if (result) {
        toast.success(result.message);
        setTimeout(() => {
          router.push("/login");
        }, 2200);  
      } else {
        toast.error(result)
      }
    } catch (err: any) {
      toast.error(err.message || "An error occurred");
    }
  }

  return (
    <>
      <Button variant="ghost" onClick={() => router.push("/")} className=" fixed top-0 left-0 m-2">
      <span>&lt;-</span>
      </Button>
      <Card className="mx-auto max-w-sm ">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <form onSubmit={handlesignin}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="mail@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {/* <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                  >
                  Forgot your password?
                  </Link> */}
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="*******"
                    required
                  />
                </div>
                <Button type="submit" className="w-full mt-2">
                  Login
                </Button>
              </div>
            </form>
            <div className="grid gap-2">
              <form action={signinwithGoogle}>
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2 p-2"
                >
                  <FcGoogle size={25} />
                  <span>Continue with Google</span>
                </Button>
              </form>
            </div>
            {/* <div className="grid gap-2">
              <form action={signinwithGithub}>
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2 p-2"
                >
                  <FaGithub size={25} />
                  <span>Login with Github</span>
                </Button>
              </form>
            </div> */}
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
