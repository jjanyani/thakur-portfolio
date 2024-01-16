import React, { useState } from 'react';


const Header = () => {
  const [bar, setBar] = useState(false);

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1280px',
    width: '80%',
    margin: '0 auto',
    padding: '1.5rem 0',
    position: 'relative',
    animation: 'header 500ms ease-in-out',
    '@media(max-width: 840px)': {
      width: '90%',
    },
    '.bars': {
      display: 'none',
      '@media(max-width:640px)': {
        width: '40px',
        height: '40px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
        zIndex: '100',
        '.bar': {
          position: 'absolute',
          width: '100%',
          height: '2px',
          backgroundColor: bar ? 'transparent' : '#fff',
          transition: 'all 400ms ease-in-out',
          ':before, :after': {
            content: '""',
            width: '100%',
            height: '2px',
            backgroundColor: '#fff',
            position: 'absolute',
          },
          ':before': {
            transform: bar ? 'rotate(45deg)' : 'translateY(10px)',
            transition: 'all 400ms ease-in-out',
          },
          ':after': {
            transform: bar ? 'rotate(-45deg)' : 'translateY(-10px)',
            transition: 'all 400ms ease-in-out',
          },
        },
      },
    },
  };

  const logoStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    span: {
      fontSize: '1.8rem',
    },
    h1: {
      fontWeight: '600',
      fontSize: '1.2rem',
    },
  };

  const navStyles = {
    '@media(max-width:640px)': {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#01be96',
      inset: 0,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem',
      gap: '2rem',
      fontWeight: '700',
      height: bar ? '100vh' : 0,
      transition: 'height 400ms ease-in-out',
      overflow: 'hidden',
      zIndex: '100',
    },
    span: {
      marginLeft: '1rem',
      a: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: '400',
        position: 'relative',
        ':before': {
          content: '""',
          position: 'absolute',
          left: '0',
          right: '0',
          bottom: '-5px',
          height: '2px',
          backgroundColor: '#fff',
          transform: 'scale(0)',
          transformOrigin: 'right',
          transition: 'transform 400ms ease-in-out',
        },
        ':hover:before': {
          transform: 'scale(1)',
          transformOrigin: 'left',
        },
        ':hover': {
          opacity: '0.7',
        },
      },
    },
  };

  return (
    <div style={containerStyles} bar={bar}>
      <div style={logoStyles}>
       
        <h1>Portfolio</h1>
      </div>
      <div style={navStyles}>
        <span>
          <a href="#home">Home</a>
        </span>
        <span>
          <a href="#service">Services</a>
        </span>
        <span>
          <a href="#project">Projects</a>
        </span>
        <span>
          <a href="#client">Testimonials</a>
        </span>
        <span>
          <a href="#footer">Portfolio</a>
        </span>
      </div>
      <div
        onClick={() => setBar(!bar)}
        className="bars"
        style={containerStyles['.bars']}
      >
        <div className="bar" style={containerStyles['.bars']['.bar']}></div>
      </div>
    </div>
  );
};

export default Header;
