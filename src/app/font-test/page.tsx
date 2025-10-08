export default function FontTestPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold mb-8">Font Test Page</h1>

      {/* Test CSS variables */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">CSS Variables Test</h2>
        <p
          style={{
            fontFamily: "var(--font-pp-editorial)",
            fontSize: "32px",
            fontWeight: 100,
            fontStyle: "italic",
          }}
        >
          PP Editorial New Ultralight Italic - Olivia & Mac
        </p>
        <p
          style={{
            fontFamily: "var(--font-pp-editorial)",
            fontSize: "24px",
            fontWeight: 400,
          }}
        >
          PP Editorial New Regular - The Celebration
        </p>
        <p
          style={{
            fontFamily: "var(--font-domaine)",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          Domaine Text Regular - This is body text that should look elegant and
          readable.
        </p>
        <p
          style={{
            fontFamily: "var(--font-domaine)",
            fontSize: "18px",
            fontWeight: 500,
          }}
        >
          Domaine Text Medium - This is button text and emphasis.
        </p>
      </div>

      {/* Test Tailwind classes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Tailwind Classes Test</h2>
        <p className="font-editorial text-4xl font-thin italic">
          PP Editorial via Tailwind - Olivia & Mac
        </p>
        <p className="font-editorial text-2xl font-normal">
          PP Editorial Regular via Tailwind
        </p>
        <p className="font-domaine text-lg font-normal">
          Domaine Text Regular via Tailwind
        </p>
        <p className="font-domaine text-base font-medium">
          Domaine Text Medium via Tailwind
        </p>
      </div>

      {/* Test component classes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Component Classes Test</h2>
        <p className="hero-name">Hero Name Class - Olivia</p>
        <p className="section-heading">Section Heading Class</p>
        <p className="event-description">Event Description Class</p>
        <button className="btn-primary">Button Primary</button>
      </div>

      {/* Fallback test */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Fallback Test</h2>
        <p style={{ fontFamily: "PPEditorialNew, serif" }}>
          Direct font family - PP Editorial New
        </p>
        <p style={{ fontFamily: "DomaineText, serif" }}>
          Direct font family - Domaine Text
        </p>
        <p style={{ fontFamily: "Georgia, serif" }}>Georgia fallback font</p>
      </div>

      {/* Browser info */}
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold">Debug Info:</h3>
        <p>Open browser dev tools and check:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Network tab for font loading</li>
          <li>Console for any font errors</li>
          <li>Computed styles for font-family values</li>
        </ul>
      </div>
    </div>
  );
}
