import React, { useState, useEffect } from 'react';
import './Bio.css';
import './Bio.mobile.css';
import { Link } from 'gatsby';

import avi from '../../assets/images/kadet_big.png';

const openCal = e => {
  e.preventDefault();
  if (typeof window !== 'undefined' && window.Cal) {
    window.Cal('modal', {
      calLink: 'kadetxx/30min',
      config: { layout: 'month_view', theme: 'dark' },
    });
  }
};

const Bio = ({ active, onTabChange }) => {
  // reactive, not just read at click-time -- so the mobile in-place tab
  // switch never races against gatsby Link's own click handling. Below
  // 993px we render a plain, non-navigating element instead of a Link
  // at all, rather than rendering a Link and fighting it with
  // preventDefault (that fight was the likely cause of the occasional
  // freeze: an in-flight SPA navigation getting cancelled mid-flight).
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 993px)');
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const renderNavLink = (to, tab, label) => {
    if (isMobile && onTabChange) {
      return (
        <a href={to} onClick={e => { e.preventDefault(); onTabChange(tab); }}>
          <span className="menu_bullet"></span> {label}
        </a>
      );
    }

    return (
      <Link to={to}>
        <span className="menu_bullet"></span> {label}
      </Link>
    );
  };

  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>
            Hello, I'm <br /> Collins Enebeli.
          </h1>
          <div className="avi">
            <img src={avi} alt="avatar" />
          </div>
        </div>

        <div className="description">
          <p>
            <span>
              I spec, design, build, and maintain{' '}
              <span className="highlight">software</span>. These days, that mostly involves
              teaming up with <span className="highlight">AI agents</span> to craft{' '}
              <span className="highlight">interfaces that feel alive</span>, or shipping the{' '}
              <span className="highlight">pipeline</span> that gets the next one
              running<span className="period">.</span>
              <span className="dash"> — </span>
              <a
                href="#"
                onClick={openCal}
                className="lets_talk_cta highlight"
                aria-label="Book a call">
                <span className="lets_talk_text_mobile"> let's talk →</span>
                <i className="fas fa-phone-alt lets_talk_text_desktop" aria-hidden="true"></i>
              </a>
            </span>
          </p>
        </div>

        <div className="go_button_container">
          <Link to="/work" className="explore">
            <button className="explore">
              Explore <span className="material-icons">arrow_right</span>
            </button>
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li className={active === 'work' ? 'active_menu' : ''}>
            <small>
              <span>00</span>
              {renderNavLink('/', 'work', 'WORK')}
            </small>
          </li>

          <li className={active === 'blog' ? 'active_menu' : ''}>
            <small>
              <span>01</span>
              {renderNavLink('/blog', 'blog', 'ARTICLES')}
            </small>
          </li>

          <li className={active === 'resume' ? 'active_menu' : ''}>
            <small>
              <span>02</span>
              <a href="#" onClick={openCal}>
                <span className="menu_bullet"></span> SAY HELLO
              </a>
            </small>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <img src={avi} alt="" />
        <div className="social">
          <a href="https://github.com/kadetXx" target="_blank" rel="noopener noreferrer">
            Github <i className="fas fa-external-link-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/collinsenebeli/"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn <i className="fas fa-external-link-alt"></i>
          </a>

          <a href="mailto:hello@kadet.dev" target="_blank" rel="noopener noreferrer">
            Email <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bio;
