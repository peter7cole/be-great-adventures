import * as React from 'react';
import { Header } from '../components/header';
import { NavBar } from '../components/navbar';
import '@fontsource/karla';
import '../layouts/index.css';

const IndexPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <main style={{ fontFamily: 'karla' }}>
        <h1 style={{ fontSize: '36px' }}>
          Welcome to
          <br />
          <span>Be Great Adventures!</span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
      </main>
    </>
  );
};

export default IndexPage;
