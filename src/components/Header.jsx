import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link to="/" style={styles.link}>Home</Link>
          </li>
          <li style={styles.li}>
            <Link to="/steps" style={styles.link}>Steps</Link>
          </li>
          <li style={styles.li}>
            <Link to="/about" style={styles.link}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: '15px',
    position: 'sticky',
    top: 0,
    background: 'linear-gradient(135deg, #6a11cb, #2575fc)', // Gradient background
    zIndex: 100,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
  },
  ul: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  li: {
    margin: '0 20px',
  },
  link: {
    color: 'white',
    fontSize: '18px',
    textDecoration: 'none',
    fontFamily: "'Poppins', sans-serif", // Modern font
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#ff8c00',
  },
};

export default Header;
