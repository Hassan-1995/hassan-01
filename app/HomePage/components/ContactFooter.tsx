import { Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ContactFooter = () => {
  return (
    <Link
      href="/"
      className="group flex w-44 space-x-2 px-4 py-3 items-center text-gray-50 border-2 border-cyan-200 font-bold rounded-full hover:border-sky-300 hover:text-sky-300 transition-all duration-400"
    >
      <Text>Contact Me</Text>
      <FaChevronRight
        size="15"
        className="transform transition-transform duration-400 group-hover:translate-x-4"
      />
    </Link>
  );
};

export default ContactFooter;
