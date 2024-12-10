"use client";
import { Text } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

const NavBar = () => {
  const currentPath = usePathname();

  console.log(currentPath);

  const links = [
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
    { label: "Experience", href: "/experience" },
    { label: "Contacts", href: "/contact" },
  ];

  return (
    <nav className="flex space-x-6 border-0 shadow-sm mt-12 mx-10 rounded-full px-5 h-20 items-center justify-between bg-zinc-500">
      <Link
        href={"/"}
        className={`flex items-center space-x-3 font-bold ${
          currentPath === "/" ? "text-cyan-200" : "text-gray-50"
        } hover:text-sky-300 transition-colors`}
      >
        <AiOutlineHome size="24" />
        <Text className="text-xl">Hassan Mansoor</Text>
      </Link>
      <div className="flex space-x-6 items-center">
        <ul className="space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              className={`font-bold ${
                link.href === currentPath ? "text-cyan-200" : "text-gray-50"
              } hover:text-sky-300 transition-colors`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <Link
          href="/"
          className="flex space-x-2 px-4 py-3 items-center text-cyan-200 border-2 border-cyan-200 font-bold rounded-full hover:bg-gray-50 hover:border-sky-300 hover:text-sky-300 transition duration-300"
        >
          <Text>Download CV</Text>
          <FaDownload size="15" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
