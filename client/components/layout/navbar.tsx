"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"
import { navLinks } from "@/lib/links"
import { settings } from "@/config/settings"
import Image from "next/image"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import { ExitIcon, EnterIcon } from "@radix-ui/react-icons"
import { CgProfile } from "react-icons/cg";
import { signIn } from "next-auth/react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Navbar({ session }: any) {
  const [navbar, setNavbar] = useState(false)

  const handleClick = async () => {
    setNavbar(false)
  }

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [navbar])

  return (
    <header className="select-none">
      <nav className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link href="/" onClick={handleClick} className="flex items-center gap-2 hover:scale-110 duration-300 ease-in-out">
              <Image src="/logo.png" width={23} height={23} alt="logo.png" className="items-start" />
              <h1 className="text-2xl font-bold bg-clip-text text-black hover:text-transparent hover:bg-gradient-to-r from-red-900 to-orange-600 duration-300 ease-in-out lg:hover:scale-105 dark:text-white">
                {siteConfig.name}
              </h1>
            </Link>
            <div className="flex gap-1 md:hidden">
              <button
                className="rounded-md p-2 text-primary outline-none focus:border focus:border-primary"
                aria-label="Hamburger Menu"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >

                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>

              <div className="flex">

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <CgProfile /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/profile" passHref>
                        <a style={{ textDecoration: 'none', color: 'inherit' }}>Profile</a>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>


                <Button variant="outline" size="icon">
                  <GitHubLogoIcon />
                </Button>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`absolute left-0 right-0 z-10 m-auto justify-self-center rounded-md border bg-background p-4 md:static md:mt-0 md:block md:border-none md:p-0 ${navbar ? "block" : "hidden"
              }`}
            style={{ width: "100%", maxWidth: "25rem" }}
          >
            <ul className="flex flex-col items-center space-y-4 text-primary opacity-60 md:flex-row md:space-x-6 md:space-y-0">
              {navLinks.map((link) => (
                <li key={link.route}>
                  <Link
                    className="hover:underline"
                    href={link.path}
                    onClick={handleClick}
                  >
                    {link.route}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {settings.themeToggleEnabled && (
          <div className="hidden md:block">
            <div className="flex">
              {session ?
                <Link href="/api/auth/signout?callbackUrl=/">
                  <Button className="mr-2"><ExitIcon />&nbsp;Sign Out</Button>
                </Link>

                : <Link href="/login">
                  <Button className="mr-2"><EnterIcon />&nbsp;Sign In</Button>
                </Link>
              }
              {session ?
                <DropdownMenu>

                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <CgProfile /></Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/profile" legacyBehavior>
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/notes" legacyBehavior>
                        My Notebooks
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                : ""}
              <Button variant="outline" size="icon">
                <GitHubLogoIcon />
              </Button>
              <ModeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
