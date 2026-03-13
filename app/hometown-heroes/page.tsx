"use client";

import { useState } from "react";
import Image from "next/image";

type Veteran = {
  name: string;
  city: string;
  branch: string;
  campaign: string;
  years: string;
  image?: string;
  isPlaceholder?: boolean;
};

const kiaVeterans: Veteran[] = [
  {
    name: "LCPL. Thomas TJ Reilly JR.",
    city: "London, KY",
    branch: "United States Marine Corps",
    campaign: "Operation Iraqi Freedom",
    years: "KIA Karmah, Iraq 12/21/2008 Age 19",
    image: "/heroes/tjreilly.JPG",
  },
  {
    name: "PFC. Dustin Paul Napier",
    city: "Corbin, KY",
    branch: "United States Army",
    campaign: "Operation Enduring Freedom",
    years: "KIA Qalat, Afghanistan 01/08/2012 Age 20",
    image: "/heroes/dustinnapier.jpeg",
  },
  {
    name: "CPL. Joseph S. Tremblay",
    city: "Corbin, KY",
    branch: "United States Marine Corps",
    campaign: "Operation Iraqi Freedom",
    years: "KIA Hit, Iraq 04/27/2005 Age 23",
    image: "/heroes/josephtremblay.JPG",
  },
  {
    name: "SSG. McKenley Odis Matlock",
    city: "Barbourville, KY",
    branch: "United States Army",
    campaign: "Vietnam",
    years: "KIA Giah Dinh, South Vietnam 03/30/1968 Age 25",
    image: "/heroes/odismatlock.jpeg",
  },
  {
    name: "MM1c Uliss C. Steely",
    city: "Corbin, KY",
    branch: "United States Navy",
    campaign: "USS Oklahoma, Pearl Harbor",
    years: "KIA 12/07/1941 Age 25",
    image: "/heroes/ulissteely.jpeg",
  },
];

const otherVeterans: Veteran[] = [
  {
    name: "CPL Vincent Tomasino",
    city: "Williamsburg, KY",
    branch: "United States Marine Corps",
    campaign: "",
    years: "1973-1977",
    image: "/heroes/vincenttomasino.jpeg",
  },
];

export default function HometownHeroesPage() {
  const [selectedVeteran, setSelectedVeteran] = useState<Veteran | null>(null);

  return (
    <main className="heroes-page">

      {/* HEADER */}

      <section className="hero-header">

        <Image
          src="/frontporch-logo.PNG"
          alt="The Front Porch"
          width={260}
          height={160}
          priority
        />

        <p className="salutes">SALUTES OUR</p>

        <img
          src="/hometown-heroes.PNG"
          alt="Hometown Heroes"
          className="hero-title"
        />

        <img
          src="/branches.png"
          alt="Branches"
          className="branches"
        />

      </section>

      {/* KIA SECTION */}

      <section className="wall">

        <h2>
          “Greater love has no one than this: to lay down one's life for one's friends.” – John 15:13
        </h2>

        <div className="grid">

          {kiaVeterans.map((vet, index) => (

            <div
              key={index}
              className="card"
              onClick={() => setSelectedVeteran(vet)}
            >

              {vet.image && (
                <img src={vet.image} alt={vet.name} />
              )}

              <div className="info">

                <p className="campaign">{vet.campaign}</p>
                <p className="name">{vet.name}</p>
                <p>{vet.city}</p>
                <p>{vet.branch}</p>
                <p>{vet.years}</p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* OTHER HEROES */}

      <section className="wall">

        <h2>
          “A nation that does not honor its heroes will not long endure.” – Abraham Lincoln
        </h2>

        <div className="grid">

          {otherVeterans.map((vet, index) => (

            <div
              key={index}
              className="card"
              onClick={() => setSelectedVeteran(vet)}
            >

              {vet.image && (
                <img src={vet.image} alt={vet.name} />
              )}

              <div className="info">

                <p className="name">{vet.name}</p>
                <p>{vet.city}</p>
                <p>{vet.branch}</p>
                <p>{vet.campaign}</p>
                <p>{vet.years}</p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* MODAL */}

      {selectedVeteran && (

        <div
          className="modal-bg"
          onClick={() => setSelectedVeteran(null)}
        >

          <div className="modal">

            {selectedVeteran.image && (
              <img src={selectedVeteran.image} />
            )}

            <h3>{selectedVeteran.name}</h3>

            <p>{selectedVeteran.city}</p>
            <p>{selectedVeteran.branch}</p>
            <p>{selectedVeteran.campaign}</p>
            <p>{selectedVeteran.years}</p>

          </div>

        </div>

      )}

    </main>
  );
}
