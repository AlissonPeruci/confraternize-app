import React, { useState } from "react";
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
import api from "../../services/api";
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

    const [form, setForm] = useState({
    name: "",
    birthDate: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleRegister = async () => {
    setMessage("");

    if (form.email !== form.confirmEmail) {
      setMessage("Os e-mails não coincidem.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("As senhas não coincidem.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        name: form.name,
        email: form.email,
        birthDate: form.birthDate || null,
        password: form.password,
      };

      const response = await api.post("/Auth/register", payload);

      setMessage(response.data?.message || "Usuário cadastrado com sucesso.");
    } catch (error) {
      const apiMessage =
        error.response?.data?.message ||
        error.response?.data ||
        "Erro ao cadastrar usuário.";

      setMessage(typeof apiMessage === "string" ? apiMessage : "Erro ao cadastrar usuário.");
    } finally {
      setLoading(false);
    }
  };
  return (
     <Box className="cadastro-page">
      <Container maxWidth={false} className="cadastro-container">
        <Card className="cadastro-card">
          <CardContent className="cadastro-card-content">
            <Box className="cadastro-logo-wrapper">
              <Logo />
            </Box>

            <Typography className="cadastro-title">Criar Conta</Typography>

            <Stack spacing={2.2}>
              <TextField
                fullWidth
                placeholder="Nome completo"
                value={form.name}
                onChange={handleChange("name")}
              />

              <TextField
                fullWidth
                type="date"
                label="Data de nascimento"
                InputLabelProps={{ shrink: true }}
                value={form.birthDate}
                onChange={handleChange("birthDate")}
              />

              <TextField
                fullWidth
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange("email")}
              />

              <TextField
                fullWidth
                placeholder="Confirmar e-mail"
                value={form.confirmEmail}
                onChange={handleChange("confirmEmail")}
              />

              <TextField
                fullWidth
                placeholder="Senha"
                type="password"
                value={form.password}
                onChange={handleChange("password")}
              />

              <TextField
                fullWidth
                placeholder="Confirmar senha"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange("confirmPassword")}
              />
            </Stack>

            {message && (
              <Typography sx={{ mt: 2, textAlign: "center", color: "#374151" }}>
                {message}
              </Typography>
            )}

            <Button
              fullWidth
              variant="contained"
              className="cadastro-primary-button"
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
