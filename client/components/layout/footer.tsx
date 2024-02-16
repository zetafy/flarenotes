import Link from "next/link"
import { siteConfig } from "@/config/site"
import { navLinks } from "@/lib/links"

export default function Footer() {
  return (
    <footer className="mt-auto">
<<<<<<< HEAD
      <div className="mx-auto w-full max-w-screen-xl p-6 pt-0">
        
        <hr className="my-3 text-muted-foreground sm:mx-auto" />
=======
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">

        <hr className="my-6 text-muted-foreground sm:mx-auto lg:my-8" />

        <span>

          <Link href={"/contact"}>Contact

          </Link>

        </span>
>>>>>>> 04bcadc3b7d51e7c85b1d1d03abd696ec4b64ded
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
