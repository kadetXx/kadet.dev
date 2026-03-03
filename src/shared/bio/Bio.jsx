import React from 'react';
import './Bio.css';
import './Bio.mobile.css';
import { Link } from 'gatsby';

import avi from '../../assets/images/kadet_big.png';
import arrow from '../../assets/svg/arrow.svg';

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
  const handleNavClick = (e, tab) => {
    if (onTabChange && typeof window !== 'undefined' && window.innerWidth <= 993) {
      e.preventDefault();
      onTabChange(tab);
    }
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
              I solve <span className="highlight">problems</span>. These days, you'll find
              me neck-deep in <span className="highlight">design</span> and{' '}
              <span className="highlight">product engineering</span> or tinkering with{' '}
              <span className="highlight">llms</span>, however testing and{' '}
              <span className="highlight">deploying solutions</span> transcends field,{' '}
              <span className="highlight">architecture stack,</span> or programming
              language
              <span className="dash"> — </span>
              <a href="#" onClick={openCal} className="lets_talk_cta highlight">
                {' '}
                let's talk →
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
              <Link to="/" onClick={e => handleNavClick(e, 'work')}>
                <span className="menu_bullet"></span> WORK
              </Link>
            </small>
          </li>

          <li className={active === 'blog' ? 'active_menu' : ''}>
            <small>
              <span>01</span>
              <Link to="/blog" onClick={e => handleNavClick(e, 'blog')}>
                <span className="menu_bullet"></span> ARTICLES
              </Link>
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
            <i className="fab fa-github"></i> Github
            <img src={arrow} alt="pointer" />
          </a>

          <a
            href="https://www.linkedin.com/in/collinsenebeli/"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn <img src={arrow} alt="pointer" />
          </a>

          <a href="mailto:hello@kadet.dev" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-at"></i> Email <img src={arrow} alt="pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bio;
