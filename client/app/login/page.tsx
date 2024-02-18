"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { ImGoogle } from "react-icons/im"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex justify-center mt-5">
      <Tabs defaultValue="Login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Signup">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <Card>
            <CardHeader>

              <Button onClick={() => signIn("google")}><ImGoogle className="h-4 w-4 mr-3" />Login with Google</Button>
              <Button onClick={() => signIn("github")}><GitHubLogoIcon className="h-4 w-4 mr-3" />Login with Github</Button>
            </CardHeader>
            <Separator className="mb-4" />
            <CardContent className="space-y-2">
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your login details, or login with available options below.
              </CardDescription>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter your username" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Enter your password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <CardDescription>
                Sign up for a Flarenotes account here.
              </CardDescription>
              <div className="space-y-1">
                <Label htmlFor="signup-username">Username</Label>
                <Input id="signup-username" placeholder="Create a username" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" type="password" placeholder="Create a strong password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Sign Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
