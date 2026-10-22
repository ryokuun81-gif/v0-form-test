import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { FormField } from '@/components/form-field'

const timeSlots = [
  { value: '午前', detail: '10:00〜12:00' },
  { value: '午後', detail: '13:00〜17:00' },
]

export function VisitFields() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="visit-date-1" label="見学希望日（第1希望）" required>
          <Input id="visit-date-1" name="見学希望日_第1希望" type="date" required />
        </FormField>
        <FormField id="visit-date-2" label="見学希望日（第2希望）">
          <Input id="visit-date-2" name="見学希望日_第2希望" type="date" />
        </FormField>
      </div>

      <FormField as="fieldset" label="希望時間帯">
        <RadioGroup name="希望時間帯" className="flex flex-wrap gap-x-8 gap-y-3">
          {timeSlots.map(({ value, detail }) => (
            <Label key={value} className="flex cursor-pointer items-center gap-2.5 font-normal">
              <RadioGroupItem value={value} />
              <span className="font-medium">{value}</span>
              <span className="text-xs text-muted-foreground">{detail}</span>
            </Label>
          ))}
        </RadioGroup>
      </FormField>

      <FormField id="visit-people" label="参加人数">
        <div className="flex items-center gap-2">
          <Input
            id="visit-people"
            name="参加人数"
            type="number"
            min={1}
            max={10}
            inputMode="numeric"
            placeholder="2"
            className="w-24"
          />
          <span className="text-sm text-muted-foreground">名</span>
        </div>
      </FormField>
    </div>
  )
}
