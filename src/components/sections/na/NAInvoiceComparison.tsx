"use client";

const rows: Array<{
  group?: string;
  item?: string;
  covers?: string;
  trad?: string;
  ssai?: string;
  ssaiIncluded?: boolean;
}> = [
  { group: "Pre-Production" },
  { item: "Creative concept & script", covers: "Copywriter + creative director", trad: "$2,500+", ssai: "Included", ssaiIncluded: true },
  { item: "Director", covers: "On-set creative direction", trad: "$1,500–$3,000", ssai: "Included", ssaiIncluded: true },
  { group: "Physical Production" },
  { item: "Videographer + crew", covers: "Camera operator, lighting, sound", trad: "$2,000–$4,000", ssai: "None" },
  { item: "Equipment rental", covers: "Camera body, lenses, lighting rigs", trad: "$800–$1,500", ssai: "None" },
  { item: "Talent / on-screen", covers: "Actor or influencer fees", trad: "$500–$2,000", ssai: "None" },
  { item: "Location prep / styling", covers: "Cafe staging, prop styling", trad: "$500–$1,000", ssai: "None" },
  { group: "Post-Production" },
  { item: "Video editing", covers: "Cut, colour grade, music, captions", trad: "$1,500–$3,000", ssai: "Included", ssaiIncluded: true },
  { item: "Platform cuts", covers: "Resize for IG, TikTok, YouTube", trad: "$300–$600 each", ssai: "Included", ssaiIncluded: true },
];

export default function NAInvoiceComparison() {
  return (
    <section style={{ padding: "96px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ textAlign: "center", maxWidth: "1000px", margin: "0 auto 56px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              padding: "8px 16px",
              borderRadius: "999px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--gradient-brand)",
                display: "inline-block",
              }}
            />
            Cost Analysis · SSAI-COMPARE-CA-2026
          </div>
          <h2
            style={{
              fontSize: "clamp(44px, 6.5vw, 92px)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.035em",
              marginTop: "22px",
              color: "var(--text)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            What a 30-second cafe ad
            <br />
            <span className="gradient-text">actually costs</span>
          </h2>
          <p
            style={{
              marginTop: "26px",
              fontSize: "19px",
              lineHeight: 1.6,
              color: "var(--text-2)",
              maxWidth: "720px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            What a production agency quotes you vs. what you pay with Super Studios AI.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {/* header */}
          <div
            style={{
              padding: "36px 44px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "24px",
              borderBottom: "1px solid var(--border)",
              background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                Budget Breakdown
              </div>
              <div style={{ fontSize: "22px", fontWeight: 800, marginTop: "6px", color: "var(--text)" }}>
                30-Second Commercial — Canadian Cafe
              </div>
              <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "4px" }}>
                Canada market · Single location brand campaign
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: 900,
                  letterSpacing: "0.25em",
                  color: "var(--border-strong)",
                }}
              >
                COST ANALYSIS
              </div>
              <div style={{ fontFamily: "ui-monospace, monospace", fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}>
                REF: SSAI-COMPARE-CA-2026
              </div>
            </div>
          </div>

          <div className="grad-bar" />

          {/* meta row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              padding: "22px 44px",
              background: "var(--surface-2)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {[
              { k: "Scope", v: "Single 30-sec commercial" },
              { k: "Agency Timeline", v: "3 to 6 weeks" },
              { k: "Super Studios AI Timeline", v: "Starting at 1-day delivery" },
            ].map(({ k, v }, i) => (
              <div key={k}>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  {k}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    marginTop: "6px",
                    color: i === 2 ? "var(--good)" : i === 1 ? "var(--brand-rose)" : "var(--text)",
                  }}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>

          {/* table */}
          <div style={{ padding: "12px 28px 28px", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "720px" }}>
              <thead>
                <tr>
                  {["Line Item", "What It Covers", "Traditional Agency", "Super Studios AI"].map((h, i) => (
                    <th
                      key={i}
                      style={{
                        textAlign: i < 2 ? "left" : "right",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        padding: "18px 12px 12px",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  if (row.group) {
                    return (
                      <tr key={i}>
                        <td
                          colSpan={4}
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--muted)",
                            padding: "20px 12px 8px",
                            textAlign: "left",
                          }}
                        >
                          {row.group}
                        </td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "14px 12px", fontSize: "14px", fontWeight: 600, color: "var(--text)", textAlign: "left" }}>
                        {row.item}
                      </td>
                      <td style={{ padding: "14px 12px", fontSize: "13px", color: "var(--muted)", textAlign: "left" }}>
                        {row.covers}
                      </td>
                      <td style={{ padding: "14px 12px", fontSize: "14px", color: "var(--text-2)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                        {row.trad}
                      </td>
                      <td
                        style={{
                          padding: "14px 12px",
                          fontSize: "14px",
                          fontWeight: row.ssaiIncluded ? 400 : 700,
                          fontStyle: row.ssaiIncluded ? "italic" : "normal",
                          color: row.ssaiIncluded ? "var(--muted)" : "var(--good)",
                          textAlign: "right",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {row.ssai}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      padding: "22px 12px",
                      borderTop: "2px solid var(--border-strong)",
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "var(--text)",
                      textAlign: "left",
                    }}
                  >
                    Total Investment
                  </td>
                  <td
                    style={{
                      padding: "22px 12px",
                      borderTop: "2px solid var(--border-strong)",
                      fontSize: "16px",
                      color: "var(--muted)",
                      textDecoration: "line-through",
                      textAlign: "right",
                    }}
                  >
                    $9,600 – $15,100+
                  </td>
                  <td
                    style={{
                      padding: "22px 12px",
                      borderTop: "2px solid var(--border-strong)",
                      textAlign: "right",
                    }}
                  >
                    <a
                      href="https://form.typeform.com/to/o51YfOvB"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "10px 18px",
                        borderRadius: "999px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "12px",
                        textDecoration: "none",
                        background: "var(--gradient-brand)",
                        color: "white",
                        border: "1px solid transparent",
                      }}
                    >
                      Starting at $624
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* stat callouts */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              margin: "8px 28px 28px",
              padding: "24px 28px",
              background: "var(--good-tint)",
              borderRadius: "16px",
              border: "1px solid color-mix(in srgb, var(--good) 30%, transparent)",
            }}
          >
            {[
              { k: "Delivery", v: "Starting at 1 day" },
              { k: "Revisions", v: "Included" },
              { k: "Platform Formats", v: "All included" },
            ].map((item) => (
              <div key={item.k}>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  {item.k}
                </div>
                <div style={{ fontSize: "24px", fontWeight: 800, color: "var(--good)", marginTop: "6px" }}>
                  {item.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
