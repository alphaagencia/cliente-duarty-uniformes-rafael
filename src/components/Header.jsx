import { useEffect, useState } from 'react'
import { Wordmark } from './Brand'
import { waLink } from '../config'

const NAV = [
  ['Sobre', '#sobre'],
  ['Uniformes', '#uniformes'],
  ['Streetwear', '#streetwear'],
  ['Processo', '#processo'],
  ['Portfólio', '#portfolio'],
  ['FAQ', '#faq'],
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/[0.07] bg-ink/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="section-pad flex h-16 items-center justify-between sm:h-20">
        <a href="#top" aria-label="Duarty — início">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-mute transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden py-2.5 text-[13px] sm:inline-flex"
          >
            Orçamento no WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-6">
              <span className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-6 bg-white transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {/* menu mobile */}
      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-ink/95 backdrop-blur-md lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        } transition-[max-height] duration-300`}
      >
        <nav className="section-pad flex flex-col gap-1 py-4">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-white/[0.05] py-3 text-sm font-medium text-tech"
            >
              {label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-3"
          >
            Solicitar orçamento pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
