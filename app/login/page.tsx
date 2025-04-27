import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md flex flex-col items-center justify-center">
        <LoginForm />
      </div>
    </div>
  )
}
