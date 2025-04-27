"use client"

import type React from "react"

import { useState } from "react"
import type { Incident, Severity } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface IncidentFormProps {
  onSubmit: (incident: Omit<Incident, "id" | "reported_at">) => void
}

export function IncidentForm({ onSubmit }: IncidentFormProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [severity, setSeverity] = useState<Severity | "">("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!description.trim()) {
      newErrors.description = "Description is required"
    }

    if (!severity) {
      newErrors.severity = "Severity is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validate()) {
      if (severity === "High") {
        setShowConfirmDialog(true)
      } else {
        submitForm()
      }
    }
  }

  const submitForm = () => {
    setIsSubmitting(true)

    // Simulate network delay
    setTimeout(() => {
      onSubmit({
        title,
        description,
        severity: severity as Severity,
      })

      // Reset form
      setTitle("")
      setDescription("")
      setSeverity("")
      setErrors({})
      setSubmitted(true)
      setIsSubmitting(false)

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }, 1000)
  }

  return (
    <>
      <Card className="transition-all duration-300 hover:shadow-md">
        <CardHeader>
          <CardTitle>Report New AI Safety Incident</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {submitted && (
              <Alert className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>Incident reported successfully!</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter incident title"
                className={`transition-colors focus:border-primary ${errors.title ? "border-red-500" : ""}`}
              />
              {errors.title && (
                <p className="text-sm text-red-500 flex items-center mt-1">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.title}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the incident in detail"
                rows={5}
                className={`transition-colors focus:border-primary ${errors.description ? "border-red-500" : ""}`}
              />
              {errors.description && (
                <p className="text-sm text-red-500 flex items-center mt-1">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.description}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="severity">Severity</Label>
              <Select value={severity} onValueChange={(value) => setSeverity(value as Severity)}>
                <SelectTrigger
                  id="severity"
                  className={`transition-colors hover:border-primary focus:border-primary ${errors.severity ? "border-red-500" : ""}`}
                >
                  <SelectValue placeholder="Select severity level" />
                </SelectTrigger>
                <SelectContent>
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
              {errors.severity && (
                <p className="text-sm text-red-500 flex items-center mt-1">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.severity}
                </p>
              )}
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full transition-transform hover:scale-105" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm High Severity Incident</AlertDialogTitle>
            <AlertDialogDescription>
              You are about to report a high severity incident. High severity incidents require immediate attention and
              will be escalated to the safety team. Are you sure this incident should be classified as high severity?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={submitForm}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
