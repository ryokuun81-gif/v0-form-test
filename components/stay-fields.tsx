import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FormField } from '@/components/form-field'

export function StayFields() {
  return (
    <div className="flex flex-col gap-6">
      <FormField id="stay-date" label="宿泊希望日" required hint="チェックイン 15:00 / チェックアウト 翌10:00">
        <Input id="stay-date" name="宿泊希望日" type="date" required className="sm:w-1/2" />
      </FormField>

      <div className="grid grid-cols-2 gap-6">
        <FormField id="adults" label="大人の人数" required>
          <div className="flex items-center gap-2">
            <Input
              id="adults"
              name="大人の人数"
              type="number"
              min={1}
              max={6}
              required
              inputMode="numeric"
              placeholder="2"
              className="w-24"
            />
            <span className="text-sm text-muted-foreground">名</span>
          </div>
        </FormField>
        <FormField id="children" label="子どもの人数">
          <div className="flex items-center gap-2">
            <Input
              id="children"
              name="子どもの人数"
              type="number"
              min={0}
              max={6}
              inputMode="numeric"
              placeholder="0"
              className="w-24"
            />
            <span className="text-sm text-muted-foreground">名</span>
          </div>
        </FormField>
      </div>

      <FormField id="family" label="ご家族構成" hint="お子さまの年齢などをご記入いただくと、寝具などの準備に役立ちます。">
        <Textarea
          id="family"
          name="ご家族構成"
          rows={3}
          placeholder="例）夫婦＋子ども2人（5歳・2歳）"
        />
      </FormField>
    </div>
  )
}
