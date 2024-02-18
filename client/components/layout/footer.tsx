import Link from "next/link"
import { siteConfig } from "@/config/site"
import { navLinks } from "@/lib/links"

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-6">
        <hr className="text-muted-foreground sm:mx-auto lg:my-8" />
        <span className="block text-sm text-muted-foreground sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href="https://github.com/zetafy"
            className="hover:underline"
          >
            Zetafy
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
