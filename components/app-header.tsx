"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Shield, User } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useToast } from "@/components/ui/use-toast"

interface AppHeaderProps {
  user: any
}

export function AppHeader({ user }: AppHeaderProps) {
  const [isSigningOut, setIsSigningOut] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSignOut = async () => {
    try {
      setIsSigningOut(true)
      await signOut(auth)
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account",
      })
      router.push("/")
    } catch (error) {
      console.error("Error signing out:", error)
      toast({
        title: "Sign out failed",
        description: "There was a problem signing out. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSigningOut(false)
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/home" className="flex items-center gap-2 transition-colors hover:text-primary">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">AI Safety Dashboard</span>
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/home">
            <Button variant="ghost" className="transition-colors hover:text-primary hover:bg-primary/10">
              Home
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="ghost" className="transition-colors hover:text-primary hover:bg-primary/10">
              Dashboard
            </Button>
          </Link>

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <User className="h-4 w-4" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{user?.displayName || user?.email || "User"}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile" className="cursor-pointer">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings" className="cursor-pointer">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleSignOut}
                disabled={isSigningOut}
                className="text-red-600 focus:text-red-600 cursor-pointer"
              >
                {isSigningOut ? "Signing out..." : "Sign out"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}
