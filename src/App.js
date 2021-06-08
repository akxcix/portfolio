import { Navbar } from './lib/components/navbar/Navbar';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { presets } from './lib/themes/presets';
import { Footer } from './lib/components/footer/Footer';
import { Spacer } from './lib/components/spacer/Spacer';
import { Routes } from './lib/routes/Routes';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    margin: 0;
  }
`
const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledRoutes = styled(Routes)`
  padding: 0 calc(max(30px, 50% - 800px));
  background-color: ${props => props.theme.background};
`;

export function App() {
  return (
    <div>
      <Router>
        <Helmet>
          <script
            src="https://kit.fontawesome.com/7a4ff18e5b.js"
            crossorigin="anonymous">
          </script>
        </Helmet>
        <ThemeProvider theme={presets[1]}>
          <GlobalStyle />
          <StyledPage>
            <Navbar />
            <StyledRoutes />
            <Spacer />
            <Footer />
          </StyledPage>
        </ThemeProvider>
      </Router>
    </div>
  )
}
