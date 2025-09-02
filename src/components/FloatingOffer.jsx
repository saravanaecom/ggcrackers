import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// Blast animation
const blast = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.3) rotate(90deg); }
  50% { transform: scale(0.8) rotate(180deg); }
  75% { transform: scale(1.2) rotate(270deg); }
  100% { transform: scale(1) rotate(360deg); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const FloatingOfferButton = styled(Box)({
  position: 'fixed',
  bottom: '70px',
  right: '20px',
  width: '80px',
  height: '80px',
  backgroundColor: '#ff4444',
  borderRadius: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 1000,
  boxShadow: '0 4px 20px rgba(255, 68, 68, 0.4)',
  animation: `${blast} 2s infinite`,
  '&:hover': {
    backgroundColor: '#ff2222',
    animation: `${blast} 0.5s infinite`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,255,0,0.3), transparent)',
    animation: `${sparkle} 1s infinite`,
  },
});

const BoomIcon = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#fff',
  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  marginBottom: '2px',
});

const OfferText = styled(Typography)({
  color: '#fff',
  fontSize: '10px',
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight: 1,
});

const FloatingOffer = () => {
  const navigate = useNavigate();

  const handleOfferClick = () => {
    navigate(`/product-list?pcid=${btoa('Budget_blast')}&pcname=${btoa('Special Offers')}`);
  };

  return (
    <FloatingOfferButton onClick={handleOfferClick}>
      <BoomIcon>💥</BoomIcon>
      <OfferText>Budject Blast</OfferText>
    </FloatingOfferButton>
  );
};

export default FloatingOffer;
