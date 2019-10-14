import Head from "next/head";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

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
  text-shadow: 1px 1px 5px ${({ theme }) => theme.colors.shadow};
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
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setBlink(blink => !blink), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Styles />
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Space+Mono|Work+Sans&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <Content>
          <Title>
            <Cursor blink={blink}>S</Cursor>tandard Labs.
          </Title>
          <Text>info@standardlabs.dev</Text>
        </Content>
      </Container>
    </>
  );
};

export default Home;
