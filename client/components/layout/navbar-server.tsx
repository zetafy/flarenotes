import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Navbar from "./navbar";

export default async function NavbarServer() {
  const session = await getServerSession(options);
  console.log(session)
  return <Navbar session={session} />
}
