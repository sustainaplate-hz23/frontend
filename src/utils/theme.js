import { createTheme } from "@mui/material";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#FF6600",
    },
    secondary: {
      main: "#5CA747",
    },
    tertiary: {
      main: "#DE450A",
    },
    success: {
      main: "#E8F5E5",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

theme = createTheme(theme, {
  typography: {
    h1: { fontSize: "2.3em" },
    h2: { fontSize: "1em", fontWeight: 700 },
    h3: { fontSize: "0.95em", color: theme.palette.common.black },
    h4: { fontSize: "0.7em" },
    h5: {
      fontSize: 16,
      fontWeight: "700",
      color: "black",
      "&:hover": {
        cursor: "pointer",
        color: theme.palette.primary.main,
      },
    },
    h6: {},
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {},
        html: {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          "&:hover": {
            cursor: "pointer",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,

          "&:before, &:after": {
            borderBottom: "2px solid var(--TextField-brandBorderColor)",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
        input: {
          padding: 14,
        },
      },
    },
    MuiIconButton: {
      color: theme.palette.common.black,
      variants: [
        {
          props: { variant: "text" },
          style: {},
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
