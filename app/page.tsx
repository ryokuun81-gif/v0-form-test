import { ApplicationForm } from '@/components/application-form'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const basePath = process.env.PAGES_BASE_PATH || ''

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative">
          <div className="relative h-56 overflow-hidden sm:h-72">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export with basePath */}
            <img
              src={`${basePath}/images/model-house.png`}
              alt="木の温もりを感じるモデルハウスの外観"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          <div className="mx-auto -mt-16 max-w-2xl px-5 sm:-mt-20">
            <div className="relative rounded-xl bg-card p-6 shadow-sm ring-1 ring-border sm:p-8">
              <p className="text-xs tracking-[0.2em] text-primary">RESERVATION</p>
              <h1 className="mt-2 text-balance font-serif text-2xl font-bold leading-snug sm:text-3xl">
                見学・宿泊体験のお申込み
              </h1>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                木の香りや光の入り方、家事動線まで。実際に過ごしてこそわかる住み心地を体感してください。お申込み後、担当者より日程確定のご連絡を差し上げます。
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
          <ApplicationForm />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
