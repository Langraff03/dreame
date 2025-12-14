/* Client-side deterrent: anti-clone/anti-devtools with mobile-safe checks */
"use client"

import { useEffect } from "react"

const BLOCK_HTML = "<h1>Acesso Negado</h1><p>Ferramentas de clonagem nao sao permitidas.</p>"
const allowedHosts = [
  "localhost",
  "127.0.0.1",
  "[::1]",
  ".vercel.app",
  ".onrender.com",
  ".netlify.app",
  "ohneschmerzenleben.blog",
]

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

const isAllowedHost = (host: string | null) => {
  if (!host) return false
  return allowedHosts.some((entry) =>
    entry.startsWith(".") ? host.endsWith(entry) : host === entry,
  )
}

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

    if (location.protocol === "file:" || !isAllowedHost(location.hostname)) {
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

    const bait = new Image()
    let locked = false
    Object.defineProperty(bait, "id", {
      get() {
        locked = true
        blockPage("<h1>Acesso Negado</h1><p>DevTools bloqueado.</p>")
        return ""
      },
    })
    console.log(bait)

    const checkSize = () => {
      if (isMobile) return
      if (window.outerWidth - window.innerWidth > 220 || window.outerHeight - window.innerHeight > 220) {
        locked = true
        blockPage("<h1>Acesso Negado</h1><p>DevTools bloqueado.</p>")
      }
    }

    const interval = window.setInterval(() => {
      if (!locked) checkSize()
    }, 500)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "F12") e.preventDefault()
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) e.preventDefault()
      if (e.ctrlKey && ["U", "S", "P", "C"].includes(e.key)) e.preventDefault()
    }
    document.addEventListener("keydown", onKey)

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

    const fallback = window.setTimeout(() => {
      document.documentElement.style.visibility = "visible"
    }, 4000)
    document.documentElement.style.visibility = "hidden"

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(fallback)
      document.removeEventListener("keydown", onKey)
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
