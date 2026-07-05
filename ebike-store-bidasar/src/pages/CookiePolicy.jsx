import LegalLayout from '../components/LegalLayout.jsx'

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" updated="July 2026">
      <p>
        This website does not currently use tracking or advertising cookies. If Google
        Analytics or Google Search Console is enabled in the future, this section will be
        updated to disclose what data those tools collect.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">Essential Storage</h3>
      <p>
        The site may use temporary, in-memory browser storage purely to remember your form
        inputs during your visit. This is not persisted after you close the browser tab and is
        never shared with third parties.
      </p>

      <h3 className="pt-2 font-display text-base font-bold text-white">Third-Party Embeds</h3>
      <p>
        The embedded Google Map on our Contact and About pages may set its own cookies as
        governed by Google's privacy policy, independent of this website.
      </p>
    </LegalLayout>
  )
}
