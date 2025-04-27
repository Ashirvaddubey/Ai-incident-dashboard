"use client"

import type { Severity } from "@/lib/types"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

interface FilterControlsProps {
  severityFilter: Severity | "All"
  setSeverityFilter: (value: Severity | "All") => void
  sortOrder: "newest" | "oldest"
  setSortOrder: (value: "newest" | "oldest") => void
}

export function FilterControls({ severityFilter, setSeverityFilter, sortOrder, setSortOrder }: FilterControlsProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium mb-2 text-foreground">Filter by Severity</label>
            <Select value={severityFilter} onValueChange={(value) => setSeverityFilter(value as Severity | "All")}>
              <SelectTrigger className="transition-colors hover:border-primary focus:border-primary">
                <SelectValue placeholder="Select severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All" className="transition-colors hover:text-primary">
                  All Severities
                </SelectItem>
                <SelectItem value="Low" className="transition-colors hover:text-primary">
                  Low
                </SelectItem>
                <SelectItem value="Medium" className="transition-colors hover:text-primary">
                  Medium
                </SelectItem>
                <SelectItem value="High" className="transition-colors hover:text-primary">
                  High
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium mb-2 text-foreground">Sort by Date</label>
            <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as "newest" | "oldest")}>
              <SelectTrigger className="transition-colors hover:border-primary focus:border-primary">
                <SelectValue placeholder="Select sort order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest" className="transition-colors hover:text-primary">
                  Newest First
                </SelectItem>
                <SelectItem value="oldest" className="transition-colors hover:text-primary">
                  Oldest First
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
