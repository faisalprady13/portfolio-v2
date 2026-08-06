import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { profile } from "@/lib/resume-data"

export const metadata = {
  title: "Privacy Policy — Faisal Prady",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-foreground/90">
          <p>
            This is a personal portfolio website. It doesn&apos;t have user
            accounts, doesn&apos;t run advertising, and doesn&apos;t sell or
            share personal data with third parties.
          </p>

          <section>
            <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
              Information collected
            </h2>
            <p className="mt-2">
              No forms on this site collect personal data. If you email me
              directly, I use that information only to reply to you.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
              Hosting &amp; server logs
            </h2>
            <p className="mt-2">
              This site is hosted on Vercel, which may log standard technical
              request data (such as IP address and browser user agent) for
              security and reliability purposes. This site itself doesn&apos;t
              use cookies or analytics scripts.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
              Third-party links
            </h2>
            <p className="mt-2">
              Some pages link out to third-party sites (for example, client
              projects or social profiles). Those sites have their own
              privacy practices, which this policy doesn&apos;t cover.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
              Contact
            </h2>
            <p className="mt-2">
              Questions about this policy can be sent to{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-foreground underline underline-offset-4 hover:text-muted-foreground"
              >
                {profile.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
