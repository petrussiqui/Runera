// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useTheme from '@mui/material/styles/useTheme';
// CUSTOM COMPONENTS
import Footer from './Footer';
import Header from './Header';
// CUSTOM UTILS METHOD
import { isDark } from 'utils/constants';
export default function MainLayout({
  children
}) {
  return <Box bgcolor={isDark(useTheme()) ? 'background.default' : 'white'}>
      {/* HEADER SECTION */}
      <Container maxWidth="lg">
        <Header />
      </Container>

      {/* MAIN CONTENT RENDER SECTION */}
      {children}

      {/* FOOTER SECTION */}
      <Footer />
    </Box>;
}