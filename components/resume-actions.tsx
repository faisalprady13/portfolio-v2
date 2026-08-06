"use client"

import * as React from "react"
import { ArrowLeft, DownloadIcon } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"

const PAGE_HEADER_TEXT = "Faisal Prady — Resume"
const PAGE_FOOTER_URL = "faisalprady.vercel.app/resume"

function formatDownloadedAt() {
  return new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  })
}

function buildPageStyles(downloadedAt: string) {
  return `
    @page {
      size: A4;
      margin: 20mm 15mm 16mm 15mm;

      @top-left {
        content: "${PAGE_HEADER_TEXT}";
        font-family: system-ui, sans-serif;
        font-size: 9px;
        color: #737373;
      }
      @top-right {
        content: "${downloadedAt}";
        font-family: system-ui, sans-serif;
        font-size: 9px;
        color: #737373;
      }
      @bottom-left {
        content: "${PAGE_FOOTER_URL}";
        font-family: system-ui, sans-serif;
        font-size: 9px;
        color: #a3a3a3;
      }
      @bottom-right {
        content: counter(page) "/" counter(pages);
        font-family: system-ui, sans-serif;
        font-size: 9px;
        color: #a3a3a3;
      }
    }
  `
}

export function ResumeActions() {
  const searchParams = useSearchParams()
  const styleRef = React.useRef<HTMLStyleElement>(null)

  const refreshPageStyles = React.useCallback(() => {
    if (styleRef.current) {
      styleRef.current.textContent = buildPageStyles(formatDownloadedAt())
    }
  }, [])

  const printResume = React.useCallback(() => {
    refreshPageStyles()
    window.print()
  }, [refreshPageStyles])

  React.useEffect(() => {
    refreshPageStyles()
  }, [refreshPageStyles])

  React.useEffect(() => {
    if (searchParams.get("print") === "1") {
      printResume()
    }
  }, [searchParams, printResume])

  return (
    <>
      <style ref={styleRef} />
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-neutral-200 bg-white/90 px-6 py-3 backdrop-blur-sm print:hidden">
        <Button
          variant="ghost"
          size="sm"
          nativeButton={false}
          render={<Link href="/" />}
          className="text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
        >
          <ArrowLeft />
          Back to home
        </Button>

        <Button
          size="sm"
          onClick={printResume}
          className="cursor-pointer bg-emerald-500 text-white hover:bg-emerald-600"
        >
          <DownloadIcon />
          Save PDF
        </Button>
      </div>
    </>
  )
}
