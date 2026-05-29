import { CheckCircle2, Circle, CreditCard, Phone, Sparkles } from "lucide-react"

const steps = [
  { id: "phone", label: "Phone", icon: Phone },
  { id: "cnic-front", label: "CNIC Front", icon: CreditCard },
  { id: "cnic-back", label: "CNIC Back", icon: CreditCard },
  { id: "liveness", label: "Liveness", icon: Sparkles },
  { id: "success", label: "Success", icon: CheckCircle2 },
]

type VerificationStepperProps = {
  active: "phone" | "cnic-front" | "cnic-back" | "liveness" | "success"
}

export function VerificationStepper({ active }: VerificationStepperProps) {
  return (
    <div className="mt-10 rounded-[32px] border border-white/10 bg-white/80 p-4 shadow-2xl backdrop-blur-xl">
      <div className="flex min-w-full items-center justify-between gap-3 overflow-x-auto">
        {steps.map((step) => {
          const Icon = step.icon
          const isActive = active === step.id

          return (
            <div
              key={step.id}
              className="flex min-w-[110px] flex-col items-center gap-3 text-center"
            >
              <span
                className={`grid h-11 w-11 place-items-center rounded-2xl border text-sm transition-all duration-300 ${
                  isActive
                    ? "border-orange-500 bg-orange-500 text-white shadow-lg"
                    : "border-slate-200 bg-slate-100 text-slate-600"
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.32em] ${
                  isActive ? "text-slate-950" : "text-slate-500"
                }`}
              >
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
