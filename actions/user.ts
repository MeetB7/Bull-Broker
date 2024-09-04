"use server";

import { signIn } from "@/app/api/auth/[...nextauth]/auth";
import connectDB from "@/lib/dbConnect";
import User from "@/models/User";
import { redirect } from "next/navigation";

const register = async (formData : FormData) => {
    const firstName = formData.get("firstName") as string;
    

    await connectDB();

    User.findOne

    await User.create({firstName})
    console.log("User Added");
    // redirect('/login')
}

const signin = async (formData : any) => {
    console.log(formData)
}

const signinwithGithub = async () => {
    await signIn("github", {

    })
    redirect("/dashboard")
}

export {register,signin,signinwithGithub};