import React from "react";
import git from "../img/icons8-github-48.png";
import lin from "../img/icons8-linkedin-50.png";
import twit from "../img/icons8-logo-twitter-encadré-50.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div>
          <h4>John Doe</h4>
          <p>40 Rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>Téléphone : 06 20 30 40 50</p>
          <img src={git} alt="GitHub" />
          <img src={twit} alt="Twiter" />
          <img src={lin} alt="Linkedin" />
        </div>
        <div>
          <h4>Liens utiles</h4>
          <ul>
            <li>Accueil</li>
            <li>A propos</li>
            <li>Services</li>
            <li>Me contacter</li>
            <li>Mentions légales</li>
          </ul>
        </div>
        <div>
          <h4>Mes dernières réalisations</h4>
          <ul>
            <li>Fresh food</li>
            <li>Restaurant Akira</li>
            <li>Espace bien-être</li>
          </ul>
        </div>
        <div>
          <h4>Mes derniers articles</h4>
          <ul>
            <li>Coder son site en HTML/CSS</li>
            <li>Vendre ses produits sur le web</li>
            <li>Se positionner sur Google</li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <p>© Designed by John Doe</p>
      </div>
    </div>
  );
};

export default Footer;
