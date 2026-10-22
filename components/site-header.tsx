import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="border-b bg-background/90">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-5">
        <Link href="/" className="font-serif text-lg font-bold tracking-widest">
          木の家 <span className="text-primary">モデルハウス</span>
        </Link>
      </div>
    </header>
  )
}
