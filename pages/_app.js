import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#333",
    blue: alpha => `rgba(0, 145, 255, ${alpha})`,
    highlight: "rgba(216, 255, 0, 0.2)",
    text: "#fff"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
