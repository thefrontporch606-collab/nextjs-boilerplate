"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const paypalLink =
  "https://www.paypal.com/donate/?hosted_button_id=JJ9CFXVS9J44G";

const facebookLink =
  "https://www.facebook.com/share/1HJWSxJQ5z/?mibextid=wwXIfr";

const upcomingEvents = [
  {
    title: "Veteran Outreach Day",
    date: "April 20, 2026",
    time: "1:00 PM",
    location: "Lexington, KY",
    description:
      "Community outreach, resource connection, and support for local veterans and their families.",
  },
  {
    title: "Emergency Relief Fundraiser",
    date: "May 10, 2026",
    time: "6:00 PM",
    location: "The Front Porch Event Space",
    description:
      "A patriotic fundraiser to help veterans facing urgent needs like utilities, food, and housing hardship.",
  },
  {
    title: "Family Support Community Night",
    date: "June 6, 2026",
    time: "5:30 PM",
    location: "TBD",
    description:
      "A welcoming event focused on connection, encouragement, and support for veteran families.",
  },
];

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    const body = `Name: ${name}
Email: ${email}

${message}`;

    const mailto = `mailto:thefrontporch606@gmail.com?subject=${encodeURIComponent(
      subject || "Contact from The Front Porch website"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <main
      style={{
        backgroundColor: "#f4efe6",
        color: "#1f3558",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <style jsx>{`
        .fade-up {
          animation: fadeUp 0.8s ease both;
        }

        .fade-up-delay-1 {
          animation: fadeUp 1s ease both;
        }

        .fade-up-delay-2 {
          animation: fadeUp 1.15s ease both;
        }

        .donatePulse {
          animation: donatePulse 2s infinite;
        }

        .softFloat {
          animation: softFloat 4s ease-in-out infinite;
        }

        .sectionCard {
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .sectionCard:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 38px rgba(31, 53, 88, 0.14);
          border-color: #c35745;
        }

        .buttonPop {
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            filter 0.2s ease;
        }

        .buttonPop:hover {
          transform: translateY(-2px) scale(1.02);
          filter: brightness(1.02);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes donatePulse {
          0%,
          100% {
            box-shadow: 0 12px 28px rgba(180, 69, 55, 0.28);
          }
          50% {
            box-shadow: 0 18px 40px rgba(180, 69, 55, 0.42);
          }
        }

        @keyframes softFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: "#ffffff",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "760px",
          }}
        >
          <Image
            src="/IMG_1844.jpeg"
            alt="The Front Porch homepage hero"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(12,18,28,0.18) 58%, rgba(12,18,28,0.5) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <div
              className="fade-up"
              style={{
                width: "100%",
                maxWidth: "1000px",
                textAlign: "center",
              }}
            >
              <a
                href={paypalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="buttonPop donatePulse"
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(135deg, #c75a46 0%, #b44537 55%, #8f3328 100%)",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "20px 40px",
                  borderRadius: "18px",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  letterSpacing: "0.3px",
                  border: "3px solid rgba(255,255,255,0.35)",
                }}
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section
        className="fade-up-delay-1"
        style={{
          maxWidth: "1180px",
          margin: "-36px auto 0",
          padding: "0 20px",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            padding: "22px",
            boxShadow: "0 18px 45px rgba(31,53,88,0.14)",
            border: "1px solid #e5dbcb",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            <a
              href={paypalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="buttonPop"
              style={{
                background:
                  "linear-gradient(135deg, #c75a46 0%, #b44537 100%)",
                color: "#ffffff",
                textDecoration: "none",
                padding: "18px 20px",
                borderRadius: "16px",
                textAlign: "center",
                fontWeight: 800,
                fontSize: "1.08rem",
                boxShadow: "0 10px 24px rgba(180,69,55,0.22)",
              }}
            >
              Donations
            </a>

            <a
              href="/veteran-services"
              className="buttonPop"
              style={{
                backgroundColor: "#1f3558",
                color: "#ffffff",
                textDecoration: "none",
                padding: "18px 20px",
                borderRadius: "16px",
                textAlign: "center",
                fontWeight: 800,
                fontSize: "1.08rem",
              }}
            >
              Veteran Services
            </a>

            <a
              href="/membership"
              className="buttonPop"
              style={{
                backgroundColor: "#e3d9c9",
                color: "#1f3558",
                textDecoration: "none",
                padding: "18px 20px",
                borderRadius: "16px",
                textAlign: "center",
                fontWeight: 800,
                fontSize: "1.08rem",
                border: "2px solid #cdbca4",
              }}
            >
              Become A Member
            </a>

            <a
              href="#contact"
              className="buttonPop"
              style={{
                backgroundColor: "#ffffff",
                color: "#b44537",
                textDecoration: "none",
                padding: "18px 20px",
                borderRadius: "16px",
                textAlign: "center",
                fontWeight: 800,
                fontSize: "1.08rem",
                border: "2px solid #d9c9b3",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        className="fade-up-delay-2"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "56px 20px 28px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.3rem)",
            marginBottom: "18px",
            color: "#1f3558",
          }}
        >
          Standing with veterans and their families
        </h2>

        <p
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            fontSize: "1.16rem",
            lineHeight: 1.85,
            color: "#4b5e7b",
          }}
        >
          The Front Porch supports veterans through outreach, emergency relief,
          guidance, employment support, community connection, and practical help
          when life gets hard. We exist to make sure no veteran faces hardship
          alone.
        </p>
      </section>

      {/* FEATURE CARDS */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "12px 20px 26px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "22px",
          }}
        >
          {[
            {
              id: "relief",
              title: "Emergency Relief",
              text: "Support for urgent needs like food, utilities, heat, and immediate hardship assistance.",
            },
            {
              id: "outreach",
              title: "Veteran Outreach",
              text: "Connecting directly with veterans and making sure they know help is available.",
            },
            {
              id: "guidance",
              title: "Benefits Guidance",
              text: "Helping veterans understand resources, options, and next steps with confidence.",
            },
            {
              id: "community",
              title: "Community Programs",
              text: "Events, connection, and support that bring veterans, families, and the community together.",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="sectionCard"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: "#fffaf2",
                borderRadius: "20px",
                padding: "28px 24px",
                boxShadow:
                  hoveredCard === item.id
                    ? "0 18px 38px rgba(31,53,88,0.14)"
                    : "0 10px 24px rgba(31,53,88,0.08)",
                border:
                  hoveredCard === item.id
                    ? "1px solid #c35745"
                    : "1px solid #e2d7c6",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "12px",
                  color: "#b44537",
                  fontSize: "1.35rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#4b5e7b",
                  lineHeight: 1.75,
                  fontSize: "1rem",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "34px 20px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, #1f3558 0%, #29456d 100%)",
            borderRadius: "28px",
            padding: "34px 24px",
            color: "#ffffff",
            boxShadow: "0 16px 36px rgba(31,53,88,0.18)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                color: "#d6b24a",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "10px",
              }}
            >
              Upcoming Events
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(2rem, 5vw, 3rem)",
              }}
            >
              Patriotic Community Calendar
            </h2>

            <p
              style={{
                margin: "14px auto 0",
                maxWidth: "780px",
                color: "#d9e3f1",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              Keep this section updated with your next fundraisers, outreach
              days, family events, and veteran support programs.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
            }}
          >
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="sectionCard"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "22px",
                  border: "1px solid rgba(255,255,255,0.16)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div
                  style={{
                    color: "#f1c15a",
                    fontWeight: 800,
                    marginBottom: "8px",
                  }}
                >
                  {event.date}
                </div>

                <h3
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: "1.3rem",
                    color: "#ffffff",
                  }}
                >
                  {event.title}
                </h3>

                <p
                  style={{
                    margin: "0 0 8px 0",
                    color: "#d9e3f1",
                    fontWeight: 700,
                  }}
                >
                  {event.time}
                </p>

                <p
                  style={{
                    margin: "0 0 14px 0",
                    color: "#d9e3f1",
                  }}
                >
                  {event.location}
                </p>

                <p
                  style={{
                    margin: 0,
                    color: "#edf2f8",
                    lineHeight: 1.7,
                  }}
                >
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACEBOOK + CONTACT */}
      <section
        id="contact"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "20px 20px 70px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "22px",
          }}
        >
          <div
            className="sectionCard"
            style={{
              backgroundColor: "#fffaf2",
              borderRadius: "22px",
              padding: "28px 24px",
              border: "1px solid #e2d7c6",
              boxShadow: "0 10px 24px rgba(31,53,88,0.08)",
            }}
          >
            <div
              className="softFloat"
              style={{
                fontSize: "3rem",
                marginBottom: "10px",
              }}
            >
              👍
            </div>

            <h3
              style={{
                marginTop: 0,
                color: "#1f3558",
                fontSize: "1.7rem",
                marginBottom: "12px",
              }}
            >
              Like Us On Facebook
            </h3>

            <p
              style={{
                color: "#4b5e7b",
                lineHeight: 1.75,
                marginBottom: "20px",
              }}
            >
              Follow The Front Porch on Facebook for updates, outreach news,
              events, and ways to support veterans in our community.
            </p>

            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="buttonPop"
              style={{
                display: "inline-block",
                backgroundColor: "#1f3558",
                color: "#ffffff",
                textDecoration: "none",
                padding: "14px 26px",
                borderRadius: "14px",
                fontWeight: 800,
              }}
            >
              Visit Our Facebook
            </a>
          </div>

          <div
            className="sectionCard"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "22px",
              padding: "28px 24px",
              border: "1px solid #e5dbcb",
              boxShadow: "0 10px 24px rgba(31,53,88,0.08)",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                color: "#1f3558",
                fontSize: "1.7rem",
                marginBottom: "14px",
              }}
            >
              Contact Us
            </h3>

            <div
              style={{
                marginBottom: "18px",
                color: "#4b5e7b",
                lineHeight: 1.8,
              }}
            >
              <div>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:16065958622"
                  style={{ color: "#b44537", textDecoration: "none" }}
                >
                  (606)595-8622
                </a>
              </div>
              <div>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:thefrontporch606@gmail.com"
                  style={{ color: "#b44537", textDecoration: "none" }}
                >
                  thefrontporch606@gmail.com
                </a>
              </div>
            </div>

            <form onSubmit={handleContactSubmit}>
              <div
                style={{
                  display: "grid",
                  gap: "12px",
                }}
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  style={inputStyle}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  style={inputStyle}
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                  style={inputStyle}
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                  rows={5}
                  style={textareaStyle}
                />
                <button
                  type="submit"
                  className="buttonPop"
                  style={{
                    background:
                      "linear-gradient(135deg, #c75a46 0%, #b44537 100%)",
                    color: "#ffffff",
                    border: "none",
                    padding: "15px 22px",
                    borderRadius: "14px",
                    fontWeight: 800,
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  Open Email and Send
                </button>
              </div>
            </form>
          </div>
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
            maxWidth: "980px",
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

const inputStyle = {
  width: "100%",
  padding: "14px 14px",
  borderRadius: "12px",
  border: "1px solid #d8cdbb",
  fontSize: "1rem",
  outline: "none",
  backgroundColor: "#fffaf5",
  color: "#1f3558",
} as const;

const textareaStyle = {
  width: "100%",
  padding: "14px 14px",
  borderRadius: "12px",
  border: "1px solid #d8cdbb",
  fontSize: "1rem",
  outline: "none",
  backgroundColor: "#fffaf5",
  color: "#1f3558",
  resize: "vertical" as const,
} as const;