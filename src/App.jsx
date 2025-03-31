import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

const ProductList = lazy(() => import("./components/ProductList"));
const Cart = lazy(() => import("./components/Cart"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #cfd8dc;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #607d8b;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s;
  z-index: 50;
  margin-bottom: 10px;
`;

const Jumbotron = styled.div`
  background: url('https://images.unsplash.com/photo-1493673272479-a20888bcee10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D') center/cover no-repeat;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  font-size: 2rem;
  font-weight: bold;
  margin-top: 60px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  font-family: 'Caveat', cursive, 'Delicious Handrawn', cursive;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Footer = styled.footer`
  background-color: #455a64;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  margin-top: auto;
`;

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Container>
          <Navbar style={{ top: visible ? "0" : "-50px" }}>
            <StyledLink to='/'><Title>Paradise Nursery Shopping</Title></StyledLink> 
            <NavLinks>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/cart">Cart</StyledLink>
            </NavLinks>
          </Navbar>
          <Jumbotron>
            <h1>Paradise Nursery Shopping</h1>
            <p>Your one-stop shop for all plant and nursery needs!</p>
          </Jumbotron>
          <MainContent>
            <Suspense fallback={<p className="text-center text-gray-500">Loading...</p>}>
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetail />} /> 
              </Routes>
            </Suspense>
          </MainContent>
          <Footer>© {new Date().getFullYear()} Paradise Nursery Shopping. All rights reserved.</Footer>
        </Container>
      </Router>
    </>
  );
}

export default App;
