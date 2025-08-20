import React from "react";
import { Box, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

// Animations
const rotateRing = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
`;

// Outer rotating glow ring
const GlowRing = styled(Box)(() => ({
  position: "absolute",
  width: "115px",
  height: "115px",
  borderRadius: "50%",
  background:
    "conic-gradient(from 0deg, #ff0000, #ff4d4d, #cc0000, #ff1a1a, #ff0000)",
  animation: `${rotateRing} 10s linear infinite`,
  filter: "blur(6px)",
  zIndex: 0,
}));

// Main floating button
const FloatingOfferButton = styled(Box)(() => ({
  position: "fixed",
  bottom: "25px",
  right: "25px",
  width: "95px",
  height: "95px",
  borderRadius: "50%",
  backdropFilter: "blur(10px)",
  background: "linear-gradient(135deg, rgba(255,0,0,0.85), rgba(200,0,0,0.9))",
  border: "3px solid #fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  zIndex: 1000,
  animation: `${pulse} 3s infinite`,
  overflow: "hidden",
  boxShadow: "0 6px 30px rgba(255,0,0,0.6)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.15)",
    boxShadow: "0 8px 45px rgba(255,0,0,0.9)",
    border: "3px solid #fff",
  },
}));

// Icon style
const OfferIcon = styled(LocalOfferIcon)(() => ({
  fontSize: "38px",
  color: "#fff",
  marginBottom: "5px",
}));

// Text style
const OfferText = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#fff",
  textShadow: "0px 1px 3px rgba(0,0,0,0.6)",
}));

// Component
const FloatingOffer = () => {
  const navigate = useNavigate();

  const handleOfferClick = () => {
    navigate(
      `/product-list?pcid=${btoa("Budget_blast")}&pcname=${btoa("Special Offers")}`
    );
  };

  return (
    <Box sx={{ position: "relative" }}>
      <GlowRing />
      <FloatingOfferButton onClick={handleOfferClick}>
        <OfferIcon />
        <OfferText>Budget Blast</OfferText>
      </FloatingOfferButton>
    </Box>
  );
};

export default FloatingOffer;
