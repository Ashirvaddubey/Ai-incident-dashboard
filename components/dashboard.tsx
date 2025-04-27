"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { IncidentList } from "./incident-list"
import { FilterControls } from "./filter-controls"
import { IncidentForm } from "./incident-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import type { Incident, Severity } from "@/lib/types"
import { mockIncidents } from "@/lib/data"
import { AppHeader } from "./app-header"
import { useAuth } from "@/components/auth/auth-provider"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

export function Dashboard() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents)
  const [severityFilter, setSeverityFilter] = useState<Severity | "All">("All")
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")
  const { user, loading } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")
  const { toast } = useToast()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [loading, user, router])

  const handleAddIncident = (newIncident: Omit<Incident, "id" | "reported_at">) => {
    const incident: Incident = {
      ...newIncident,
      id: Math.max(0, ...incidents.map((i) => i.id)) + 1,
      reported_at: new Date().toISOString(),
    }

    setIncidents((prev) => [incident, ...prev])

    toast({
      title: "Incident reported successfully",
      description: "Your incident has been added to the dashboard",
    })
  }

  const filteredIncidents = incidents.filter(
    (incident) => severityFilter === "All" || incident.severity === severityFilter,
  )

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime()
    const dateB = new Date(b.reported_at).getTime()
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB
  })

  if (loading || !user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-12 w-48 mb-8" />
        <Skeleton className="h-8 w-full max-w-md mb-4" />
        <Skeleton className="h-4 w-full max-w-sm mb-8" />
        <div className="grid gap-6">
          <Skeleton className="h-40 w-full rounded-lg" />
          <Skeleton className="h-40 w-full rounded-lg" />
          <Skeleton className="h-40 w-full rounded-lg" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <AppHeader user={user} />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-foreground">AI Safety Incident Dashboard</h1>

        <Tabs defaultValue={tabParam === "report" ? "report" : "incidents"} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger
              value="incidents"
              className="transition-colors hover:text-primary data-[state=active]:text-primary"
            >
              View Incidents
            </TabsTrigger>
            <TabsTrigger
              value="report"
              className="transition-colors hover:text-primary data-[state=active]:text-primary"
            >
              Report Incident
            </TabsTrigger>
          </TabsList>

          <TabsContent value="incidents" className="space-y-6">
            <FilterControls
              severityFilter={severityFilter}
              setSeverityFilter={setSeverityFilter}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />

            <IncidentList incidents={sortedIncidents} />
          </TabsContent>

          <TabsContent value="report">
            <IncidentForm onSubmit={handleAddIncident} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
