"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const [eventsOpen, setEventsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/membership", label: "MEMBERSHIP" },
    { href: "/contact", label: "CONTACT US" },
  ]

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-400 to-cyan-500 py-6 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/images/mirlabs-logo.png"
              alt="MIR Labs Logo"
              className="h-16 w-auto bg-white p-2 rounded-lg shadow-md"
            />
            <h1 className="text-2xl md:text-4xl font-bold text-blue-900 drop-shadow-sm">
              Machine Intelligence Research Labs<sup className="text-lg">TM</sup>
            </h1>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b-2 border-gray-300 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <ul className="flex flex-wrap justify-center md:justify-start gap-8 py-4 px-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-blue-700 font-semibold hover:text-blue-900 transition-all duration-200 hover:scale-105 px-2 py-1 rounded",
                    pathname === item.href && "bg-blue-100 text-blue-900",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Events Dropdown */}
            <li className="relative">
              <button
                onClick={() => setEventsOpen(!eventsOpen)}
                className={cn(
                  "text-blue-700 font-semibold hover:text-blue-900 transition-all duration-200 hover:scale-105 px-2 py-1 rounded flex items-center gap-1",
                  (pathname === "/events" || pathname === "/conferences" || pathname === "/journals") &&
                    "bg-blue-100 text-blue-900",
                )}
              >
                EVENTS
                <ChevronDown className="w-4 h-4" />
              </button>

              {eventsOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[150px] z-50">
                  <Link
                    href="/conferences"
                    className="block px-4 py-2 text-blue-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    onClick={() => setEventsOpen(false)}
                  >
                    Conferences
                  </Link>
                  <Link
                    href="/journals"
                    className="block px-4 py-2 text-blue-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    onClick={() => setEventsOpen(false)}
                  >
                    Journals
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
