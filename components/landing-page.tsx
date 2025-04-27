import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, BarChart3, Shield, Users } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">AI Safety Dashboard</span>
          </div>
          <nav className="flex items-center gap-4 justify-center items-center h-full">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" className="transition-colors hover:text-primary hover:bg-primary/10">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="transition-transform hover:scale-105">Register</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center w-full container gap-6 py-20 text-center md:py-32">
        <div className="flex max-w-[980px] flex-col items-center gap-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Monitor & Report AI Safety Incidents
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            A comprehensive platform for tracking, reporting, and analyzing AI safety incidents to improve AI systems.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/register">
            <Button size="lg" className="h-12 px-8 transition-transform hover:scale-105">
              Get Started
            </Button>
          </Link>
          <Link href="/login">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            <CardHeader>
              <AlertTriangle className="h-10 w-10 text-primary" />
              <CardTitle>Incident Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Track and categorize AI safety incidents by severity, type, and impact.</CardDescription>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            <CardHeader>
              <BarChart3 className="h-10 w-10 text-primary" />
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Visualize incident trends and patterns to identify systemic issues.</CardDescription>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            <CardHeader>
              <Users className="h-10 w-10 text-primary" />
              <CardTitle>Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Work together with your team to document and address safety concerns.</CardDescription>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            <CardHeader>
              <Shield className="h-10 w-10 text-primary" />
              <CardTitle>Secure Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Confidentially report incidents with our secure authentication system.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background mt-auto">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Shield className="h-5 w-5" />
            <p className="text-center text-sm leading-loose md:text-left">
              © 2025 AI Safety Dashboard. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </div>
  )
}
