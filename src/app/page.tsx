import Faq from "@/components/Faq";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div className="page">
      {/* ===================== Header ===================== */}
      <header className="header">
        <img
          className="header__logo"
          src="/assets/images/logo.png"
          alt="Social Yoga"
          width={217}
          height={222}
        />
        <div className="header__bar">
          <nav className="header__nav" aria-label="Primary">
            <a className="nav-pill" href="#pricing">
              BOOK A CLASS
            </a>
            <a href="#more">ABOUT US</a>
            <a href="#find">GET IN TOUCH</a>
          </nav>
          <div className="header__locations">
            <div className="loc-chip loc-chip--cream">
              <span className="loc-chip__name">SOCIAL YOGA</span>
              <span className="loc-chip__row">
                <img
                  className="loc-chip__pin"
                  src="/assets/images/pin-primary.svg"
                  alt=""
                  aria-hidden="true"
                  width={7}
                  height={10}
                />
                <span className="loc-chip__place">FISH ISLAND</span>
              </span>
            </div>
            <span className="header__divider" aria-hidden="true" />
            <div className="loc-chip loc-chip--muted">
              <span className="loc-chip__name">SOCIAL YOGA</span>
              <span className="loc-chip__row">
                <img
                  className="loc-chip__pin"
                  src="/assets/images/pin-muted.svg"
                  alt=""
                  aria-hidden="true"
                  width={7}
                  height={10}
                />
                <span className="loc-chip__place">HACKNEY CENTRAL</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        {/* ===================== Hero ===================== */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__head">
            <p className="hero__eyebrow">WELCOME TO SOCIAL YOGA</p>
            <h1 id="hero-title" className="hero__title">
              Our calm and <span className="italic">friendly </span>studio,
              rooted in <span className="italic">community.</span>
            </h1>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#pricing">
                JOIN US
              </a>
              <a className="btn btn--outline" href="#more">
                DISCOVER US
              </a>
            </div>
          </div>
          <img
            className="hero__image"
            src="/assets/images/hero.jpg"
            alt="A group practising yoga together with arms raised in the studio"
            width={962}
            height={344}
          />
        </section>

        {/* ================= Section 1 — Intro band ================= */}
        <section className="intro" aria-label="About the studio">
          <div className="shell intro__inner">
            <h2 className="intro__lead">
              You&rsquo;ll find a space where yoga, pilates and wellness feels{" "}
              <span className="italic">accessible</span>,{" "}
              <span className="italic">human </span>and{" "}
              <span className="italic">rooted </span>in real life.
            </h2>
            <div className="intro__cols">
              <p>
                The studio focuses on wellbeing and helping people feel
                comfortable in their own bodies. Our classes blend thoughtful
                guidance, creativity and a relaxed atmosphere that encourages
                people to explore movement, breath and stillness, without
                pressure or judgement.
              </p>
              <p>
                What began as a small yoga studio quickly grew into something
                more: a place where people stay to talk after class, where
                children play while parents practise, and where events,
                workshops and shared experiences sit naturally alongside yoga on
                the mat.
              </p>
            </div>
          </div>
        </section>

        {/* ================= Section 2 — We host ================= */}
        <section className="shell wehost" aria-labelledby="wehost-title">
          <h2 id="wehost-title" className="section-title">
            We <span className="italic">host</span>
          </h2>
          <div className="wehost__grid">
            <div className="host-card">Yoga</div>
            <div className="host-card">Pilates</div>
            <div className="host-card">Sound</div>
            <div className="host-card">Movement</div>
          </div>
          <p className="wehost__note">
            Plus events, workshops and shared experiences alongside yoga on the
            mat.
          </p>
        </section>

        {/* ================= Section 3 — Come as you are ================= */}
        <section className="shell come" aria-labelledby="come-title">
          <div className="come__text">
            <h2 id="come-title" className="section-title">
              Come <span className="italic" style={{ fontWeight: 700 }}>exactly</span> as you
              are.
            </h2>
            <div className="come__body">
              <p>
                You don&rsquo;t need to be experienced, flexible, or part of a
                particular crowd. Come as you are and find what you need in that
                moment. Movement, rest, creativity, or community.
              </p>
              <p>
                We work with a wide range of groups and regularly collaborate
                with local communities. Diversity is something we value and
                actively celebrate.
              </p>
            </div>
          </div>
          <img
            className="come__image"
            src="/assets/images/come-as-you-are.png"
            alt="A person sitting calmly on a yoga mat in a bright studio"
            width={495}
            height={557}
            loading="lazy"
          />
        </section>

        {/* ================= Section 4 — Pricing ================= */}
        <section className="shell pricing" id="pricing" aria-label="Pricing">
          <div className="pricing__grid">
            <article className="price-card price-card--wide price-card--feature">
              <div className="price-card__head">
                <div>
                  <h3 className="price-card__name">10 Class Pack</h3>
                  <p className="price-card__offer">Summer offer, save £30</p>
                </div>
                <a className="btn btn--accent" href="#">
                  JOIN US
                </a>
              </div>
              <p className="price-card__price">£60.00</p>
            </article>

            <article className="price-card">
              <div className="price-card__head">
                <div>
                  <h3 className="price-card__name">5 Class Pack</h3>
                  <p className="price-card__offer">Summer Social, save £15</p>
                </div>
              </div>
              <p className="price-card__price">£35.00</p>
            </article>

            <article className="price-card">
              <div className="price-card__head">
                <h3 className="price-card__name">Drop in Class</h3>
              </div>
              <p className="price-card__price">£15.00</p>
            </article>

            <article className="price-card price-card--wide">
              <div className="price-card__head">
                <h3 className="price-card__name">Unlimited Membership</h3>
              </div>
              <p className="price-card__price">£89.00 / month</p>
            </article>
          </div>

          <a className="momence" href="#">
            BOOK ON MOMENCE
            <span className="momence__circle" aria-hidden="true">
              <svg viewBox="0 0 42 42" width={42} height={42} focusable="false">
                <circle cx="21" cy="21" r="21" fill="#4D5E6D" />
                <path
                  d="M15 27L27 15M18.5 15H27V23.5"
                  stroke="#FFE9B6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </a>
        </section>

        {/* ================= Section 5 — What are we proud of ================= */}
        <section className="shell proud" aria-labelledby="proud-title">
          <img
            className="proud__image"
            src="/assets/images/proud.jpg"
            alt="Close-up of a person resting a hand gently over their heart"
            width={495}
            height={824}
            loading="lazy"
          />
          <div className="proud__col">
            <h2 id="proud-title" className="section-title">
              What are we <span className="italic">proud </span>of
            </h2>
            <div className="proud__cards">
              <article className="proud-card">
                <p className="proud-card__label">CANCELLATION</p>
                <h3 className="proud-card__title">No fines. Ever. Life happens</h3>
                <div className="proud-card__body">
                  <p>
                    kids are late out of school, you miss the train, the bus is
                    five minutes behind.
                  </p>
                  <p>
                    If you&rsquo;re less than five minutes late we&rsquo;ll try
                    and get you in. Anything more and we&rsquo;ll rebook you on
                    for free. We will never fine you for cancelling late or
                    missing a class.
                  </p>
                </div>
              </article>
              <article className="proud-card">
                <p className="proud-card__label">PACKAGES</p>
                <h3 className="proud-card__title">
                  Fully transferable class packs.
                </h3>
                <div className="proud-card__body">
                  <p>
                    Buy a five-class pack and you can use all five in one class
                    if you want, bring whoever you like, transfer between Fish
                    Island and Hackney Central. Passes never expire.
                  </p>
                  <p>
                    Bring the Village. Your membership and class packs are for
                    your whole community - bring mum, dad, your whole crew. No
                    restrictions.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================= Section 6 — More at social yoga ================= */}
        <section className="shell more" id="more" aria-labelledby="more-title">
          <h2 id="more-title" className="section-title">
            More at <span className="italic">social yoga</span>
          </h2>
          <div className="more__grid">
            <article className="more-card">
              <img
                className="more-card__image"
                src="/assets/images/more-hire.jpg"
                alt="People practising yoga in the studio space available to hire"
                width={314}
                height={339}
                loading="lazy"
              />
              <div className="more-card__foot">
                <p className="more-card__label">Hire the studio</p>
                <img
                  className="more-card__arrow"
                  src="/assets/images/arrow-link.svg"
                  alt=""
                  aria-hidden="true"
                  width={52}
                  height={53}
                />
              </div>
            </article>
            <article className="more-card">
              <img
                className="more-card__image"
                src="/assets/images/more-spotify.png"
                alt="A relaxed studio moment set to music"
                width={314}
                height={339}
                loading="lazy"
              />
              <div className="more-card__foot">
                <p className="more-card__label">Spotify Playlists</p>
                <img
                  className="more-card__arrow"
                  src="/assets/images/arrow-link.svg"
                  alt=""
                  aria-hidden="true"
                  width={52}
                  height={53}
                />
              </div>
            </article>
            <article className="more-card">
              <img
                className="more-card__image"
                src="/assets/images/more-park.jpg"
                alt="Outdoor yoga session in a green park"
                width={313}
                height={339}
                loading="lazy"
              />
              <div className="more-card__foot">
                <p className="more-card__label">Free Park Yoga</p>
                <img
                  className="more-card__arrow"
                  src="/assets/images/arrow-link.svg"
                  alt=""
                  aria-hidden="true"
                  width={52}
                  height={53}
                />
              </div>
            </article>
          </div>
        </section>

        {/* ================= Section 7 — FAQ ================= */}
        <Faq />

        {/* ================= Section 8 — Where to find us ================= */}
        <section className="shell find" id="find" aria-labelledby="find-title">
          <h2 id="find-title" className="section-title">
            Where to <span className="italic">find us</span>
          </h2>
          <div className="find__grid">
            <article className="find-card">
              <img
                className="find-card__image"
                src="/assets/images/location-fish-island.jpg"
                alt="Interior of the Fish Island studio"
                width={441}
                height={280}
                loading="lazy"
              />
              <div className="find-card__body">
                <h3 className="find-card__name">Fish Island</h3>
                <p className="find-card__addr">
                  Studio 91, 43 Rookwood Way, Fish Island, London E3 2XF
                </p>
                <a
                  className="find-card__link"
                  href="https://maps.google.com/?q=Studio+91,+43+Rookwood+Way,+Fish+Island,+London+E3+2XF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OPEN MAPS →
                </a>
              </div>
            </article>
            <article className="find-card">
              <img
                className="find-card__image"
                src="/assets/images/location-hackney.jpg"
                alt="Interior of the Hackney Central studio under the arch"
                width={444}
                height={280}
                loading="lazy"
              />
              <div className="find-card__body">
                <h3 className="find-card__name">Hackney Central</h3>
                <p className="find-card__addr">
                  Bread &amp; Butter Arch, 3 Bohemia Place, London E8 1HA
                </p>
                <a
                  className="find-card__link"
                  href="https://maps.google.com/?q=Bread+%26+Butter+Arch,+3+Bohemia+Place,+London+E8+1HA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OPEN MAPS →
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* ===================== Footer ===================== */}
      <footer className="footer">
        <div className="footer__inner">
          <img
            className="footer__logo"
            src="/assets/images/logo-footer.png"
            alt="Social Yoga"
            width={105}
            height={107}
          />
          <div className="footer__cols">
            <div className="footer__brand">
              <div className="loc-chip loc-chip--dark">
                <span className="loc-chip__name">SOCIAL YOGA</span>
                <span className="loc-chip__row">
                  <img
                    className="loc-chip__pin"
                    src="/assets/images/pin-cream-1.svg"
                    alt=""
                    aria-hidden="true"
                    width={7}
                    height={10}
                  />
                  <span className="loc-chip__place">FISH ISLAND</span>
                </span>
              </div>
              <div className="loc-chip loc-chip--dark">
                <span className="loc-chip__name">SOCIAL YOGA</span>
                <span className="loc-chip__row">
                  <img
                    className="loc-chip__pin"
                    src="/assets/images/pin-cream-2.svg"
                    alt=""
                    aria-hidden="true"
                    width={7}
                    height={10}
                  />
                  <span className="loc-chip__place">HACKNEY CENTRAL</span>
                </span>
              </div>
            </div>

            <nav className="footer-col" aria-label="Navigate">
              <p className="footer-col__title">NAVIGATE</p>
              <div className="footer-col__links">
                <a href="#pricing">Book a class</a>
                <a href="#more">About us</a>
                <a href="#find">Contact</a>
                <a href="#pricing">Pricing</a>
                <a href="#faq-title">FAQ</a>
              </div>
            </nav>

            <div className="footer-col">
              <p className="footer-col__title">GET IN TOUCH</p>
              <form className="footer__form">
                <div className="footer__form-row">
                  <input
                    className="footer-input"
                    type="text"
                    name="name"
                    aria-label="Name"
                    placeholder="Name"
                  />
                  <input
                    className="footer-input"
                    type="email"
                    name="email"
                    aria-label="Email"
                    placeholder="Email"
                  />
                </div>
                <textarea
                  className="footer-input"
                  name="message"
                  aria-label="Message"
                  placeholder="Message"
                  rows={3}
                />
                <button className="footer-send" type="button">
                  Send
                </button>
              </form>
            </div>

            <div className="footer-col">
              <p className="footer-col__title">JOIN US IN MOMENCE</p>
              <form className="footer__form">
                <input
                  className="footer-input footer-input--pill"
                  type="email"
                  name="momence-email"
                  aria-label="Email"
                  placeholder="Email"
                />
                <button className="footer-send" type="button">
                  Send
                </button>
              </form>
            </div>
          </div>

          <a
            className="footer__insta-link"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            FOLLOW US ON INSTAGRAM →
          </a>
        </div>

        <div className="footer__insta-grid" aria-hidden="true">
          <img src="/assets/images/insta-1.jpg" alt="" width={250} height={330} loading="lazy" />
          <img src="/assets/images/insta-2.jpg" alt="" width={250} height={330} loading="lazy" />
          <img src="/assets/images/insta-3.jpg" alt="" width={250} height={330} loading="lazy" />
          <img src="/assets/images/insta-4.jpg" alt="" width={250} height={330} loading="lazy" />
          <img src="/assets/images/insta-5.jpg" alt="" width={250} height={330} loading="lazy" />
          <img src="/assets/images/insta-6.jpg" alt="" width={250} height={330} loading="lazy" />
        </div>

        <div className="footer__inner">
          <div className="footer__legal">
            <p>© 2026 Social Yoga. All rights reserved.</p>
            <div className="footer__legal-links">
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
