/* Client-side deterrent: anti-clone/anti-devtools with mobile-safe checks */
"use client"

import { useEffect } from "react"

const BLOCK_HTML = "<h1>Acesso Negado</h1><p>Ferramentas de clonagem nao sao permitidas.</p>"
const uaBlocked = [
  /HTTrack/i,
  /WebCopier/i,
  /Teleport Pro/i,
  /Offline Explorer/i,
  /SiteSucker/i,
  /SaveWeb2Zip/i,
  /WebZip/i,
  /WebStripper/i,
  /WebClone/i,
  /Wget/i,
  /curl/i,
  /python-requests/i,
  /Go-http-client/i,
  /axios/i,
  /HeadlessChrome/i,
  /Puppeteer/i,
  /Playwright/i,
]

export function Protection() {
  useEffect(() => {
    const isMobile = (() => {
      try {
        return (navigator.maxTouchPoints ?? 0) > 0 || /Mobile|Android|iP(hone|ad)/i.test(navigator.userAgent)
      } catch {
        return false
      }
    })()

    const blockPage = (html: string) => {
      document.body.innerHTML = html || BLOCK_HTML
      const s = document.body.style
      s.backgroundColor = "#f00"
      s.color = "#fff"
      s.textAlign = "center"
      s.paddingTop = "50px"
      document.documentElement.style.visibility = "visible"
    }

    if (location.protocol === "file:") {
      blockPage("<h1>Acesso Negado</h1><p>Host nao autorizado.</p>")
      return
    }

    if (uaBlocked.some((re) => re.test(navigator.userAgent))) {
      blockPage("<h1>Acesso Negado</h1><p>UA bloqueado.</p>")
      return
    }

    let headlessScore = 0
    try {
      if (navigator.webdriver) headlessScore += 2
      if (/HeadlessChrome|PhantomJS/i.test(navigator.userAgent)) headlessScore += 2
      if (!navigator.plugins?.length) headlessScore += 1
      if (!navigator.languages?.length) headlessScore += 1
      if (!isMobile && (window.outerWidth - window.innerWidth > 240 || window.outerHeight - window.innerHeight > 240)) {
        headlessScore += 1
      }
    } catch {
      headlessScore = 0
    }
    if (headlessScore >= 3) {
      blockPage("<h1>Acesso restrito</h1><p>Navegador automatizado detectado.</p>")
      return
    }

    const disableSelect = () => {
      const s = document.body.style
      s.userSelect = "none"
      s.webkitUserSelect = "none"
      s.mozUserSelect = "none"
      s.msUserSelect = "none"
    }
    disableSelect()

    const observer = new MutationObserver(disableSelect)
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] })

    const blockDefault = (e: Event) => e.preventDefault()
    ;["contextmenu", "copy", "cut", "paste", "dragstart"].forEach((ev) =>
      document.addEventListener(ev, blockDefault),
    )

    const beforePrint = () => {
      document.body.dataset.restoreDisplay = document.body.style.display || ""
      document.body.style.display = "none"
    }
    const afterPrint = () => {
      document.body.style.display = document.body.dataset.restoreDisplay || ""
    }
    window.addEventListener("beforeprint", beforePrint)
    window.addEventListener("afterprint", afterPrint)

    return () => {
      ;["contextmenu", "copy", "cut", "paste", "dragstart"].forEach((ev) =>
        document.removeEventListener(ev, blockDefault),
      )
      observer.disconnect()
      window.removeEventListener("beforeprint", beforePrint)
      window.removeEventListener("afterprint", afterPrint)
    }
  }, [])

  return null
}
