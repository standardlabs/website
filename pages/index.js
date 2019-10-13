import Head from "next/head";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

const Home = () => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setBlink(blink => !blink), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Space+Mono|Work+Sans&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="content">
        <h1>
          <span className={classNames("cursor", { blink })}>S</span>tandard
          Labs.
        </h1>
        <p>Software consulting</p>
      </div>
      <style jsx>{`
        h1,
        p {
          color: #fff;
          margin: 0;
        }

        span.cursor {
          transition: all 0.2s ease-out;
        }

        span.cursor.blink {
          background-color: #fff;
          color: #333;
        }

        div.content {
          margin: auto;
          text-align: center;
        }

        div.container {
          align-items: center;
          background-color: #333;
          display: flex;
          flex-wrap: wrap;
          min-height: 100%;
        }
      `}</style>
      <style jsx global>{`
        html,
        body,
        div#__next {
          height: 100%;
          margin: 0;
        }

        body {
          font-family: Work Sans;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: Space Mono;
        }
      `}</style>
    </div>
  );
};

export default Home;
