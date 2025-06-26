"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "MARKETING", href: "/work" },
  { name: "CLIENTS", href: "/clients" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5" 
          : "bg-transparent"
      )}
    >
      <nav
        className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4 lg:px-6"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" aria-label="Veeville Home" className="group">
            <div className="transition-all duration-300 ease-out group-hover:scale-105">
              <p className={cn(
                "italic font-['Georgia'] text-[32px] lg:text-[36px] leading-relaxed transition-colors duration-300",
                isScrolled 
                  ? "text-gray-800 group-hover:text-[#f05847]" 
                  : "text-white drop-shadow-lg group-hover:text-[#f05847]"
              )}>
                Veeville.
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navigation.map((item) => (
            <div key={item.name} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  "relative px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-md font-medium transition-all duration-300 ease-out rounded-full",
                  "hover:bg-white/10 hover:backdrop-blur-sm",
                  "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#f05847]/20 before:to-[#f05847]/10 before:opacity-0 before:transition-opacity before:duration-300",
                  "hover:before:opacity-100",
                  "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#f05847] after:to-[#ff6b5a] after:transition-all after:duration-300 after:-translate-x-1/2",
                  "hover:after:w-3/4",
                  isScrolled 
                    ? "text-gray-700 hover:text-[#f05847]" 
                    : "text-white/90 hover:text-white drop-shadow-sm",
                  pathname === item.href && (isScrolled ? "text-[#f05847]" : "text-white")
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
              
              {/* Active indicator */}
              {pathname === item.href && (
                <div className="absolute bottom-0 left-1/2 h-0.5 w-3/4 bg-gradient-to-r from-[#f05847] to-[#ff6b5a] -translate-x-1/2 rounded-full" />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Open menu"
              className={cn(
                "relative z-10 rounded-full transition-all duration-300",
                "hover:bg-white/10 hover:backdrop-blur-sm",
                isScrolled 
                  ? "text-gray-700 hover:text-[#f05847]" 
                  : "text-white hover:text-white/80"
              )}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl border-l border-white/20"
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <p className="text-gray-800 italic font-['Georgia'] text-[28px] leading-relaxed">
                  Veeville.
                </p>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-[#f05847] rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group relative px-4 py-4 text-lg font-medium rounded-xl transition-all duration-300",
                    "hover:bg-gradient-to-r hover:from-[#f05847]/10 hover:to-[#f05847]/5",
                    "border border-transparent hover:border-[#f05847]/20",
                    pathname === item.href 
                      ? "text-[#f05847] bg-gradient-to-r from-[#f05847]/10 to-[#f05847]/5 border-[#f05847]/20" 
                      : "text-gray-700 hover:text-[#f05847]"
                  )}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <span className="relative z-10 flex items-center">
                    {item.name}
                    {pathname === item.href && (
                      <div className="ml-auto w-2 h-2 bg-[#f05847] rounded-full" />
                    )}
                  </span>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f05847]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3 text-center text-white bg-gradient-to-r from-[#f05847] to-[#ff6b5a] rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#f05847]/25 hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Gradient overlay for better contrast over images/videos */}
      <div 
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-500",
          isScrolled 
            ? "opacity-0" 
            : "opacity-100 bg-gradient-to-b from-black/20 via-transparent to-transparent"
        )} 
      />
    </header>
  );
}