import React from "react";
import { Helmet } from "react-helmet";

export default () => (
  <main>
    <Helmet>
      <html lang="en" />

      <meta charSet="utf-8" />
      <meta name="author" content="Gabriel Majeri" />

      <title>Gabriel Majeri &mdash; Welcome!</title>

      {/*
        Open all links in a new tab/window by default, and prevent
        the target page from accessing this page's object.
      */}
      <base target="_blank" rel="noopener" />
    </Helmet>
    <header>
      <h1>Gabriel Majeri</h1>
      <p>Student & open-source contributor</p>
    </header>
    <section>
      <h2>Projects</h2>
      <p>
        I keep most of my projects{" "}
        <a href="https://github.com/GabrielMajeri">on GitHub</a>. I strongly
        believe freely sharing knowledge on the internet is essential for a
        healthy society.
      </p>
      <p>
        I also have a <a href="https://blog.gabrielmajeri.ro/">blog</a>,
        although I don't write in it as often as I'd want.
      </p>
    </section>
    <section>
      <h2>Contact</h2>
      <p>
        The best way to reach me is through my{" "}
        <a href="mailto:gabriel.majeri6@gmail.com">email</a>.
      </p>
      <p>
        You can find me on{" "}
        <a href="https://www.linkedin.com/in/gabriel-majeri/">LinkedIn</a>.
        <br />
        Feel free to drop a message, although be advised I don't accept
        connections from people I haven't met beforehand.
      </p>
    </section>
    <footer>
      This site is hosted for free on{" "}
      <a href="https://pages.github.com/">GitHub Pages.</a>
    </footer>
  </main>
);
