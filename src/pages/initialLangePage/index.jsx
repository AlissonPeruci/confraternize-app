import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Stack,
  Paper,
  Link,
} from "@mui/material";
import "./styles.css";

import LoginImg from "../../assets/demos/Login.png";
import PainelControleImg from "../../assets/demos/Painel_de_Controle.png";
import CriarEventosImg from "../../assets/demos/Criar_Eventos.png";
import ParticipantesImg from "../../assets/demos/Gerenciamento_de_Participantes.png";
import CobrancaImg from "../../assets/demos/Cobranca.png";
import RelatoriosImg from "../../assets/demos/Relatorios.png";
import ConviteImg from "../../assets/demos/Convite.png";
import ConfirmacaoImg from "../../assets/demos/Confirmacao.png";
import ResumoImg from "../../assets/demos/Resumo.png";
import { useNavigate } from "react-router-dom";

const COLORS = {
  purple: "#7C3AED",
  teal: "#1FB6FF",
  lavender: "#F3F0FF",
  darkGray: "#333A4D",
  lightGray: "#F8F9FB",
  white: "#FFFFFF",
  border: "#E5E7EB",
};

const icons = {
  dashboard: (
    <svg width={40} height={40} fill="none" viewBox="0 0 40 40">
      <rect x="5" y="8" width="12" height="27" rx="3" fill={COLORS.purple} />
      <rect x="23" y="18" width="12" height="17" rx="3" fill={COLORS.teal} />
      <rect x="23" y="8" width="12" height="7" rx="2" fill={COLORS.lavender} />
    </svg>
  ),
  calendar: (
    <svg width={40} height={40} fill="none" viewBox="0 0 40 40">
      <rect x="7" y="10" width="26" height="22" rx="4" fill={COLORS.lavender} />
      <rect x="7" y="16" width="26" height="16" rx="2" fill={COLORS.teal} />
      <rect x="13" y="22" width="6" height="6" rx="2" fill={COLORS.white} />
      <rect x="21" y="22" width="6" height="6" rx="2" fill={COLORS.white} />
      <rect x="12" y="6" width="2" height="8" rx="1" fill={COLORS.purple} />
      <rect x="26" y="6" width="2" height="8" rx="1" fill={COLORS.purple} />
      <circle cx="33" cy="13" r="2" fill={COLORS.purple} />
      <circle cx="7" cy="13" r="2" fill={COLORS.purple} />
      <rect x="18" y="28" width="4" height="4" rx="1" fill={COLORS.purple} />
    </svg>
  ),
  contacts: (
    <svg width={40} height={40} fill="none" viewBox="0 0 40 40">
      <circle cx="20" cy="15" r="7" fill={COLORS.purple} />
      <rect x="7" y="26" width="26" height="10" rx="5" fill={COLORS.teal} />
      <circle cx="10" cy="18" r="3" fill={COLORS.lavender} />
      <circle cx="30" cy="18" r="3" fill={COLORS.lavender} />
    </svg>
  ),
  payment: (
    <svg width={40} height={40} fill="none" viewBox="0 0 40 40">
      <rect x="6" y="14" width="28" height="16" rx="4" fill={COLORS.lavender} />
      <rect x="6" y="20" width="28" height="10" rx="2" fill={COLORS.teal} />
      <rect x="10" y="24" width="8" height="4" rx="2" fill={COLORS.white} />
      <circle cx="30" cy="27" r="2" fill={COLORS.purple} />
      <rect x="18" y="16" width="8" height="2" rx="1" fill={COLORS.purple} />
    </svg>
  ),
  report: (
    <svg width={40} height={40} fill="none" viewBox="0 0 40 40">
      <rect x="8" y="10" width="24" height="20" rx="4" fill={COLORS.lavender} />
      <rect x="12" y="22" width="4" height="6" rx="2" fill={COLORS.purple} />
      <rect x="18" y="18" width="4" height="10" rx="2" fill={COLORS.teal} />
      <rect x="24" y="14" width="4" height="14" rx="2" fill={COLORS.purple} />
      <rect x="10" y="10" width="20" height="4" rx="2" fill={COLORS.white} />
    </svg>
  ),
};

function Logo() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <svg width={36} height={36} viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill={COLORS.lavender} />
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
        variant="h6"
        sx={{
          fontWeight: 700,
          color: COLORS.purple,
          letterSpacing: 0.5,
        }}
      >
        Confraternize
      </Typography>
    </Stack>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-illustration-card">
      <Box
        component="img"
        src={PainelControleImg}
        alt="Painel de controle da plataforma"
        sx={{
          width: "100%",
          maxWidth: 680,
          display: "block",
          borderRadius: 4,
        }}
      />
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="feature-card" elevation={0}>
      <CardContent
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          height: "100%",
        }}
      >
        <Box sx={{ mb: 2 }}>{icon}</Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: COLORS.purple,
            mb: 1,
            fontSize: 20,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: COLORS.darkGray,
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function DemoSection({ title, description, image, alt, reverse = false }) {
  
  return (
    <section className="demo-section">
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 5, md: 10 },
            alignItems: "center",
          }}
        >
          <Box sx={{ order: { xs: 1, md: reverse ? 2 : 1 } }}>
            <Typography
              variant="h4"
              sx={{
                color: COLORS.purple,
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: 30, md: 46 },
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: COLORS.darkGray,
                fontSize: 17,
                lineHeight: 1.8,
                maxWidth: 560,
              }}
            >
              {description}
            </Typography>
          </Box>

          <Box
            sx={{
              order: { xs: 2, md: reverse ? 1 : 2 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={image}
              alt={alt}
              sx={{
                width: "100%",
                maxWidth: 700,
                borderRadius: 4,
                boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
                border: `1px solid ${COLORS.border}`,
                backgroundColor: COLORS.white,
              }}
            />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToCadastro = () => {
    navigate("/cadastrar");
  };


  const features = [
    {
      icon: icons.dashboard,
      title: "Painel de Controle Intuitivo",
      description:
        "Visão geral instantânea do seu evento, métricas de arrecadação e status de confirmação.",
    },
    {
      icon: icons.calendar,
      title: "Criação Fácil de Eventos",
      description:
        "Configure detalhes, data, local e descrição em minutos com nosso formulário simplificado.",
    },
    {
      icon: icons.contacts,
      title: "Gestão de Participantes",
      description:
        "Importe convidados, envie convites em massa e acompanhe confirmações e pagamentos em tempo real.",
    },
    {
      icon: icons.payment,
      title: "Cobrança e Pagamentos Flexíveis",
      description:
        "Defina valores, aceite Pix, Cartão e Boleto, e envie lembretes automáticos de cobrança.",
    },
    {
      icon: icons.report,
      title: "Relatórios Detalhados",
      description:
        "Acompanhe o fluxo de caixa, exporte dados e tenha total controle financeiro do seu evento.",
    },
  ];

  return (
    <div className="landing-page">
      <AppBar
        position="sticky"
        elevation={0}
        style={{ backgroundColor: "#fff" }}
        className="landing-navbar"
      >
        <Toolbar sx={{ px: { xs: 2, md: 4 }, minHeight: 72 }}>
          <Logo />

          <Box sx={{ ml: "auto", display: "flex", gap: 1.5 }}>
            <Button
              variant="contained"
              onClick={goToLogin}
              sx={{
                backgroundColor: COLORS.purple,
                borderRadius: 999,
                px: 3,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#6D28D9",
                },
              }}
            >
              Entrar
            </Button>

            <Button
              variant="outlined"
              onClick={goToCadastro}
              sx={{
                borderColor: COLORS.purple,
                color: COLORS.purple,
                borderRadius: 999,
                px: 3,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  borderColor: COLORS.purple,
                  backgroundColor: "rgba(124,58,237,0.04)",
                },
              }}
            >
              Cadastrar
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className="landing-hero">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 6,
            alignItems: "center",
          }}
        >
          <div className="hero-illustration-wrapper">
            <HeroIllustration />
          </div>

          <Stack spacing={3}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 34, md: 52 },
                fontWeight: 800,
                color: COLORS.purple,
                lineHeight: 1.05,
                maxWidth: 650,
              }}
            >
              Organize sua Confraternização sem Estresse!
            </Typography>

            <Typography
              sx={{
                fontSize: 20,
                color: COLORS.darkGray,
                lineHeight: 1.7,
                maxWidth: 640,
              }}
            >
              A solução completa para planejar, convidar, gerenciar participantes e arrecadar
              pagamentos para seus eventos de fim de ano, churrascos e festas da empresa, tudo em
              um só lugar.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: COLORS.purple,
                  borderRadius: 999,
                  px: 4,
                  py: 1.4,
                  fontSize: 17,
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#6D28D9",
                  },
                }}
              >
                Começar Agora
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: COLORS.purple,
                  color: COLORS.purple,
                  borderRadius: 999,
                  px: 4,
                  py: 1.4,
                  fontSize: 17,
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Ver Demonstração
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>

      <section className="features-section">
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              color: COLORS.purple,
              fontWeight: 800,
              mb: 5,
            }}
          >
            Recursos da Plataforma
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </Box>
        </Container>
      </section>

      <DemoSection
        title="Login rápido para organizadores"
        description="Acesse a plataforma com uma interface simples, bonita e objetiva para começar a organizar sua confraternização em poucos segundos."
        image={LoginImg}
        alt="Tela de login do sistema"
      />

      <DemoSection
        title="Painel de controle com visão geral do evento"
        description="Tenha acesso imediato ao total arrecadado, quantidade de participantes confirmados, pagamentos recentes e indicadores importantes para acompanhar seu evento."
        image={PainelControleImg}
        alt="Painel de controle do evento"
        reverse
      />

      <DemoSection
        title="Criação de eventos em etapas"
        description="Cadastre novos eventos preenchendo informações como nome, data, horário, local e descrição de forma organizada e intuitiva."
        image={CriarEventosImg}
        alt="Tela de criação de eventos"
      />

      <DemoSection
        title="Gerenciamento completo de participantes"
        description="Visualize convidados, acompanhe status de convite e pagamento, filtre informações e faça a gestão completa da lista de participantes."
        image={ParticipantesImg}
        alt="Tela de gerenciamento de participantes"
        reverse
      />

      <DemoSection
        title="Configuração de cobrança personalizada"
        description="Defina valor por pessoa, prazo de pagamento, método principal e personalize a mensagem de cobrança para deixar a experiência mais profissional."
        image={CobrancaImg}
        alt="Tela de configuração de cobrança"
      />

      <DemoSection
        title="Relatórios financeiros detalhados"
        description="Acompanhe pagamentos realizados, valores pendentes, métodos utilizados e exporte relatórios para manter total controle financeiro."
        image={RelatoriosImg}
        alt="Tela de relatórios financeiros"
        reverse
      />

      <DemoSection
        title="Convite digital para os participantes"
        description="Compartilhe um link com o convidado para confirmar presença e realizar o pagamento de forma simples, prática e acessível pelo navegador."
        image={ConviteImg}
        alt="Tela de convite digital"
      />

      <DemoSection
        title="Confirmação automática do pagamento"
        description="Depois do pagamento, o participante recebe uma confirmação clara com dados da transação e acesso ao convite digital do evento."
        image={ConfirmacaoImg}
        alt="Tela de confirmação de pagamento"
        reverse
      />

      <DemoSection
        title="Resumo final do evento"
        description="Veja o saldo atual, custo estimado, total arrecadado, participantes confirmados e os valores por método de pagamento em uma visão consolidada."
        image={ResumoImg}
        alt="Tela de resumo final do evento"
      />

      <Paper square elevation={0} className="landing-footer">
        <Container maxWidth="xl">
          <Stack spacing={1.5} alignItems="center">
            <div className="footer-links">
              <Link href="#" className="footer-link" underline="hover">
                Termos de Uso
              </Link>
              <Link href="#" className="footer-link" underline="hover">
                Privacidade
              </Link>
              <Link href="#" className="footer-link" underline="hover">
                Contato
              </Link>
            </div>

            <Typography sx={{ color: COLORS.darkGray, fontSize: 15 }}>
              © {new Date().getFullYear()} Confraternize. Todos os direitos reservados.
            </Typography>
          </Stack>
        </Container>
      </Paper>
    </div>
  );
}
