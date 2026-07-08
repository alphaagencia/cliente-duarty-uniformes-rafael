// Marca Duarty — arte oficial (PNG transparente, branco + triângulo vermelho).
// Arquivos em /public: logo.png (horizontal DA + DUARTY) e monograma.png (símbolo DA).

export function Monogram({ className = '' }) {
  return <img src="/monograma.png" alt="" aria-hidden="true" className={className} />
}

export function Wordmark({ className = 'h-9 w-auto' }) {
  return (
    <img
      src="/logo.png"
      alt="Duarty — Uniformes Personalizados & Streetwear"
      className={className}
    />
  )
}
