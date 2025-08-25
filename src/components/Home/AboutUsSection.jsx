import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import aboutus from '../../assets/aboutus.png';

const AboutUsSection = () => {
  // Animation variants
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 8 },
        background: 'linear-gradient(135deg, #fff0f5 0%, #ffe0c3 100%)',
        minHeight: 500,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        {/* LEFT IMAGE - OUTSIDE CARD, FULL HEIGHT */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={leftVariant}
            style={{ width: '100%' }}
          >
            <Box
              component="img"
              src={aboutus}
              alt="Fireworks Products"
              sx={{
                width: '100%',
                height: { xs: 320, sm: 420, md: 540, lg: 600 },
                objectFit: 'cover',
                borderRadius: 8,
                boxShadow: '0 12px 48px 0 rgba(255,107,53,0.22)',
                border: '4px solid #fff',
                background: 'rgba(255,255,255,0.7)',
                p: 1,
                mb: { xs: 3, md: 0 },
                display: 'block',
                maxWidth: '100%',
                minHeight: { xs: 250, sm: 350, md: 500, lg: 600 },
              }}
            />
          </motion.div>
        </Grid>

        {/* RIGHT CONTENT - NO CARD, OPEN LAYOUT */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rightVariant}
          >
            <Typography variant="h6" sx={{ color: "#ff6b35", fontWeight: 700, letterSpacing: 1, mb: 1, textTransform: 'uppercase' }}>
              About Us
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 900, color: "#1a1a2e", mb: 2, textAlign: 'left', letterSpacing: 1.5, lineHeight: 1.1,
              background: 'linear-gradient(90deg, #ff6b35 0%, #f4a300 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Sivakasi Best Fireworks Crackers Shop
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: '#333', fontSize: 18, fontWeight: 500 }}>
              “GG Crackers Shop” is a leading seller and supplier of premium quality Sparklers, Ground Chakkars, Flower Pots, Twinkling Stars, Pencils, Atom Bombs, Rockets, Bijili Crackers, Bird Crackers, Laxmi Crackers, Aerial Shots, Fancy Fireworks, Colour matches and Diwali Gift Boxes at competitive prices.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: '#333', fontSize: 17 }}>
              We have been growing steadily and occupying a remarkable position in the Indian Fireworks market because of our reliable quality and affordable prices. Since its inception, the group has been committed to offering high quality fire crackers at competitive prices, ensuring value for money.
            </Typography>

            <Button
              variant="contained"
              sx={{
                mb: 4,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontSize: 18,
                background: 'linear-gradient(90deg, #ff6b35 0%, #f4a300 100%)',
                boxShadow: '0 2px 12px 0 rgba(255,107,53,0.18)',
                borderRadius: '30px',
                textTransform: 'uppercase',
                letterSpacing: 1,
                transition: 'background 0.3s',
                '&:hover': {
                  background: 'linear-gradient(90deg, #f4a300 0%, #ff6b35 100%)',
                },
              }}
            >
              Read More
            </Button>

            {/* Stats */}
            <Grid container spacing={4}>
              <Grid item>
                <Typography variant="h3" sx={{ color: "#ff6b35", fontWeight: 900, textShadow: '0 2px 8px #ffd6e0' }}>
                  300+
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#f4a300", fontWeight: 700, fontSize: 18 }}>
                  Products
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="h3" sx={{ color: "#ff6b35", fontWeight: 900, textShadow: '0 2px 8px #ffd6e0' }}>
                  1000+
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#f4a300", fontWeight: 700, fontSize: 18 }}>
                  Happy Customers
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUsSection;
