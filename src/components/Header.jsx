
import { Input } from "@/components/ui/input";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Search } from 'lucide-react';
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className=" ">
      <div className="flex justify-between p-3 items-center max-w-6xl mx-auto ">
        <h1>Estax</h1>
        <form className="flex">
          <Input placeholder='search' className='' />
          <Search />
        </form>

        <ul className="flex gap-8">
          <Link href={'/about'}>
            <li className="flex">About</li>
          </Link>

          <Link href={'/about'}>
            <li className="flex">About</li>
          </Link>
        </ul>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Link href='/sign-in'>
          <Button>Sign in</Button>
          </Link>
        </SignedOut>
      </div>
    </header>
  )
}
