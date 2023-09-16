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
  shape: {
    borderRadius: 25,
  },
  typography: {
    fontFamily: "Inter",
  },
});

theme = createTheme(theme, {
  typography: {
    h1: { fontSize: "4rem" },
    h2: {},
    h3: {},
    h4: {},
    h5: {},
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
  },
});
