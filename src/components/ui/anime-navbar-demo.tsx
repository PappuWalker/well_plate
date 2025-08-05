"use client"

import * as React from "react"
import { Home, Search, Info, ShoppingCart } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const items = [
  { name: "Wellplate", url: "/" },
  { name: "Home", url: "/", icon: Home },
  { name: "Search", url: "/search", icon: Search },
  { name: "About", url: "/about", icon: Info },
  { name: "Cart", url: "/cart", icon: ShoppingCart },
  { name: "Login", url: "/login" },
]

export function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Wellplate" />
}
