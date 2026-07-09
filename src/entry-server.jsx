import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Usado só no build (prerender.js) para gerar o HTML estático do index.
export function render() {
  return renderToString(<App />)
}
