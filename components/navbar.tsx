"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
        // Always have a subtle background for visibility
        "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/50",
        isScrolled && "bg-white/95 shadow-md border-gray-200"
      )}
    >
      <nav
        className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo - Preserving Veeville brand font */}
        <div className="flex-shrink-0">
          <Link 
            href="/" 
            aria-label="Veeville Home"
            className="group inline-block transition-transform duration-200 hover:scale-105"
          >
            <span className="text-[#848688] italic font-['Georgia'] text-[28px] leading-relaxed group-hover:text-[#f05847] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f05847] focus-visible:ring-offset-2 rounded-sm">
              Veeville.
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-sm font-medium tracking-wide transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f05847] focus-visible:ring-offset-2 rounded-sm",
                "after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#f05847] after:transition-all after:duration-200",
                "hover:after:w-full hover:scale-105",
                pathname === item.href 
                  ? "text-[#f05847] after:w-full" 
                  : "text-[#848688] hover:text-[#f05847]"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Open navigation menu"
              className="h-10 w-10 rounded-md text-[#848688] hover:text-[#f05847] hover:bg-gray-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f05847] focus-visible:ring-offset-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          
          {/* Mobile Menu */}
          <SheetContent 
            side="right" 
            className="w-[300px] bg-white border-l border-gray-200 p-0"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <span className="text-[#848688] italic font-['Georgia'] text-[24px] leading-relaxed">
                    Veeville.
                  </span>
                </Link>
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex-1 px-6 py-6" aria-label="Mobile navigation">
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f05847] focus-visible:ring-offset-2",
                          pathname === item.href 
                            ? "text-[#f05847] bg-[#f05847]/10 border border-[#f05847]/20" 
                            : "text-[#848688] hover:text-[#f05847] hover:bg-gray-50"
                        )}
                        onClick={() => setIsOpen(false)}
                        aria-current={pathname === item.href ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}