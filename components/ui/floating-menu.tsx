"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "WORK", href: "/work" },
  { name: "CLIENTS", href: "/clients" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

const FloatingMenu: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Add/remove body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuItems = navigation.filter((item) => item.href !== pathname);

  return (
    <>
      {/* Backdrop blur overlay with scaled animation */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-xl transition-all duration-700 z-[9997]",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Centered Menu Container */}
      <div className="fixed bottom-8 right-8 z-[9998]" ref={menuRef}>
        {/* Menu Content */}
        <div className="relative">
          {/* Animated Menu Panel */}
          <div
            className={cn(
              "fixed inset-0 flex items-center justify-center transition-all duration-700",
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          >
            <div
              className={cn(
                "flex flex-col items-center justify-center transition-all duration-700 transform",
                isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10"
              )}
            >
              <nav className="flex flex-col items-center gap-8">
                {menuItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative group px-12 py-5 text-white transition-all duration-500"
                    onClick={() => setIsOpen(false)}
                    style={{
                      transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    {/* Text container for better hover control */}
                    <div className="relative overflow-hidden">
                      {/* Main text */}
                      <span className="block text-4xl font-medium tracking-wider transition-all duration-500 transform group-hover:translate-y-[-2px] group-hover:text-[#f05847]">
                        {item.name}
                      </span>

                      {/* Animated underline with gradient */}
                      <div className="absolute bottom-[-4px] left-0 w-full">
                        <div className="h-[2px] w-full bg-gradient-to-r from-[#f05847]/0 via-[#f05847] to-[#f05847]/0 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
                      </div>
                    </div>

                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[#f05847] blur-lg" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Show navigation menu"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "fixed top-4 right-4 z-50 h-12 w-12 rounded-lg",
              "text-[#848688] hover:text-[#f05847] bg-gray-200 backdrop-blur-sm",
              "transition-all duration-500 ease-out",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f05847] focus-visible:ring-offset-2",
              "hidden md:flex items-center justify-center",
              "shadow-lg hover:shadow-xl transform hover:scale-101 hover:bg-[#f05847]",
              isVisible ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >
            {isOpen ? (
              <X
                className="h-10 w-10 transform transition-transform duration-300"
                style={{ height: "25px", width: "25px" }}
              />
            ) : (
              <Image
                src="https://veeville-website.s3.ap-south-1.amazonaws.com/Gif/Bob+(1).png"
                alt="Menu"
                width={35}
                height={35}
                className="transform transition-transform duration-300 hover:scale-110 "
              />
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default FloatingMenu;
