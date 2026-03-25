"use client";

import Image from "next/image";
import { useState } from "react";

const productTitle =
  "Easter Care Package for Kids - Prefilled Complete with Toys & Candy, Pre-made Basket Fillers";

const productPrice = "$48.95";

const ctaUrl =
  "https://victoriagraces.com/products/easter-care-package-for-kids-prefilled-complete-with-toys-candy-pre-made-basket-fillers";

const galleryImages = [
  {
    src: "https://cdn.shopify.com/s/files/1/0698/4001/1554/files/2024_Easter_Main_Image_with_Blue_bunny.jpg?v=1773248464",
    alt: "Blue bunny Easter care package",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0698/4001/1554/files/SkylarEasterPackage2_12d4ac23-7138-4ea4-b8af-b34eaa25d66b.jpg?v=1772921838",
    alt: "Lifestyle photo of the Easter care package",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0698/4001/1554/files/Mint_Green_Easter_Box_with_Girl.jpg?v=1773249219",
    alt: "Mint green Easter box with child",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0698/4001/1554/files/What_s_Included_1.jpg?v=1773249219",
    alt: "Included items collage one",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0698/4001/1554/files/What_s_Included_2.jpg?v=1773249219",
    alt: "Included items collage two",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0698/4001/1554/files/20230223_225316.jpg?v=1772738451",
    alt: "Close-up of Easter package contents",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0698/4001/1554/files/EasterPinkBunnyBox.jpg?v=1773250301",
    alt: "Pink bunny Easter package",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0698/4001/1554/files/EasterMintGreenBunnyBox_852c060c-2d87-417e-9364-043b77e89b77.jpg?v=1773250355",
    alt: "Mint green bunny Easter package",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0698/4001/1554/files/2024_Easter_Main_Image_Chick_cd1b53d0-4a1c-49ed-b578-7327cfea5929.jpg?v=1773250387",
    alt: "Chick Easter package",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0698/4001/1554/files/2024_Easter_Main_Image_with_Lamb_Plush_6479d8bf-fa93-4bb4-8404-b2f4096caed5.jpg?v=1773250404",
    alt: "Lamb Easter package",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0698/4001/1554/files/2024_Easter_Main_Image_Frog_163236ea-a9ad-468f-a970-f14f5ef066f1.jpg?v=1773250434",
    alt: "Frog Easter package",
  },
];

const highlights = [
  "High quality toys, treats, and games packed into one ready-to-gift box",
  "Assembled in the United States by a family small business",
  "Packed after ordering for freshness and quality control",
  "Designed to save Easter prep time without losing the fun",
];

const useCases = [
  "Kids and grandkids who want an instant Easter surprise",
  "Nieces, nephews, and family members getting a shipped holiday gift",
  "College students and missionaries who need a care package sent fast",
  "Busy parents who want the basket finished before the weekend starts",
];

const plushVariants = [
  "Blue Bunny",
  "Pink Bunny",
  "Mint Green Bunny",
  "Chick",
  "Lamb",
  "Frog",
];

const promiseCards = [
  {
    title: "Ready To Gift",
    copy: "This is built as a finished Easter moment, not a pile of supplies you still need to organize.",
  },
  {
    title: "Freshness Focused",
    copy: "VictoriaGraces says each package is assembled after ordering so the candy and snacks stay fresh.",
  },
  {
    title: "Family Fun Energy",
    copy: "The mix is positioned around play, treats, and celebration time together instead of filler for filler's sake.",
  },
  {
    title: "Refund Promise",
    copy: "The listing includes a satisfaction guarantee with a full refund promise if the purchase is not a fit.",
  },
];

const boxFacts = [
  { label: "Brand", value: "VictoriaGraces" },
  { label: "Price", value: productPrice },
  { label: "Assembly", value: "United States" },
  { label: "Gift Type", value: "Prefilled Easter care package" },
  { label: "Freshness", value: "Packed after ordering" },
  { label: "Plush Choices", value: "6 live variants" },
];

const faqs = [
  {
    question: "What exactly is this page selling?",
    answer:
      "This page is focused on the VictoriaGraces Easter care package product and links directly to the VictoriaGraces product listing for purchase.",
  },
  {
    question: "How many plush styles are available?",
    answer:
      "The live VictoriaGraces product data currently exposes six plush options: Blue Bunny, Pink Bunny, Mint Green Bunny, Chick, Lamb, and Frog.",
  },
  {
    question: "Are reviews included here?",
    answer:
      "Only VictoriaGraces product content is used on this page. A public first-party review feed was not exposed on the product page data I could access, so this page does not fabricate customer reviews.",
  },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);
  const previewImages = galleryImages.slice(0, 6);

  return (
    <main className="sales-page">
      <header className="amazon-header">
        <div className="amazon-header-main">
          <div className="amazon-logo">victoriagraces</div>
          <div className="amazon-search">
            <span>Search VictoriaGraces gifts, care packages, and Easter boxes</span>
          </div>
          <div className="amazon-actions">
            <span>Gift Ideas</span>
            <span>Orders</span>
            <span>Cart</span>
          </div>
        </div>
        <div className="amazon-subnav">
          <span>Easter</span>
          <span>Care Packages</span>
          <span>Kids Gifts</span>
          <span>Seasonal</span>
          <span>Ready To Ship</span>
        </div>
      </header>

      <section className="product-page">
        <div className="product-breadcrumbs">
          Grocery & Gourmet Food › Gift Baskets › Seasonal › Easter Gift Boxes
        </div>

        <div className="product-layout">
          <div className="hero-media">
            <div className="hero-image-shell">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={760}
                height={760}
                priority
              />
            </div>

            <div className="thumb-rail" aria-label="Product image thumbnails">
              {previewImages.map((image) => {
                const isActive = image.src === selectedImage.src;

                return (
                  <button
                    key={image.src}
                    type="button"
                    className={`thumb-card ${isActive ? "thumb-card-active" : ""}`}
                    onClick={() => setSelectedImage(image)}
                    aria-label={`Show ${image.alt}`}
                    aria-pressed={isActive}
                  >
                    <Image src={image.src} alt={image.alt} width={72} height={72} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="product-copy">
            <p className="brand-link">Visit the VictoriaGraces Store</p>
            <h1>{productTitle}</h1>

            <div className="rating-row">
              <span className="star-text">Source-limited page</span>
              <span className="divider-dot">|</span>
              <span>No public first-party review feed exposed</span>
            </div>

            <div className="price-block">
              <span className="price-symbol">$</span>
              <span className="price-whole">48</span>
              <span className="price-fraction">95</span>
            </div>

            <p className="shipping-copy">
              Ships through the live VictoriaGraces listing. Designed as a
              ready-to-gift Easter surprise with toys, candy, games, and a plush
              character option.
            </p>

            <div className="promo-strip">
              <span>Family small business</span>
              <span>Fresh-packed after ordering</span>
              <span>Gift-ready for Easter</span>
            </div>

            <div className="about-card">
              <h2>About this item</h2>
              <ul className="mini-points" aria-label="About this item">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="facts-table">
              {boxFacts.map((fact) => (
                <div className="fact-row" key={fact.label}>
                  <strong>{fact.label}</strong>
                  <span>{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="buy-box">
            <p className="buy-price">{productPrice}</p>
            <p className="buy-stock">In stock</p>
            <p className="buy-note">
              This page links directly to the current VictoriaGraces product for
              checkout.
            </p>
            <div className="buy-meta">
              <span>Secure checkout</span>
              <span>Gift-ready product</span>
              <span>Refund promise in source listing</span>
            </div>
            <a className="amazon-buy" href={ctaUrl} target="_blank" rel="noreferrer">
              Buy Now on VictoriaGraces
            </a>
            <a className="amazon-cart" href={ctaUrl} target="_blank" rel="noreferrer">
              View Product Details
            </a>

            <div className="variant-box">
              <p className="variant-title">Available plush styles</p>
              <div className="variant-grid">
                {plushVariants.map((variant) => (
                  <div className="variant-pill" key={variant}>
                    {variant}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="stats-band" aria-label="Trust details">
        <div>
          <strong>6</strong>
          <span>Plush animal options</span>
        </div>
        <div>
          <strong>11</strong>
          <span>VictoriaGraces product images featured below</span>
        </div>
        <div>
          <strong>USA</strong>
          <span>Assembled in the United States</span>
        </div>
        <div>
          <strong>Gift-ready</strong>
          <span>Made to save holiday prep time</span>
        </div>
      </section>

      <section className="content-grid">
        <div className="panel">
          <p className="section-kicker">Why Families Buy It</p>
          <h2>An easier Easter basket without the last-minute scramble</h2>
          <p>
            The strongest angle in the VictoriaGraces listing is convenience
            without sacrificing delight. You get toys, candy, games, and a
            plush theme in one finished package instead of spending time
            sourcing fillers separately.
          </p>
        </div>

        <div className="panel">
          <p className="section-kicker">Who It&apos;s For</p>
          <h2>Best-fit gifting moments</h2>
          <ul className="check-list">
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="section-heading">
          <p className="section-kicker">Product Gallery</p>
          <h2>All VictoriaGraces storefront images in one place</h2>
          <p>
            This gallery uses the live product image set exposed by the
            VictoriaGraces storefront data for the Easter care package.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <figure
              className={`gallery-card ${index === 0 ? "gallery-card-large" : ""}`}
              key={image.src}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={index === 0 ? 900 : 500}
                height={index === 0 ? 900 : 500}
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="promise-section">
        <div className="section-heading">
          <p className="section-kicker">Listing Signals</p>
          <h2>What helps this product convert</h2>
        </div>

        <div className="promise-grid">
          {promiseCards.map((card) => (
            <article className="promise-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews-note">
        <div className="section-heading">
          <p className="section-kicker">Reviews Boundary</p>
          <h2>Staying strict to the VictoriaGraces source</h2>
        </div>
        <p>
          You asked to keep the product and reviews tied only to
          VictoriaGraces. I found live product metadata and the full image set,
          but I did not find a public first-party review feed exposed on this
          product page, so this version intentionally avoids made-up or imported
          testimonials.
        </p>
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2>Quick answers before checkout</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <div>
          <p className="section-kicker">Ready To Buy</p>
          <h2>Open the live VictoriaGraces product and check out</h2>
          <p>
            The page now follows a more Amazon-like detail layout with a clear
            product column and right-side purchase box.
          </p>
        </div>
        <a className="amazon-buy closing-buy" href={ctaUrl} target="_blank" rel="noreferrer">
          Open VictoriaGraces Product
        </a>
      </section>
    </main>
  );
}
