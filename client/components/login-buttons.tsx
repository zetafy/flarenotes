"use client"

import { signIn } from "next-auth/react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { ImGoogle } from "react-icons/im"
import { Button } from "./ui/button"

export default function LoginButtons() {
  return (
    <>
      <Button onClick={() => signIn("google")}><ImGoogle className="h-4 w-4 mr-3" />Login with Google</Button>
      <Button onClick={() => signIn("github")}><GitHubLogoIcon className="h-4 w-4 mr-3" />Login with Github</Button>
    </>
  )
}
