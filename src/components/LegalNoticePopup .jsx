import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, Slide } from '@mui/material';
import { styled } from '@mui/material/styles';
import GavelIcon from '@mui/icons-material/Gavel';

const LegalNoticeContainer = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#1a1a1a',
  color: '#fff',
  padding: '20px',
  zIndex: 9999,
  borderRadius: '20px 20px 0 0',
  boxShadow: '0 -4px 20px rgba(0,0,0,0.3)',
  border: '2px solid #ff6b35',
}));

const ContentBox = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '15px',
});

const IconBox = styled(Box)({
  backgroundColor: '#ff6b35',
  borderRadius: '50%',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '50px',
  height: '50px',
});

const TextContent = styled(Box)({
  flex: 1,
});

const Title = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#ff6b35',
  marginBottom: '10px',
});

const Message = styled(Typography)({
  fontSize: '14px',
  lineHeight: 1.5,
  color: '#e0e0e0',
  marginBottom: '15px',
});

const OkButton = styled(Button)({
  backgroundColor: '#ff6b35',
  color: '#fff',
  fontWeight: 'bold',
  padding: '8px 24px',
  borderRadius: '25px',
  '&:hover': {
    backgroundColor: '#e55a2b',
  },
});


const LegalNoticePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if not already dismissed
    const dismissed = localStorage.getItem('legalNoticeDismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleOk = () => {
    setIsVisible(false);
    localStorage.setItem('legalNoticeDismissed', 'true');
  };

  return (
    <Slide direction="up" in={isVisible} mountOnEnter unmountOnExit>
      <LegalNoticeContainer>
        <ContentBox>
          <IconBox>
            <GavelIcon sx={{ color: '#fff', fontSize: '30px' }} />
          </IconBox>
          <TextContent>
            <Title>Legal Notice - Supreme Court Order 2018</Title>
            <Message>
              As per 2018 supreme court order, online sale of firecrackers are not permitted! We value our customers and respect jurisdiction. Please add products to cart and submit through enquiry button. We'll contact you within 24 hrs via WhatsApp/phone. GG Crackers follows 100% legal compliance and uses registered transport services.
            </Message>
            <OkButton onClick={handleOk}>
              OK
            </OkButton>
          </TextContent>
        </ContentBox>
      </LegalNoticeContainer>
    </Slide>
  );
};

export default LegalNoticePopup;
