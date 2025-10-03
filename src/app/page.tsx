import Content from '@/app/components/Content'
import { Github } from 'lucide-react'
import { Toaster } from '@/components/ui/toaster'
import { Suspense } from 'react'
export default function Home() {
  return (
    <div>
      <header className="shadow-sm shadow-rose-700 backdrop-blur-md sticky top-0 bg-[hsl(var(--background)/.6)]">
        <ul className="w-full flex justify-between py-4 px-8 bg-dark ">
          <li>
            <h1 className="font-bold">𝐿𝛩𝑅𝐷 𝛥𝐿𝛩𝛮𝐺⁩ INSTA</h1>
          </li>
          <li>
            <a
              href="https://github.com/newwangzhicheng/instagram-downloader"
              target="_blank"
            >
              <Github className="text-white" />
            </a>
          </li>
        </ul>
      </header>
      <main className="flex flex-col p-8">
        <Suspense>
          <Content />
        </Suspense>
      </main>
      <Toaster />
    </div>
  )
}
