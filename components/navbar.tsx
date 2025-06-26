"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigation = [
  { name: "MARKETING", href: "/work" },
  { name: "CLIENTS", href: "/clients" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="container mx-auto flex h-16 items-center justify-between px-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-36 sm:w-40 lg:w-48 transition-transform duration-300 ease-in-out hover:scale-105">
          <Link href="/" aria-label="Veeville Home">
            <div className="col-span-2 md:col-span-1">
              <p className="text-[#848688] italic font-['Georgia'] text-[36px] leading-relaxed">
                Veeville.
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-row items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="group flex items-center gap-3">
              <Link
                href={item.href}
                className="nav-link text-md text-[#848688] group-hover:text-[#f05847] transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#f05847] after:left-0 after:-bottom-0.5 after:transition-all after:duration-300 group-hover:after:w-full hover:cursor-none"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col items-start space-y-2 mt-8">
              {navigation.map((item) => (
                <div key={item.name} className="group flex items-center gap-3">
                  <Link
                    href={item.href}
                    className="nav-link text-md text-[#848688] group-hover:text-[#f05847] transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#f05847] after:left-0 after:-bottom-0.5 after:transition-all after:duration-300 group-hover:after:w-full hover:cursor-none"
                    onClick={() => setIsOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
