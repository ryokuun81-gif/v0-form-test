'use client'

import { useState } from 'react'
import { Home, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { FormField } from '@/components/form-field'
import { VisitFields } from '@/components/visit-fields'
import { StayFields } from '@/components/stay-fields'
import { cn } from '@/lib/utils'

type ApplicationType = '見学' | '宿泊体験'

const applicationTypes: {
  value: ApplicationType
  description: string
  icon: typeof Home
}[] = [
  { value: '見学', description: '約60〜90分で館内をご案内', icon: Home },
  { value: '宿泊体験', description: '実際に一晩お過ごしいただけます', icon: Moon },
]

function SectionHeading({ step, title }: { step: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-serif text-sm text-primary">{step}</span>
      <h2 className="font-serif text-lg font-bold tracking-wide">{title}</h2>
    </div>
  )
}

export function ApplicationForm() {
  const [applicationType, setApplicationType] = useState<ApplicationType | ''>('')

  return (
    <form method="post" action="#" className="flex flex-col gap-10">
      <section className="flex flex-col gap-6" aria-label="お申込み種別">
        <SectionHeading step="01" title="お申込み種別" />
        <FormField as="fieldset" label="申込種別" required>
          <RadioGroup
            name="申込種別"
            required
            value={applicationType}
            onValueChange={(value) => setApplicationType(value as ApplicationType)}
            className="grid gap-3 sm:grid-cols-2"
          >
            {applicationTypes.map(({ value, description, icon: Icon }) => {
              const checked = applicationType === value
              return (
                <Label
                  key={value}
                  className={cn(
                    'flex cursor-pointer items-start gap-3 rounded-lg border bg-card p-4 transition-colors hover:border-primary/50',
                    checked && 'border-primary bg-secondary',
                  )}
                >
                  <RadioGroupItem value={value} className="mt-0.5" />
                  <span className="flex flex-col gap-1">
                    <span className="flex items-center gap-1.5 text-base font-medium">
                      <Icon className="size-4 text-primary" aria-hidden="true" />
                      {value}
                    </span>
                    <span className="text-xs font-normal text-muted-foreground">
                      {description}
                    </span>
                  </span>
                </Label>
              )
            })}
          </RadioGroup>
        </FormField>
      </section>

      {applicationType === '見学' && (
        <section className="flex flex-col gap-6" aria-label="見学のご希望">
          <SectionHeading step="02" title="見学のご希望" />
          <VisitFields />
        </section>
      )}

      {applicationType === '宿泊体験' && (
        <section className="flex flex-col gap-6" aria-label="宿泊体験のご希望">
          <SectionHeading step="02" title="宿泊体験のご希望" />
          <StayFields />
        </section>
      )}

      <Separator />

      <section className="flex flex-col gap-6" aria-label="お客様情報">
        <SectionHeading step={applicationType ? '03' : '02'} title="お客様情報" />
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField id="name" label="お名前" required>
            <Input
              id="name"
              name="お名前"
              required
              autoComplete="name"
              placeholder="山田 太郎"
            />
          </FormField>
          <FormField id="furigana" label="フリガナ" required>
            <Input
              id="furigana"
              name="フリガナ"
              required
              placeholder="ヤマダ タロウ"
            />
          </FormField>
          <FormField id="email" label="メールアドレス" required>
            <Input
              id="email"
              name="メールアドレス"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder="example@mail.com"
            />
          </FormField>
          <FormField id="tel" label="電話番号" required>
            <Input
              id="tel"
              name="電話番号"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="090-1234-5678"
            />
          </FormField>
        </div>
        <FormField id="note" label="備考" hint="ご質問やご要望などがございましたらご記入ください。">
          <Textarea
            id="note"
            name="備考"
            rows={4}
            placeholder="例）小さな子ども連れで伺います。"
          />
        </FormField>
      </section>

      <div className="flex flex-col gap-4 rounded-lg bg-secondary/70 p-5">
        <p className="text-xs leading-relaxed text-muted-foreground">
          ご入力いただいた個人情報は、お申込みへの対応およびご連絡の目的にのみ使用し、ご本人の同意なく第三者へ提供することはありません。
        </p>
        <Label className="flex cursor-pointer items-center gap-3 text-sm">
          <Checkbox name="個人情報の取り扱いへの同意" value="同意する" required />
          <span>
            個人情報の取り扱いに同意する
            <span className="ml-2 rounded-sm bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">
              必須
            </span>
          </span>
        </Label>
      </div>

      <Button type="submit" size="lg" className="h-12 w-full text-base sm:mx-auto sm:w-72">
        この内容で申し込む
      </Button>
    </form>
  )
}
