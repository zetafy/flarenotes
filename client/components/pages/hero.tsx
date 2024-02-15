"use client"
import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroHeader } from "@/config/contents"
import { BsDisplay } from "react-icons/bs"
import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold lg:text-6xl">
            <ReactTyped strings={["Welcome to Flarenotes"]} typeSpeed={110} loop backDelay={4500} />
          </h1>
          <h2 className="text-lg font-light text-muted-foreground lg:text-3xl">
            {heroHeader.subheader}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/redpangilinan/next-shadcn-landing"
            target="_blank"
            className={`w-[10rem] ${cn(buttonVariants({ size: "lg" }))} hover: white`}
            style={{ display: "flex" }}
          >
            Explore
          </Link>
          <Link
            href="http://localhost:3000/login"
            target="_blank"
            className={`w-[10rem] ${cn(buttonVariants({ size: "lg" }))}`}

          >
            Create
          </Link>

        </div>

      </div>


    </section>
  )
}
