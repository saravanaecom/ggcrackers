import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import daycrakers from "../assets/kidsimage.jpg";
import Nightcrakers from "../assets/daycrakers.jpg";
import daycrakers2 from "../assets/nightcrackers.jpg";
// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 4px 20px rgba(255, 69, 0, 0.2); }
  50% { box-shadow: 0 8px 40px rgba(255, 69, 0, 0.6); }
`;

// Styled Components
const AnimatedCard = styled(Card)({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "all 0.4s ease",
  background: "#000",
  animation: `${float} 5s ease-in-out infinite`,
  "&:hover": {
    transform: "scale(1.05) rotate(-1deg)",
    animation: `${glow} 2s ease-in-out infinite`,
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 350,
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
  },
});

const CardContentOverlay = styled(Box)({
  position: "absolute",
  bottom: "20px",
  left: "20px",
  right: "20px",
  zIndex: 2,
  color: "#fff",
});

const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.6rem",
  marginBottom: theme.spacing(1),
  textShadow: "2px 2px 8px rgba(0,0,0,0.9)",
}));

const ActionButton = styled(Button)({
  background: "linear-gradient(45deg, #ff9800, #ff5722)",
  color: "#fff",
  fontWeight: "bold",
  textTransform: "none",
  borderRadius: "30px",
  padding: "6px 16px",
  "&:hover": {
    background: "linear-gradient(45deg, #ff5722, #e91e63)",
  },
});

const CrackerShowcaseCards = () => {
  const navigate = useNavigate();
  
  console.log("CrackerShowcaseCards rendered"); // Add this line

  function handleViewBtnClick(id, value) {
    if (id !== 'all_categories') {
      navigate(`/product-list?pcid=${btoa(id)}&pcname=${btoa(value)}`);
    } else {
      navigate(`/categories?cid=${btoa(id)}&cname=${btoa(value)}`);
    }
  }

  const crackerData = [
    {
      id: "kids_product",
      title: "kids Collection",
      image: daycrakers,
    },
    {
      id: "offer_product", 
      title: "Family Pack",
      image: daycrakers2,
    },
    {
      id: "Top_product",
      title: "Night Crackers", 
      image: Nightcrakers,
    },
  ];

  console.log("crackerData length:", crackerData.length); // Add this line

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
        }}
      >
        {crackerData.map((cracker) => (
          <AnimatedCard 
            key={cracker.id} 
            onClick={() => handleViewBtnClick(cracker.id, cracker.title)}
          >
            <StyledCardMedia image={cracker.image} />
            <CardContentOverlay>
              <CardTitle>{cracker.title}</CardTitle>
              <ActionButton>Shop Now</ActionButton>
            </CardContentOverlay>
          </AnimatedCard>
        ))}
      </Box>
    </Container>
  );
};


export default CrackerShowcaseCards;
