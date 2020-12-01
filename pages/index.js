import Head from "next/head";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const Fade = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.8s ease;
`;

const Styles = createGlobalStyle`
  html,
  body,
  div#__next {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: Work Sans; sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Space Mono, monospace;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  text-shadow: 1px 1px 5px ${({ theme }) => theme.colors.blue(0.35)};
`;

const Cursor = styled.span`
  background-color: ${({ blink, theme }) =>
    blink ? theme.colors.text : theme.colors.background};
  color: ${({ blink, theme }) =>
    blink ? theme.colors.background : theme.colors.text};
  text-shadow: ${({ blink }) => blink && "none"};
  transition: all 0.2s ease-out;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const Link = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue(1)};
  display: inline-block;
  margin-top: 5px;
  opacity: 0.8;
  position: relative;
  text-decoration: none;
  transition: opacity 0.5s ease-out;
  z-index: 0;

  &:before {
    background-color: ${({ theme }) => theme.colors.highlight};
    bottom: 0;
    content: "";
    left: -4px;
    position: absolute;
    top: 0;
    transform: skew(-10deg, 0deg);
    transition: width 0.2s ease-out;
    width: 0;
    z-index: 1;
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    &:before {
      width: 105%;
    }
  }
`;

const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;
`;

const Content = styled.div`
  margin: auto;
  text-align: center;
`;

const Home = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [blink, setBlink] = useState(false);

  useEffect(async () => {
    await wait(500);
    setShowTitle(true);

    await wait(500);
    setShowText(true);

    const interval = setInterval(() => setBlink(blink => !blink), 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Styles />
      <Container>
        <Head>
          <title>Standard Labs | Software consulting</title>
          <link
            href="https://fonts.googleapis.com/css?family=Space+Mono|Work+Sans&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <Content>
          <Fade show={showTitle}>
            <Title>
              <Cursor blink={blink}>S</Cursor>tandard Labs
            </Title>
          </Fade>
          <Fade show={showText}>
            <Text>Software consulting</Text>
            <Link
              href="mailto:info@standardlabs.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@standardlabs.dev
            </Link>
          </Fade>
        </Content>
      </Container>
    </>
  );
};

export default Home;
