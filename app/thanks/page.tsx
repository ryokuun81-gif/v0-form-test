import type { Metadata } from 'next'
import Link from 'next/link'
import { CircleCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'お申込み完了 | モデルハウス 見学・宿泊体験',
  robots: { index: false },
}

export default function ThanksPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[70svh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
        <CircleCheck className="size-12 text-accent" aria-hidden="true" />
        <h1 className="mt-6 font-serif text-2xl font-bold tracking-wide">
          お申込みを受け付けました
        </h1>
        <div className="mt-6 flex flex-col gap-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          <p>お申込みを受け付けました。確認メールをお送りしました。</p>
          <p>予約確定のご連絡は担当者より別途お送りします。</p>
        </div>
        <Button
          variant="outline"
          className="mt-10"
          nativeButton={false}
          render={<Link href="/" />}
        >
          トップへ戻る
        </Button>
      </main>
      <SiteFooter />
    </>
  )
}
