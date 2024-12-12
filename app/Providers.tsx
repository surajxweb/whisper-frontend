"use client";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = extendTheme({
    colors: {
      kindaPurple: {
        50: "#eef2ff", // Lightest shade for backgrounds
        100: "#d0dcff", // Light accent
        200: "#b2c6ff",
        300: "#94b0ff", // Medium-light
        400: "#769aff", // Slightly lighter than base
        500: "#6175F3", // Base color
        600: "#4e60d1", // Slightly darker
        700: "#3a4caf", // Dark accent
        800: "#27388d", // Darker shade
        900: "#15256b", // Darkest shade for borders or active states
      },
      clearlyWhite: {
        50: "#fafafa", // Lightest shade for backgrounds
        100: "#f2f2f3", // Light accent
        200: "#ebebeb",
        300: "#e4e4e5", // Medium-light
        400: "#ddddde", // Slightly lighter than base
        500: "#E2E2E3", // Base color
        600: "#c9c9ca", // Slightly darker
        700: "#b0b0b1", // Dark accent
        800: "#989899", // Darker shade
        900: "#808080", // Darkest shade for borders or active states
      },
      itsDark: {
        50: "#e9e9ea", // Lightest shade for backgrounds
        100: "#c7c8c9", // Light accent
        200: "#a6a7a8",
        300: "#858687", // Medium-light
        400: "#646566", // Slightly lighter than base
        500: "#363738", // Base color
        600: "#2f3031", // Slightly darker
        700: "#28292a", // Dark accent
        800: "#212223", // Darker shade
        900: "#1a1b1c", // Darkest shade for borders or active states
      },
      goGreen: {
        50: "#e3f9e5", // Lightest shade for backgrounds
        100: "#c1f0ca", // Light accent
        200: "#a0e8af",
        300: "#7fe095", // Medium-light
        400: "#5ed87b", // Slightly lighter than base
        500: "#38A169", // Base color
        600: "#2e8154", // Slightly darker
        700: "#24623f", // Dark accent
        800: "#1a432b", // Darker shade
        900: "#112417", // Darkest shade for borders or active states
      },

      borderViolet: "#848ff7",
      lightBorderGrey: "#474748",
      grey: "#363738",
      primaryWhite: "#E2E2E3",
      hoverGrey: "#454545",
      hoverBorderGrey: "#565656",
      focusBorderGrey: "#666666",
      textOnWhite: "#202122",
    },
    styles: {
      global: () => ({
        body: {
          bg: "linear-gradient(113deg, #141517 0%, #08090A 100%)",
          color: "#e2e2e3",
        },
      }),
    },
  });

  return (
    <ChakraProvider theme={theme} disableGlobalStyle={true}>
      {children}
    </ChakraProvider>
  );
}
