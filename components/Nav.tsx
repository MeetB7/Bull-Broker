import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Searchbar from "./Searchbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Chatbot from "./Chatbot";

const Nav = () => {
  return (
    <nav className="fixed w-full px-0 lg:px-6 h-14 flex items-center border backdrop-blur-lg rounded-b-lg z-50 bg-white/70">
      <Link
        href="#landing"
        className="flex items-center justify-center ml-1 mb-2 md:ml-6 "
        prefetch={false}
      >
        <Image src="/bull.svg" alt="Bull" width={80} height={80} />
        <span className="sr-only">Bull Broker</span>
      </Link>
      <Searchbar/>
      <div className=" ml-auto flex gap-3 mr-3 sm:gap-6 sm:mr-0">
        <Link
          href="#features"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href="#testimonials"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Testimonials
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="sm:ml-3 py-0 text-sm font-medium hover:underline underline-offset-4">
            Ask-Ai
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ask Me Anything ~ AI</DialogTitle>
            <DialogDescription>
              A ChatBot to help with basic queries.
            </DialogDescription>
          </DialogHeader>
          <Chatbot />
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Nav;
