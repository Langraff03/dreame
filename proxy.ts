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

export function proxy(req: NextRequest) {
  const ua = req.headers.get("user-agent") || ""

  if (blockedAgents.some((re) => re.test(ua))) {
    return new NextResponse("Acesso Negado", { status: 403 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}
