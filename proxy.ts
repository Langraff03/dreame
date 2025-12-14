import { NextResponse, type NextRequest } from "next/server"

const blockedAgents = [
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

const allowedHosts = [
  "localhost",
  "127.0.0.1",
  "[::1]",
  ".vercel.app",
  ".onrender.com",
  ".netlify.app",
  "ohneschmerzenleben.blog",
]

const isAllowedHost = (host: string | null) => {
  if (!host) return false
  return allowedHosts.some((entry) =>
    entry.startsWith(".") ? host.endsWith(entry) : host === entry,
  )
}

export function proxy(req: NextRequest) {
  const ua = req.headers.get("user-agent") || ""
  const host = req.nextUrl.hostname

  if (blockedAgents.some((re) => re.test(ua))) {
    return new NextResponse("Acesso Negado", { status: 403 })
  }

  if (!isAllowedHost(host)) {
    return new NextResponse("Host nao autorizado", { status: 403 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}
