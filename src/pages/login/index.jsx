import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./styles.css";

import Party from "../../assets/demos/Party2.png";

const COLORS = {
  purple: "#6366B3",
  purpleDark: "#5659A5",
  teal: "#57C7B6",
  lavender: "#F4F1FF",
  blueLight: "#EAF7FF",
  dark: "#1F2937",
  text: "#4B5563",
  white: "#FFFFFF",
  border: "#E5E7EB",
};

function Logo() {
  return (
    <Stack direction="row" spacing={1.2} alignItems="center">
      <svg width={42} height={42} viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#EEF2FF" />
        <ellipse cx="12" cy="16" rx="4" ry="4" fill={COLORS.purple} />
        <ellipse cx="24" cy="16" rx="4" ry="4" fill={COLORS.purple} />
        <ellipse cx="18" cy="24" rx="6" ry="6" fill={COLORS.purple} />
        <polyline
          points="14,24 18,28 26,18"
          fill="none"
          stroke={COLORS.teal}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 800,
          color: COLORS.purpleDark,
        }}
      >
        Confraternize
      </Typography>
    </Stack>
  );
}

export default function LoginPage() {
  return (
    <Box className="login-page">
      <Container maxWidth="xl" className="login-container">
        <Box className="login-grid">
          <Box className="login-left">
            <Box
              component="img"
              src={Party}
              alt="Pessoas comemorando"
              className="login-hero-image"
            />
          </Box>

          <Box className="login-right">
            <Card className="login-card" elevation={0}>
              <CardContent className="login-card-content">
                <Box className="login-logo-wrapper">
                  <Logo />
                </Box>

                <Stack spacing={2.2} className="login-form-fields">
                  <TextField
                    fullWidth
                    placeholder="E-mail"
                    variant="outlined"
                    size="medium"
                    InputProps={{
                      sx: {
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        height: 54,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    placeholder="Senha"
                    type="password"
                    variant="outlined"
                    size="medium"
                    InputProps={{
                      sx: {
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        height: 54,
                      },
                    }}
                  />
                </Stack>

                <Box className="login-forgot-wrapper">
                  <Link href="#" underline="hover" className="login-forgot-link">
                    Esqueci minha senha
                  </Link>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  className="login-primary-button"
                >
                  Entrar
                </Button>

                <Button
                  fullWidth
                  variant="text"
                  className="login-secondary-button"
                >
                  Criar Conta
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
