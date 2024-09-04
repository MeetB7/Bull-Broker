import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Testimonial = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied customers about how Bull Broker has helped
              them achieve their financial goals.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-4 rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>

                <div>
                  <h4 className="text-lg font-semibold">Meet B</h4>
                  <p className="text-sm text-muted-foreground">
                    Investor, Bull Broker
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Bull Broker has been a game-changer for my investment
                portfolio. The real-time data and personalized advice have
                helped me make informed decisions and achieve\n better returns."
              </p>
            </div>
            <div className="grid gap-4 rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold">Meet B</h4>
                  <p className="text-sm text-muted-foreground">
                    Investor, Bull Broker
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I've been using Bull Broker for years, and I couldn't be
                happier with the level of service and support they provide.
                Their portfolio management tools have made it easy for me to
                stay on top of my investments."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
