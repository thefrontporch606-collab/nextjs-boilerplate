import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#f4efe6",
        color: "#1f3558",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: "#ffffff",
          paddingTop: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "14px",
          }}
        >
          <Image
            src="/logo.JPG"
            alt="The Front Porch logo"
            width={170}
            height={170}
            priority
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <img
            src="/banner.PNG"
            alt="The Front Porch banner"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              backgroundColor: "#ffffff",
            }}
          />
        </div>
      </section>

      {/* BIG DONATE SECTION */}
      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "26px 20px 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, #b44537 0%, #c25745 55%, #1f3558 100%)",
            borderRadius: "24px",
            padding: "34px 28px",
            boxShadow: "0 18px 45px rgba(31,53,88,0.18)",
            color: "#ffffff",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <div
            style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              opacity: 0.95,
              marginBottom: "10px",
            }}
          >
            Support Our Mission
          </div>

          <h2
            style={{
              margin: "0 0 14px 0",
              fontSize: "clamp(2rem, 5vw, 3.3rem)",
              lineHeight: 1.1,
            }}
          >
            Help Us Stand With Veterans
          </h2>

          <p
            style={{
              margin: "0 auto 26px",
              maxWidth: "820px",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "#f6eee5",
            }}
          >
            Your donation helps The Front Porch provide outreach, emergency
            relief, guidance, and real support for veterans and their families.
          </p>

          <a
            href="https://www.paypal.com/donate/?hosted_button_id=JJ9CFXVS9J44G"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#f4efe6",
              color: "#1f3558",
              textDecoration: "none",
              padding: "20px 40px",
              borderRadius: "16px",
              fontWeight: 800,
              fontSize: "1.2rem",
              boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
              border: "3px solid rgba(255,255,255,0.35)",
            }}
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 20px 30px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            marginBottom: "18px",
            color: "#1f3558",
          }}
        >
          Standing with veterans and their families
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "1.15rem",
            lineHeight: 1.85,
            color: "#4b5e7b",
          }}
        >
          The Front Porch supports veterans through outreach, emergency relief,
          community connection, benefits guidance, employment support, and
          practical help when life gets hard. We believe no veteran should have
          to face hardship alone.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "34px",
          }}
        >
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=JJ9CFXVS9J44G"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#b44537",
              color: "#ffffff",
              padding: "16px 34px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1.05rem",
              boxShadow: "0 8px 20px rgba(180,69,55,0.22)",
            }}
          >
            Donate Today
          </a>

          <a
            href="/get-help"
            style={{
              backgroundColor: "#e2d8c8",
              color: "#1f3558",
              padding: "16px 34px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1.05rem",
              border: "2px solid #cdbca4",
            }}
          >
            Get Help
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "30px 20px 75px",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "28px",
            color: "#1f3558",
          }}
        >
          How We Help
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {[
            {
              title: "Emergency Relief",
              text: "Support for urgent needs such as utilities, food, heat, and other immediate hardships.",
            },
            {
              title: "Veteran Outreach",
              text: "Connecting with veterans where they are and making sure they know support is available.",
            },
            {
              title: "Benefits Guidance",
              text: "Helping veterans understand available resources, options, and next steps.",
            },
            {
              title: "Community Programs",
              text: "Events and programs that bring veterans, families, and the community together.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "#fffaf2",
                borderRadius: "18px",
                padding: "28px 22px",
                boxShadow: "0 10px 24px rgba(31,53,88,0.08)",
                border: "1px solid #e2d7c6",
              }}
            >
              <h4
                style={{
                  marginTop: 0,
                  marginBottom: "12px",
                  color: "#b44537",
                  fontSize: "1.3rem",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  margin: 0,
                  color: "#4b5e7b",
                  lineHeight: 1.7,
                  fontSize: "1rem",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION STRIP */}
      <section
        style={{
          backgroundColor: "#1f3558",
          color: "#f4efe6",
          padding: "65px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              marginTop: 0,
              marginBottom: "16px",
            }}
          >
            Real support. Real people. Real community.
          </h3>

          <p
            style={{
              margin: 0,
              lineHeight: 1.85,
              fontSize: "1.1rem",
              color: "#ddd2c0",
            }}
          >
            The Front Porch exists to serve those who served. Whether it is a
            family in crisis, a veteran needing direction, or a community ready
            to stand behind its own, we are here to answer that call.
          </p>
        </div>
      </section>
    </main>
  );
}