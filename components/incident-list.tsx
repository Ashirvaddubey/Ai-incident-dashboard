"use client"

import { useState } from "react"
import type { Incident } from "@/lib/types"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"

interface IncidentListProps {
  incidents: Incident[]
}

export function IncidentList({ incidents }: IncidentListProps) {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set())

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Low":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-800"
      case "High":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    }
  }

  if (incidents.length === 0) {
    return (
      <div className="text-center py-12 bg-card rounded-lg shadow border">
        <p className="text-muted-foreground">No incidents found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {incidents.map((incident) => (
        <Card key={incident.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
          <CardHeader className="bg-muted/50 py-4 px-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium">{incident.title}</h3>
                <p className="text-sm text-muted-foreground">{formatDate(incident.reported_at)}</p>
              </div>
              <Badge className={`${getSeverityColor(incident.severity)} transition-colors`}>{incident.severity}</Badge>
            </div>
          </CardHeader>

          {expandedIds.has(incident.id) && (
            <CardContent className="pt-4 animate-in fade-in-50 duration-300">
              <p className="text-foreground">{incident.description}</p>
            </CardContent>
          )}

          <CardFooter className="bg-card py-2 px-6 border-t">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleExpand(incident.id)}
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              {expandedIds.has(incident.id) ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Hide Details
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  View Details
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
