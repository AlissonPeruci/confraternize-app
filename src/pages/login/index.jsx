
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
import React, { useState } from "react";
import Party from "../../assets/demos/Party2.png";
import api from "../../services/api";

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
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleLogin = async () => {
  console.log("1. entrou na função");
  setMessage("");

  try {
    console.log("2. entrou no try");

    setLoading(true);
    console.log("3. antes da requisição", form);

    const response = await api.post("/Auth/login", {
      email: form.email,
      password: form.password,
    });

    console.log("4. resposta da API", response.data);

    setMessage("Login realizado com sucesso.");
  } catch (error) {
    console.error("5. erro no catch", error);
    const apiMessage =
      error.response?.data?.message ||
      error.response?.data ||
      "Erro ao realizar login.";

    setMessage(typeof apiMessage === "string" ? apiMessage : "Erro ao realizar login.");
  } finally {
    console.log("6. finally");
    setLoading(false);
  }
};

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

                <Typography className="login-title">Login do Organizador</Typography>

                <Stack spacing={2.2} className="login-form-fields">
                  <TextField
                    fullWidth
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleChange("email")}
                  />

                  <TextField
                    fullWidth
                    placeholder="Senha"
                    type="password"
                    value={form.password}
                    onChange={handleChange("password")}
                  />
                </Stack>

                <Box className="login-forgot-wrapper">
                  <Link href="#" underline="hover" className="login-forgot-link">
                    Esqueci minha senha
                  </Link>
                </Box>

                {message && (
                  <Typography sx={{ mb: 2, textAlign: "center", color: "#374151" }}>
                    {message}
                  </Typography>
                )}

                <Button
                  fullWidth
                  variant="contained"
                  className="login-primary-button"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? "Entrando..." : "Entrar"}
                </Button>

                <Button fullWidth variant="text" className="login-secondary-button">
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
