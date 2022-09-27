import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      {/*<div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary">Schedule a call</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>*/}
      <div className="relative py-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-b border-gray-300"></div>
        </div>
      </div>
      <div className="mt-10">
              <Socials />
            </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Forked with ❤ from{" "}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Chetan Verma</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
