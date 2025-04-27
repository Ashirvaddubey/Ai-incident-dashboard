import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md flex flex-col items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  )
}
