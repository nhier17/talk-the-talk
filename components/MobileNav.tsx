'use client';

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { SignedIn, SignedOut, useClerk } from '@clerk/nextjs';
import { Button } from './ui/button';

const MobileNav = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { signOut } = useClerk();

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-black-1">
          <Link href="/" className="flex cursor-pointer items-center gap-1 pb-6 pl-4">
            <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
            <h1 className="text-24 font-extrabold text-white-1 ml-2">Talk the Talk</h1>
          </Link>
          <div className="flex h-full flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex flex-col gap-6 text-white-1">
                {sidebarLinks.map(({ route, label, imgURL }) => {
                  const isActive = pathname === route || pathname.startsWith(`${route}/`);
                  return (
                    <SheetClose asChild key={route}>
                      <Link href={route} className={cn("flex gap-3 items-center py-4 px-4", {
                        'bg-nav-focus border-r-4 border-orange-1': isActive
                      })}>
                        <Image src={imgURL} alt={label} width={24} height={24} />
                        <p>{label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
            <div className="flex-center w-full pb-14 px-4">
              <SignedOut>
                <Button className="text-16 w-full bg-orange-1 font-extrabold text-white-1">
                  <Link href="/sign-in">Sign in</Link>
                </Button>
              </SignedOut>
              <SignedIn>
                <Button className="text-16 w-full bg-orange-1 font-extrabold text-white-1" onClick={() => signOut(() => router.push('/'))}>
                  Log Out
                </Button>
              </SignedIn>
            </div>
          </div>
        </SheetContent>   
      </Sheet> 
    </section>
  )
}

export default MobileNav;
