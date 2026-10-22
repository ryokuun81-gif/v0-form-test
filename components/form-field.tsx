import type { ReactNode } from 'react'
import { Label } from '@/components/ui/label'

type FormFieldProps = {
  id?: string
  label: string
  required?: boolean
  hint?: string
  children: ReactNode
  as?: 'div' | 'fieldset'
}

export function RequiredBadge({ required }: { required?: boolean }) {
  return required ? (
    <span className="rounded-sm bg-primary px-1.5 py-0.5 text-[10px] font-bold leading-none text-primary-foreground">
      必須
    </span>
  ) : (
    <span className="rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] font-medium leading-none text-muted-foreground">
      任意
    </span>
  )
}

export function FormField({
  id,
  label,
  required,
  hint,
  children,
  as = 'div',
}: FormFieldProps) {
  if (as === 'fieldset') {
    return (
      <fieldset className="flex flex-col gap-2.5">
        <legend className="mb-2.5 flex items-center gap-2 text-sm font-medium">
          {label}
          <RequiredBadge required={required} />
        </legend>
        {children}
        {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      </fieldset>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="flex items-center gap-2">
        {label}
        <RequiredBadge required={required} />
      </Label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  )
}
