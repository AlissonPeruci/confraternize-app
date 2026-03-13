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
};

function Logo() {
  return (
    <Stack
      direction="row"
      spacing={1.2}
      alignItems="center"
      justifyContent="center"
    >
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
          fontSize: 19,
          fontWeight: 800,
          color: COLORS.purpleDark,
          lineHeight: 1,
        }}
      >
        Confraternize
      </Typography>
    </Stack>
  );
}

export default function CadastroPage() {
  return (
    <Box className="cadastro-page">
      <Container maxWidth="false" className="cadastro-container">
        <Box className="cadastro-grid">
          <Box className="cadastro-right">
            <Card className="cadastro-card" elevation={0}>
              <CardContent className="cadastro-card-content">
                <Box className="cadastro-logo-wrapper">
                  <Logo />
                </Box>

                <Typography className="cadastro-title">
                  Criar Conta
                </Typography>

                <Stack spacing={2.2} className="cadastro-form-fields">
                  <TextField
                    fullWidth
                    placeholder="Nome completo"
                    variant="outlined"
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
                    type="date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
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
                    placeholder="E-mail"
                    variant="outlined"
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
                    placeholder="Confirmar e-mail"
                    variant="outlined"
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
                    placeholder="Confirmar senha"
                    type="password"
                    variant="outlined"
                    InputProps={{
                      sx: {
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        height: 54,
                      },
                    }}
                  />
                </Stack>

                <Button
                  fullWidth
                  variant="contained"
                  className="cadastro-primary-button"
                >
                  Cadastrar
                </Button>

                <Button
                  fullWidth
                  variant="text"
                  className="cadastro-secondary-button"
                >
                  Já tenho conta
                </Button>

                <Box className="cadastro-login-link-wrapper">
                  <Link href="#" underline="hover" className="cadastro-login-link">
                    Voltar para login
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
