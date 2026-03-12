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
    name: "LCPL Thomas TJ Reilly Jr.",
    city: "London, KY",
    branch: "United States Marine Corps",
    campaign: "Operation Iraqi Freedom",
    years: "KIA Karmah, Iraq 12/21/2008 Age 19",
    image: "/heroes/tjreilly.JPG",
  },
  {
    name: "PFC Dustin Paul Napier",
    city: "Corbin, KY",
    branch: "United States Army",
    campaign: "Operation Enduring Freedom",
    years: "KIA Qalat, Afghanistan 01/08/2012 Age 20",
    image: "/heroes/dustinnapier.jpeg",
  },
  {
    name: "CPL Joseph S. Tremblay",
    city: "Corbin, KY",
    branch: "United States Marine Corps",
    campaign: "Operation Iraqi Freedom",
    years: "KIA Hit, Iraq 04/27/2005 Age 23",
    image: "/heroes/josephtremblay.JPG",
  },
  {
    name: "SSG McKenley Odis Matlock",
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
    campaign: "Peacetime Service",
    years: "1973 - 1977",
    image: "/heroes/vincenttomasino.jpeg",
  },
];

export default function HometownHeroesPage() {
  const [selectedVeteran, setSelectedVeteran] = useState<Veteran | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <main className="heroes-page">

        {/* HEADER */}
        <section className="hero-header">

          <Image
            src="/frontporch-logo.PNG"
            alt="Front Porch Logo"
            width={240}
            height={140}
            className="hero-logo"
          />

          <img
            src="/hometown-heroes-title.PNG"
            className="title-image"
            alt="Hometown Heroes"
          />

          <img
            src="/branches.png"
            className="branches"
            alt="Branches"
          />

          <button
            className="submit-btn"
            onClick={() => setFormOpen(true)}
          >
            Submit A Hometown Hero
          </button>

        </section>

        {/* KIA SECTION */}

        <section className="wall">

          <h2 className="quote">
            “Greater love has no one than this: to lay down one’s life for one’s friends.” – John 15:13
          </h2>

          <div className="grid">

            {kiaVeterans.map((vet, i) => (
              <div
                key={i}
                className="card kia"
                onClick={() => setSelectedVeteran(vet)}
              >

                <img src={vet.image} className="photo" />

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

          <h2 className="quote">
            “A nation that does not honor its heroes will not long endure.” – Abraham Lincoln
          </h2>

          <div className="grid">

            {otherVeterans.map((vet, i) => (
              <div
                key={i}
                className="card"
                onClick={() => setSelectedVeteran(vet)}
              >

                <img src={vet.image} className="photo" />

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

      </main>

      {/* MODAL */}

      {selectedVeteran && (
        <div
          className="modal-bg"
          onClick={() => setSelectedVeteran(null)}
        >
          <div className="modal">

            <img src={selectedVeteran.image} className="modal-photo"/>

            <h3>{selectedVeteran.name}</h3>

            <p>{selectedVeteran.city}</p>
            <p>{selectedVeteran.branch}</p>
            <p>{selectedVeteran.campaign}</p>
            <p>{selectedVeteran.years}</p>

          </div>
        </div>
      )}

      {/* FORM */}

      {formOpen && (
        <div
          className="modal-bg"
          onClick={() => setFormOpen(false)}
        >

          <div className="modal">

            <h3>Submit A Hometown Hero</h3>

            <form
              action="https://formsubmit.co/thefrontporch606@gmail.com"
              method="POST"
              encType="multipart/form-data"
            >

              <input name="name" placeholder="Name" required />
              <input name="city" placeholder="City" required />
              <input name="branch" placeholder="Branch" required />
              <input name="campaign" placeholder="Campaign" />
              <input name="years" placeholder="Years" required />
              <input type="file" name="photo" required />

              <button type="submit">
                Honor This Hero
              </button>

            </form>

          </div>

        </div>
      )}

      <style jsx>{`

.hero-header{
text-align:center;
padding:40px 20px;
background:#0f2447;
}

.hero-logo{
margin-bottom:10px;
}

.title-image{
max-width:700px;
width:100%;
margin:20px auto;
}

.branches{
max-width:650px;
width:100%;
margin:20px auto;
}

.submit-btn{
background:#d1b443;
padding:14px 26px;
border-radius:30px;
font-weight:700;
cursor:pointer;
}

.wall{
max-width:1400px;
margin:auto;
padding:40px 20px;
}

.quote{
text-align:center;
font-size:24px;
margin-bottom:30px;
}

.grid{
display:grid;
grid-template-columns:repeat(5,1fr);
gap:20px;
}

.card{
background:white;
border-radius:12px;
cursor:pointer;
overflow:hidden;
box-shadow:0 6px 18px rgba(0,0,0,.1);
}

.photo{
width:100%;
aspect-ratio:1/1;
object-fit:cover;
}

.info{
padding:10px;
text-align:center;
}

.name{
font-weight:700;
}

.modal-bg{
position:fixed;
inset:0;
background:rgba(0,0,0,.7);
display:flex;
justify-content:center;
align-items:center;
}

.modal{
background:white;
padding:30px;
border-radius:12px;
text-align:center;
max-width:500px;
width:90%;
}

.modal-photo{
width:100%;
margin-bottom:15px;
}

`}</style>

    </>
  );
}
