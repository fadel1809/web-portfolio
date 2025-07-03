"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet,SheetContent, SheetTrigger,SheetClose } from "./ui/sheet";
import { Poppins } from "next/font/google";
const poppinsFont = Poppins({
  subsets:["latin"],
  weight: ["100","200","300","400","500"]
})
const Navbar = () => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#core", label: "Core" },
    { href: "#journey", label: "Journey" },
    { href: "#project", label: "Project" },
  ];
  return (
    <header className={`w-full border-b border-neutral-800 bg-black text-white ${poppinsFont.className}`}>
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href={"/"} className="text-xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Fadel
          </span>
          <span className="text-white">
            {" "}
            <span> </span> Maulana
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:text-purple-400 transition-colors font-bold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
          {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Menu/>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white">
              <div className="flex flex-col space-y-4 mt-10 font-bold ml-2">
                {
                  navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link href={item.href}>
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))
                }

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
export default Navbar


