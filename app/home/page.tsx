"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertTriangle, BarChart3, Plus, Shield } from "lucide-react"
import { AppHeader } from "@/components/app-header"

export default function HomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [loading, user, router])

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-12 w-48 mb-8" />
          <Skeleton className="h-8 w-full max-w-md mb-4" />
          <Skeleton className="h-4 w-full max-w-sm mb-8" />
          <div className="grid gap-6 md:grid-cols-3">
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-40 w-full rounded-lg" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader user={user} />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome, {user?.displayName || "User"}</h1>
          <p className="text-muted-foreground">Monitor and manage AI safety incidents from your dashboard</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <span>Recent Incidents</span>
              </CardTitle>
              <CardDescription>Latest reported safety issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-sm text-muted-foreground">2 high severity in the last week</p>
              <Link
                href="/dashboard"
                className="text-primary text-sm mt-4 inline-block hover:underline transition-colors"
              >
                View all incidents
              </Link>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                <span>Incident Trends</span>
              </CardTitle>
              <CardDescription>Monthly incident statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">↓ 12%</div>
              <p className="text-sm text-muted-foreground">Decrease in high severity incidents</p>
              <Link
                href="/dashboard"
                className="text-primary text-sm mt-4 inline-block hover:underline transition-colors"
              >
                View analytics
              </Link>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span>Safety Score</span>
              </CardTitle>
              <CardDescription>Overall safety assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">B+</div>
              <p className="text-sm text-muted-foreground">Improved from C last quarter</p>
              <Link
                href="/dashboard"
                className="text-primary text-sm mt-4 inline-block hover:underline transition-colors"
              >
                View details
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="w-full sm:w-auto transition-transform hover:scale-105">
              <Shield className="mr-2 h-4 w-4" /> View Dashboard
            </Button>
          </Link>
          <Link href="/dashboard?tab=report">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Plus className="mr-2 h-4 w-4" /> Report New Incident
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
