import { Suspense } from "react";
import { Dashboard } from "@/components/dashboard"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Suspense>
        <Dashboard />
      </Suspense>
    </main>
  )
}
