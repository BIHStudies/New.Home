/* ==========================================
   SECTION 7 — NEWS & EVENTS
   BIHS HOMEPAGE
   ========================================== */

.news-home-section {
  background: #ffffff;
  color: var(--navy);
  padding: clamp(65px, 7vw, 95px) 24px;
  scroll-margin-top: 120px;
}

.news-home-inner {
  max-width: 1240px;
  margin: 0 auto;
}

/* SECTION HEADING */

.news-home-heading {
  max-width: 850px;
  margin-bottom: 35px;
}

.news-home-kicker {
  color: var(--gold);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 18px;
}

.news-home-heading h2 {
  color: var(--navy);
  font-size: clamp(40px, 5vw, 70px);
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin: 0 0 22px;
}

.news-home-heading h2 em {
  color: var(--gold);
  font-family: Georgia, serif;
  font-weight: 400;
}

.news-home-intro {
  color: var(--text-muted);
  font-size: 18px;
  line-height: 1.7;
  max-width: 720px;
  margin: 0;
}

/* THREE EDITORIAL COLUMNS */

.news-home-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
}

.news-home-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* NEWS PHOTOGRAPHS */

.news-home-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  background-color: var(--cream);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  overflow: hidden;
}

/* RESEARCH IMAGE — TEMPORARY */

.news-image-research {
  background-color: var(--navy);
  /* background-image: url('../img/new/news-research.jpg'); */
}

/* UPCOMING COURSES IMAGE — TEMPORARY */

.news-image-courses {
  background-color: var(--cream);
  /* background-image: url('../img/new/news-courses.jpg'); */
}

/* BRAZIL AND ITALY IMAGE — TEMPORARY */

.news-image-global {
  background-color: var(--navy-dark);
  /* background-image: url('../img/new/news-global.jpg'); */
}

/* EDITORIAL CONTENT */

.news-home-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 22px 0 0;
}

.news-home-category {
  color: var(--gold);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0 0 12px;
}

.news-home-content h3 {
  color: var(--navy);
  font-size: clamp(23px, 2.2vw, 30px);
  line-height: 1.25;
  letter-spacing: -.5px;
  margin: 0 0 14px;
}

.news-home-description {
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.7;
  margin: 0 0 20px;
}

/* INDIVIDUAL NEWS LINKS */

.news-home-link {
  display: inline-block;
  align-self: flex-start;
  margin-top: auto;
  color: var(--navy);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  border-bottom: 2px solid var(--gold-soft);
  padding-bottom: 5px;
  transition: color .2s ease;
}

.news-home-link:hover {
  color: var(--gold);
}

/* OPTIONAL SAVE THE DATE */

.news-home-date {
  color: var(--gold);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0 0 18px;
}

/* NEWSLETTER AND NEWS ARCHIVE */

.news-home-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid rgba(177, 124, 39, .35);
}

/* PRIMARY NEWSLETTER BUTTON */

.news-home-newsletter {
  display: inline-block;
  background: var(--navy);
  color: #ffffff;
  padding: 17px 25px;
  border: 1px solid var(--gold-soft);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.4;
  text-decoration: none;
  transition: background .2s ease;
}

.news-home-newsletter:hover {
  background: var(--navy-dark);
  color: var(--gold-soft);
}

/* SECONDARY NEWS LINK */

.news-home-all {
  color: var(--navy);
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 2px solid var(--gold);
  padding-bottom: 6px;
  transition: color .2s ease;
}

.news-home-all:hover {
  color: var(--gold);
}

/* TABLET */

@media (max-width: 900px) {

  .news-home-grid {
    gap: 20px;
  }

  .news-home-content h3 {
    font-size: 24px;
  }

}

/* MOBILE */

@media (max-width: 650px) {

  .news-home-section {
    padding: 60px 20px;
  }

  .news-home-heading h2 {
    font-size: 40px;
  }

  .news-home-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .news-home-content {
    padding-top: 18px;
  }

  .news-home-card {
    padding-bottom: 26px;
    border-bottom: 1px solid rgba(177, 124, 39, .20);
  }

  .news-home-card:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .news-home-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .news-home-newsletter {
    width: 100%;
    text-align: center;
  }

}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {

  .news-home-section a {
    transition: none;
  }

}

/* ==========================================
   END NEWS & EVENTS SECTION
   ========================================== */