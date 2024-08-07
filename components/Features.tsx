import React from "react";

const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Unlock Your Investment Potential
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Acme Broker provides the tools and insights you need to make
              informed investment decisions and achieve your financial goals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            src="/vercel.svg"
            width="550"
            height="310"
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-fit object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Real-Time Market Data</h3>
                  <p className="text-muted-foreground">
                    Stay on top of the latest market trends with real-time data
                    and analytics.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    Advanced Portfolio Management
                  </h3>
                  <p className="text-muted-foreground">
                    Streamline your investment portfolio with powerful tools and
                    insights.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    Personalized Investment Advice
                  </h3>
                  <p className="text-muted-foreground">
                    Receive tailored recommendations from our team of financial
                    experts.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
