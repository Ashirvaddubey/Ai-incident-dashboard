"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Shield } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { ThemeToggle } from "../theme-toggle"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast({
        title: "Login successful",
        description: "Welcome back to the AI Safety Dashboard",
      })
      router.push("/home")
    } catch (err: any) {
      console.error(err)
      let errorMessage = "Invalid email or password. Please try again."

      if (err.code === "auth/user-not-found") {
        errorMessage = "No account found with this email. Please register first."
      } else if (err.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again."
      } else if (err.code === "auth/too-many-requests") {
        errorMessage = "Too many failed login attempts. Please try again later."
      }

      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-end w-full max-w-md mb-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md transition-all duration-300 hover:shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">Sign in</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to access the dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="transition-colors focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-sm text-primary hover:underline transition-colors">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="transition-colors focus:border-primary"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full transition-transform hover:scale-105" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register" className="text-primary hover:underline transition-colors">
                Register
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
      <div className="mt-4">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
