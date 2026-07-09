// Injeta o HTML da App no dist/index.html depois do build.
// Resultado: o navegador pinta a hero sem esperar o JS (FCP/LCP muito menores).
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const ssrEntry = path.resolve('dist-ssr/entry-server.js')

const { render } = await import(pathToFileURL(ssrEntry).href)
const appHtml = render()

const indexPath = path.join(dist, 'index.html')
const html = fs.readFileSync(indexPath, 'utf8')

if (!html.includes('<div id="root"></div>')) {
  throw new Error('prerender: <div id="root"></div> não encontrado em dist/index.html')
}

fs.writeFileSync(indexPath, html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`))
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true })

console.log(`prerender: index.html com ${(appHtml.length / 1024).toFixed(1)}KB de HTML estático`)
