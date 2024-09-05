import React from "react";
import "./Footer.css"; // Import the stylesheet for the footer styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-sections">
        <div className="footer-column">
          <h4>Learn</h4>
          <ul>
            <li><a href="#!">Trails</a></li>
            <li><a href="#!">Trailmixes</a></li>
            <li><a href="#!">Modules</a></li>
            <li><a href="#!">Projects</a></li>
            <li><a href="#!">Trailhead Academy</a></li>
            <li><a href="#!">Career Paths</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Credentials</h4>
          <ul>
            <li><a href="#!">Superbadges</a></li>
            <li><a href="#!">Certifications</a></li>
            <li><a href="#!">Maintain Certifications</a></li>
            <li><a href="#!">Verify Certifications</a></li>
            <li><a href="#!">Take Free Certification Prep</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Community</h4>
          <ul>
            <li><a href="#!">Trailblazer Community</a></li>
            <li><a href="#!">Events</a></li>
            <li><a href="#!">Quests</a></li>
            <li><a href="#!">Be a Multiplier (BAM)</a></li>
            <li><a href="#!">Salesforce Developers</a></li>
            <li><a href="#!">Salesforce Admins</a></li>
            <li><a href="#!">Trailblazer Connect</a></li>
            <li><a href="#!">Report Illegal Content (EU)</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Extras</h4>
          <ul>
            <li><a href="#!">Sales Enablement</a></li>
            <li><a href="#!">Customer Stories</a></li>
            <li><a href="#!">Trail Tracker</a></li>
            <li><a href="#!">Sample Gallery</a></li>
            <li><a href="#!">Trailhead Store</a></li>
            <li><a href="#!">Trailhead Help</a></li>
          </ul>
        </div>
      </div> */}

      <div className="footer-bottom">

        <div className="footer-info">
          <p>© 2024 Nagrik aur Samvidhan. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#!">Privacy Statement</a></li>
            <li><a href="#!">Terms of Use</a></li>
            <li><a href="#!">Use of Cookies</a></li>
            <li><a href="#!">Trust</a></li>
            <li><a href="#!">Accessibility</a></li>
            <li><a href="#!">Cookie Preferences</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="#!"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#!"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="#!"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
          <a href="#!"><img src="headphones-icon.png" alt="Help" /></a>
        </div>

        <div className="footer-language">
          <select>
            <option value="english">English</option>
            <option value="french">Français</option>
            <option value="spanish">Español</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;