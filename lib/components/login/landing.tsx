import React from "react";
import logo from "@images/logo.png";
import logoDark from "@images/logo-dark.png";
import finance from "@images/financeImage.png";
import money from "@images/moneybg.png";
import Image from "next/image";

function Landing() {
  return (
    <div className="flex h-full items-center w-full">
      <div className="flex flex-col w-full gap-2 p-5 lg:p-[150px]">
        <div className="w-full flex justify-center items-center">
          <Image
            src={logoDark}
            alt="logo"
            width={1000}
            height={1000}
            className="flex w-[400px] h-auto"
          />
        </div>
        <p className="text-white text-justify flex text-[15px] lg:text-[25px]">
          Penny Wise is a smart money management app designed to help you take
          control of your finances effortlessly. With intuitive budgeting tools,
          expense tracking, and financial insights, Penny Wise empowers you to
          make informed decisions, set savings goals, and optimize your spending
          habits. Its user-friendly interface and personalized recommendations
          make managing your money simple and effective, so you can focus on
          what matters most.
        </p>
      </div>
    </div>
  );
}

export default Landing;
