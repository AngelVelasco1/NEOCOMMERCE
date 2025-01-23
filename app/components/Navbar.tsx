import Link from "next/link";
import { colors } from "../layout";
import { TbShoppingBag } from "react-icons/tb";
import { LuUserRound } from "react-icons/lu";
import { Input } from "@/components/ui/input";

export const Navbar = () => {
  const pages = [
    {
      name: "Inicio",
      url: "/",
    },
    {
      name: "Productos",
      url: "#",
    },
    {
      name: "Nosotros",
      url: "#",
    },
  ];

  return (
    <nav className="container sticky top-0 w-100 z-40 mx-auto px-6 py-7 flex items-center justify-between bg-white ">
      <div className="flex items-center space-x-4">
        <div
          style={{ color: colors.primary }}
          className="text-xl font-bold uppercase"
        >
          Sensual Candles
        </div>
      </div>
      <div className="text-lg hidden md:flex space-x-10">
        {pages.map((page, index) => {
          return (
            <Link
              className="text-gray-700 hover:text-gray-900"
              key={index}
              href={page.url}
            >
              {page.name}
            </Link>
          );
        })}
      </div>
      <div className="hidden md:flex items-center">
        <div  className="flex items-center">
        <Input
            type="text"
            className="px-3"
          />
          <button
            style={{ backgroundColor: colors.primary }}
            className="px-3 py-[8px] text-white rounded-e-lg text-center"
          >
            Buscar
          </button>
          
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <Link href={"/cart"} className="text-gray-700 hover:text-gray-900">
          <TbShoppingBag size="1.7em" />
        </Link>
        <button className="text-gray-700 hover:text-gray-900">
          <LuUserRound size="1.7em" />
        </button>
      </div>
    </nav>
  );
};
