import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { FaShoppingCart } from "react-icons/fa";

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 60px);
  padding: 2rem;
  margin-top: 60px;
`;

const JumbotronTitle = styled.h1`
  width: 50%;
  text-align: left;
  font-size: 3rem;
  font-weight: bold;
`;

const JumbotronText = styled.p`
  width: 50%;
  text-align: center;
  font-size: 1.5rem;
`;

const GetStartedButton = styled.button`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
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
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const productListRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const scrollToProducts = () => {
    productListRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <GlobalStyle />
      <Navbar style={{ top: visible ? "0" : "-50px" }}>
        <StyledLink to='/'><Title>Paradise Nursery Shopping</Title></StyledLink>
        <NavLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/cart">
            <FaShoppingCart size={24} />
          </StyledLink>
        </NavLinks>
      </Navbar>
      {location.pathname === "/" && (
        <Jumbotron>
          <div style={{ width: "50%", textAlign: "left" }}>
            <JumbotronTitle>Paradise Nursery Shopping</JumbotronTitle>
            <GetStartedButton onClick={scrollToProducts}>Get Started</GetStartedButton>
          </div>
          <JumbotronText>
            Discover a lush variety of plants, flowers, and gardening essentials
            at Paradise Nursery Shopping. Whether you're a seasoned gardener or just starting out,
            we have everything you need to create a beautiful, thriving green space.
            From indoor houseplants to outdoor landscaping solutions, our collection
            is carefully curated to bring nature closer to you. Shop with confidence
            and transform your home or garden into a true paradise today!
          </JumbotronText>
        </Jumbotron>
      )}
      <MainContent ref={productListRef}>
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
  );
}

export default App;