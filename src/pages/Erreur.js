// mise en place de la page d'erreur 404
import React from 'react';
import styles from '../style/Erreur.module.css';
import { Link } from 'react-router-dom';

// création de la page Erreur et lien vers page Home
export default function Erreur() {
  return (
    <div className={styles.errorPage}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}
