import { useState } from 'react'
import { Reveal, SectionHeading, Eyebrow } from './ui'
import { waLink } from '../config'

import aboutImg from '../assets/img/about-embroidery.webp'
import prodCamiseta from '../assets/img/prod-camiseta.webp'
import prodMoletom from '../assets/img/prod-moletom.webp'
import prodCalca from '../assets/img/prod-calca.webp'
import prodBermuda from '../assets/img/prod-bermuda.webp'
import prodBone from '../assets/img/prod-bone.webp'
import empAlphafit from '../assets/img/emp-alphafit.webp'
import empPlanosabor from '../assets/img/emp-planosabor.webp'
import empJcar from '../assets/img/emp-jcar.webp'
import empHp from '../assets/img/emp-hp.webp'
import empBo from '../assets/img/emp-bo.webp'
import empTerceirao from '../assets/img/emp-terceirao.webp'
import streetGrimace from '../assets/img/street-grimace.webp'
import streetTerceirao from '../assets/img/street-terceirao-back.webp'
import streetBack from '../assets/img/street-back-graphic.webp'
import streetBlack from '../assets/img/street-black.webp'
import procFolded from '../assets/img/proc-folded.webp'
import procBulk from '../assets/img/proc-bulk.webp'
import procVan from '../assets/img/proc-van.webp'
import procPress from '../assets/img/proc-press.webp'
import fb1 from '../assets/img/fb-1.webp'
import fb2 from '../assets/img/fb-2.webp'
import fb3 from '../assets/img/fb-3.webp'
import port3 from '../assets/img/port-3.webp'
import port4 from '../assets/img/port-4.webp'
import port5 from '../assets/img/port-5.webp'
import port6 from '../assets/img/port-6.webp'

/* ---------- Faixa de confiança ---------- */
const PILARES = [
  'Fabricação própria (corte, costura, estampa)',
  'Estampa DTF de alta definição',
  'Sem quantidade mínima',
  'Descontos progressivos a cada 10 peças',
  'Entrega grátis em Canela e Gramado',
  'Envio para todo o Brasil',
]

export function TrustBar() {
  return (
    <section aria-label="Pilares de confiança" className="border-y border-white/[0.06] bg-graphite/40">
      <div className="section-pad flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-center">
        {PILARES.map((p) => (
          <span key={p} className="flex items-center gap-2.5 text-[13px] font-medium text-mute">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
            {p}
          </span>
        ))}
      </div>
    </section>
  )
}

/* ---------- Sobre ---------- */
export function About() {
  return (
    <section id="sobre" className="section-pad py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="order-2 md:order-1">
          <div className="relative overflow-hidden rounded-sm border border-white/10">
            <img
              src={aboutImg}
              alt="Close-up de moletom Duarty com bordado do monograma"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="h-[5px] w-8 bg-red" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90">
                Acabamento
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 md:order-2">
          <SectionHeading eyebrow="Sobre a marca">
            Mais que uniforme.<br />
            <span className="text-mute">Presença de marca.</span>
          </SectionHeading>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-mute">
            <p>
              A Duarty cria uniformes personalizados e peças streetwear para marcas que querem ser
              vistas com mais presença, padrão e identidade.
            </p>
            <p>
              O foco vai além de vestir uma equipe. Cada peça precisa representar a empresa,
              reforçar a percepção de organização e ajudar a marca a se apresentar com mais
              confiança.
            </p>
            <p className="border-l-2 border-red pl-5 text-tech">
              Uniforme também comunica. E quando bem pensado, ele fortalece a forma como sua
              empresa é percebida.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- O que a Duarty produz ---------- */
const PRODUTOS = [
  { img: prodCamiseta, t: 'Camisetas personalizadas', d: 'Fio 30.1 penteado, 100% algodão. Para equipes, eventos, negócios locais e marcas em crescimento.' },
  { img: prodMoletom, t: 'Moletons personalizados', d: 'Alta qualidade, três cabos grossos e gramatura 350. Peças de presença para equipes e coleções.' },
  { img: prodCalca, t: 'Calças personalizadas', d: 'Conforto e caimento urbano, com malhas técnicas e acabamento premium para compor o uniforme.' },
  { img: prodBermuda, t: 'Bermudas personalizadas', d: 'Opção leve e versátil para equipes, eventos e ações, com a mesma qualidade de acabamento.' },
  { img: prodBone, t: 'Bonés personalizados', d: 'Complemento visual para uniformes, marcas, eventos e identidade de equipe.' },
]

export function Products() {
  return (
    <section id="produtos" className="section-pad py-20 md:py-28">
      <Reveal>
        <SectionHeading eyebrow="O que a Duarty produz">
          Uniformes e peças personalizadas para diferentes necessidades.
        </SectionHeading>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute">
          Da empresa que precisa padronizar a equipe à marca que quer criar peças com identidade,
          a Duarty desenvolve soluções com estampa DTF de alta definição, malhas técnicas
          (PV, Dry Fit e poliamida) e acabamento premium.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUTOS.map((p, i) => (
          <Reveal key={p.t} delay={(i % 3) * 0.08}>
            <article className="group relative h-full overflow-hidden rounded-sm border border-white/[0.08] bg-graphite/50 transition-colors hover:border-white/20">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.t}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/10 to-transparent" />
                <span className="absolute left-4 top-4 text-[11px] font-bold text-red">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-white">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{p.d}</p>
              </div>
            </article>
          </Reveal>
        ))}

        {/* card CTA */}
        <Reveal delay={0.16}>
          <div className="flex h-full flex-col justify-between rounded-sm border border-red/25 bg-red/[0.04] p-6">
            <div>
              <span className="eyebrow mb-4">Personalização</span>
              <p className="font-display text-xl font-bold leading-snug text-white">
                Tem uma ideia diferente? A gente desenvolve com você.
              </p>
            </div>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">
              Montar meu orçamento
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Uniformes para empresas ---------- */
const APLICACOES = [
  'Lojas e comércios locais',
  'Barbearias, salões e estúdios',
  'Restaurantes, cafeterias e bares',
  'Equipes de atendimento',
  'Prestadores de serviço',
  'Eventos e ações promocionais',
  'Marcas e empreendedores',
]
const EMP_FOTOS = [
  { img: empAlphafit, alt: 'Moletons personalizados AlphaFit vestidos por clientes' },
  { img: empPlanosabor, alt: 'Camiseta personalizada Plano com Sabor' },
  { img: empJcar, alt: 'Moletom personalizado JCar Auto Center' },
  { img: empTerceirao, alt: 'Peça personalizada de turma' },
  { img: empHp, alt: 'Uniformes personalizados HP Climatização' },
  { img: empBo, alt: 'Camisetas personalizadas para equipe' },
]

export function Empresas() {
  return (
    <section id="uniformes" className="border-y border-white/[0.06] bg-graphite/30 py-20 md:py-28">
      <div className="section-pad grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading eyebrow="Uniformes para empresas">
            Sua empresa vestida com padrão.
          </SectionHeading>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-mute">
            <p>
              Antes mesmo do atendimento começar, a forma como sua equipe se apresenta transmite
              organização, confiança e profissionalismo.
            </p>
            <p>
              A Duarty desenvolve uniformes personalizados para empresas que querem fortalecer sua
              imagem, padronizar sua equipe e apresentar melhor sua marca no dia a dia.
            </p>
          </div>

          <ul className="mt-8 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {APLICACOES.map((a) => (
              <li key={a} className="flex items-center gap-2.5 text-sm text-tech">
                <span className="h-px w-4 shrink-0 bg-red" />
                {a}
              </li>
            ))}
          </ul>

          <a href={waLink('Olá, vim pelo site e gostaria de criar uniformes personalizados para minha empresa. Pode me ajudar?')}
            target="_blank" rel="noopener noreferrer" className="btn-primary mt-9">
            Criar uniforme para minha empresa
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {EMP_FOTOS.map((f) => (
              <div key={f.alt} className="overflow-hidden rounded-sm border border-white/[0.08]">
                <img src={f.img} alt={f.alt} className="aspect-square w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-mute/60">
            Peças reais produzidas pela Duarty para empresas e equipes.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Clientes / prova social ---------- */
const CLIENTES = [
  'Alpha Fit', 'Studio G4', 'Ponto do Corpo', 'Life System',
  'Terceirão', 'Dakar Peças', 'Garagem 222', 'CP Calhas',
]

export function Clientes() {
  return (
    <section className="section-pad py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <Eyebrow className="mb-5">Prova de confiança</Eyebrow>
          <p className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            Marcas e equipes que já vestiram a Duarty.
          </p>
          <div className="mt-7 flex gap-10">
            <div>
              <p className="font-display text-4xl font-bold text-white">2<span className="text-red">.</span></p>
              <p className="mt-1 text-xs text-mute">anos de mercado</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-white">150<span className="text-red">+</span></p>
              <p className="mt-1 text-xs text-mute">clientes atendidos</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/[0.08] sm:grid-cols-4">
            {CLIENTES.map((c) => (
              <li
                key={c}
                className="flex min-h-[84px] items-center justify-center bg-graphite/40 px-4 py-6 text-center text-sm font-semibold text-tech"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-mute/60">
            Nomes citados com autorização. Mais de 200 moletons vendidos só na linha Terceirão.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Streetwear ---------- */
export function Streetwear() {
  return (
    <section id="streetwear" className="section-pad py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <div className="grid grid-cols-2 gap-3">
            <img src={streetBlack} alt="Peça streetwear Duarty em produção urbana" className="col-span-2 aspect-[16/10] w-full rounded-sm border border-white/[0.08] object-cover" loading="lazy" />
            <img src={streetGrimace} alt="Moletom streetwear com estampa nas costas" className="aspect-square w-full rounded-sm border border-white/[0.08] object-cover" loading="lazy" />
            <img src={streetBack} alt="Camiseta streetwear com grafismo autoral" className="aspect-square w-full rounded-sm border border-white/[0.08] object-cover" loading="lazy" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading eyebrow="Streetwear autoral">
            Streetwear com identidade Duarty.
          </SectionHeading>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-mute">
            <p>
              Além dos uniformes personalizados, a Duarty também carrega uma estética própria de
              streetwear: urbana, forte, direta e visualmente marcante.
            </p>
            <p>
              Essa linguagem influencia o acabamento, a presença e o estilo das peças, criando uma
              marca que transita entre o profissional e o urbano com autenticidade.
            </p>
            <p className="border-l-2 border-red pl-5 text-tech">
              A mesma atitude do streetwear aplicada à presença visual da sua marca.
            </p>
          </div>
          <a href={waLink('Olá, vim pelo site e gostaria de conhecer as peças e referências streetwear da Duarty.')}
            target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8">
            Conhecer peças e referências
          </a>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Diferenciais ---------- */
const DIFERENCIAIS = [
  'Fabricação própria — do corte à costura e à estampa.',
  'Moletons de alta qualidade: três cabos grossos, gramatura 350.',
  'Camisetas em fio 30.1 penteado, 100% algodão.',
  'Malhas técnicas: PV, Dry Fit e poliamida.',
  'Estampa em DTF de alta definição e durabilidade.',
  'Tamanhos do infantil ao adulto G4, com opção sob medida.',
  'Acabamento premium, peça a peça, feito com cuidado.',
  'Dois anos de mercado, entre 150 e 200 clientes atendidos.',
]

export function Diferenciais() {
  return (
    <section className="border-y border-white/[0.06] bg-graphite/30 py-20 md:py-28">
      <div className="section-pad">
        <Reveal>
          <SectionHeading eyebrow="Diferenciais">
            Padrão, presença e identidade em cada detalhe.
          </SectionHeading>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute">
            Criar um uniforme não é apenas escolher uma peça e aplicar uma logo. É entender como a
            marca deve ser percebida e transformar isso em uma apresentação visual mais forte.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-px sm:grid-cols-2">
          {DIFERENCIAIS.map((d, i) => (
            <Reveal key={d} delay={(i % 2) * 0.06}>
              <div className="flex items-start gap-4 border-t border-white/[0.07] py-5">
                <span className="mt-0.5 font-display text-sm font-bold text-red">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[15px] leading-relaxed text-tech">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 font-display text-xl font-medium text-white sm:text-2xl">
          A sua equipe não precisa apenas estar vestida.{' '}
          <span className="text-mute">Ela precisa estar bem apresentada.</span>
        </p>
      </div>
    </section>
  )
}

/* ---------- Processo ---------- */
const ETAPAS = [
  { img: procFolded, t: 'Briefing', d: 'Entendemos sua empresa, sua ideia, o tipo de peça desejada, referências e objetivo da personalização.' },
  { img: procPress, t: 'Arte e alinhamento', d: 'Organizamos a aplicação visual, avaliamos posição da marca, cores, contraste e detalhes da personalização.' },
  { img: procBulk, t: 'Produção', d: 'Após aprovação, as peças seguem para personalização conforme o escopo definido no orçamento.' },
  { img: procVan, t: 'Entrega', d: 'A equipe informa prazos, condições e forma de entrega conforme o pedido combinado.' },
]

export function Processo() {
  return (
    <section id="processo" className="section-pad py-20 md:py-28">
      <Reveal>
        <SectionHeading eyebrow="Como funciona">
          Da ideia à peça pronta.
        </SectionHeading>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute">
          O processo da Duarty foi pensado para facilitar a criação de uniformes personalizados com
          clareza, orientação e atenção aos detalhes.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ETAPAS.map((e, i) => (
          <Reveal key={e.t} delay={i * 0.08}>
            <article className="group h-full overflow-hidden rounded-sm border border-white/[0.08] bg-graphite/50">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={e.img} alt={e.t} className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/20 to-transparent" />
                <span className="absolute left-4 top-3 font-display text-3xl font-bold text-white/90">
                  {i + 1}
                </span>
              </div>
              <div className="p-5">
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-white">
                  <span className="h-px w-4 bg-red" />
                  {e.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{e.d}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Começar meu orçamento
        </a>
      </div>
    </section>
  )
}

/* ---------- Portfólio ---------- */
const PORT = [
  { img: streetTerceirao, alt: 'Moletom com estampa autoral nas costas', span: 'row-span-2' },
  { img: port5, alt: 'Uniforme personalizado vestido em ambiente urbano', span: '' },
  { img: port3, alt: 'Moletom preto com bordado' , span: '' },
  { img: port6, alt: 'Boné personalizado Duarty', span: '' },
  { img: port4, alt: 'Detalhe de moletom com estampa', span: '' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-white/[0.06] bg-graphite/30 py-20 md:py-28">
      <div className="section-pad">
        <Reveal>
          <SectionHeading eyebrow="Portfólio">
            Peças que representam marcas reais.
          </SectionHeading>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute">
            Veja exemplos de uniformes, peças personalizadas, aplicações, bordados e detalhes
            produzidos pela Duarty.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] lg:grid-cols-4">
            {PORT.map((p) => (
              <div key={p.alt} className={`overflow-hidden rounded-sm border border-white/[0.08] ${p.span}`}>
                <img src={p.img} alt={p.alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10">
          <a href={waLink('Olá, vim pelo site da Duarty e gostaria de ver mais referências de peças.')}
            target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Ver referências pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------- Feedbacks reais ---------- */
const FEEDBACKS = [fb1, fb2, fb3]

export function Feedbacks() {
  return (
    <section className="section-pad py-20 md:py-24">
      <Reveal>
        <Eyebrow className="mb-5">Feedbacks reais</Eyebrow>
        <h2 className="max-w-2xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
          Conversas de quem já vestiu a marca com a Duarty.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {FEEDBACKS.map((f, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="flex aspect-[9/16] items-center justify-center overflow-hidden rounded-sm border border-white/[0.08] bg-ink p-2">
              <img
                src={f}
                alt="Print de feedback real de cliente da Duarty pelo WhatsApp"
                className="h-full w-full rounded-sm object-contain"
                loading="lazy"
              />
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-5 text-xs text-mute/60">Feedbacks reais enviados por clientes. Prints autorizados.</p>
    </section>
  )
}

/* ---------- FAQ ---------- */
const FAQS = [
  ['A Duarty faz uniformes personalizados para empresas?', 'Sim. A Duarty cria uniformes personalizados para empresas, equipes, marcas, eventos e empreendedores que querem transmitir mais padrão, presença e identidade.'],
  ['Quais peças e personalização vocês oferecem?', 'Camisetas, moletons, calças, bermudas e bonés, com estampa em DTF de alta definição. Trabalhamos com malhas PV, Dry Fit e poliamida.'],
  ['Existe quantidade mínima?', 'Não há quantidade mínima. E o preço melhora conforme o volume: aplicamos descontos progressivos a cada 10 peças.'],
  ['Quanto tempo leva para produzir?', 'A média atual gira em torno de 25 a 30 dias, podendo variar conforme a demanda e a personalização. A previsão exata é confirmada no atendimento.'],
  ['Quais as formas de pagamento?', '5% de desconto à vista, 2x sem juros, ou até 12x com a taxa da máquina (usamos uma das taxas mais baixas do mercado). Emitimos nota fiscal quando necessário.'],
  ['Vocês entregam ou enviam?', 'Entrega grátis em Canela e Gramado. Para o restante do país, enviamos para todo o Brasil.'],
  ['A Duarty tem fabricação própria?', 'Sim. Toda a produção é própria — do corte à costura e à estampa —, o que garante padrão e acabamento premium em cada peça. Trabalhamos do tamanho infantil ao adulto G4, com opção sob medida.'],
]

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="border-t border-white/[0.06] bg-graphite/30 py-20 md:py-28">
      <div className="section-pad grid gap-10 md:grid-cols-[0.6fr_1fr] md:gap-16">
        <Reveal>
          <SectionHeading eyebrow="FAQ">Dúvidas frequentes.</SectionHeading>
          <p className="mt-6 text-base leading-relaxed text-mute">
            Não achou sua resposta? Fale direto com a Duarty pelo WhatsApp.
          </p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6">
            Falar com a Duarty
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-white/[0.07] border-t border-white/[0.07]">
            {FAQS.map(([q, a], i) => {
              const isOpen = open === i
              return (
                <div key={q}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-medium text-white">{q}</span>
                    <span className={`grid h-6 w-6 shrink-0 place-items-center text-red transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                      <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-xl text-sm leading-relaxed text-mute">{a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- CTA final ---------- */
export function CTAFinal() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/10 blur-[120px] md:block" />
      <div className="section-pad relative text-center">
        <Reveal>
          <span className="eyebrow mb-6 justify-center">Vamos começar</span>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Sua marca merece aparecer com mais{' '}
            <span className="relative whitespace-nowrap">presença
              <span className="absolute -bottom-1.5 left-0 h-[5px] w-full bg-red" />
            </span>.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-mute">
            Fale com a Duarty pelo WhatsApp e solicite um orçamento para criar uniformes
            personalizados com identidade, padrão e acabamento profissional.
          </p>
          <div className="mt-9 flex justify-center">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
              Solicitar orçamento pelo WhatsApp
            </a>
          </div>
          <p className="mx-auto mt-6 max-w-md text-xs text-mute/70">
            Envie sua ideia, tipo de peça, quantidade desejada e referência da personalização.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
