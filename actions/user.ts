"use server";

import { signIn } from "@/app/api/auth/[...nextauth]/auth";
import connectDB from "@/lib/dbConnect";
import User from "@/models/User";
import { redirect } from "next/navigation";
import {hash} from "bcryptjs";
import { CredentialsSignin } from "next-auth";

const register = async (formData : FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if(!name || !email || !password){
        throw new Error("Not all fields")
    }

    await connectDB()

    const exists = await User.findOne({ email });
    if (exists) {
        return { success: false, message: "User already exists" };
    }
    
    const hashPass = await hash(password,12)

    await User.create({name,email,password: hashPass});
    console.log("User Added");

    return { success: true, message: "User registered successfully" };

    // redirect('/login')
}

const signin = async (formData : FormData) => {

    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
        
        await signIn('credentials', {
            callbackUrl: "/",
            email, password,
            redirect: false
        })

    } catch (error) {
        const err = error as CredentialsSignin
        return err.cause;
    }

    redirect("/dashboard")

}

const signinwithGithub = async () => {
    await signIn("github", {

    })
    redirect("/dashboard")
}

const signinwithGoogle = async () => {
    await signIn("google", {

    })
    redirect("/dashboard")
}


export {register,signin,signinwithGithub,signinwithGoogle};