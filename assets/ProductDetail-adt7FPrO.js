import{g as m,u as p,r as e,j as o,d as r,b as f}from"./index-S4HtMFL_.js";const h=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`,g=r.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 5px;
  margin-top: 2rem;
`,x=r.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`,b=r.p`
  font-size: 1.5rem;
  color: #01579b;
  margin-bottom: 1rem;
  font-weight: bold;
`,P=r.p`
  color: #555;
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
`,j=r.button`
  background-color: #28a745;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #218838;
  }

  &.bounce {
    animation: bounce 0.6s ease-out;
  }

  @keyframes bounce {
    0% { transform: scale(1); }
    30% { transform: scale(1.1); }
    50% { transform: scale(1); }
    70% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`,D=()=>{const{id:s}=m(),i=p(),[t,d]=e.useState(null),[a,c]=e.useState(!1);e.useEffect(()=>{(async()=>{try{const u=await(await fetch(`https://fakestoreapi.com/products/${s}`)).json();d(u)}catch(n){console.error("Error fetching product details:",n)}})()},[s]);const l=()=>{t&&(i(f(t)),c(!0),setTimeout(()=>c(!1),600))};return t?o.jsxs(h,{children:[o.jsx(g,{src:t.image,alt:t.title}),o.jsx(x,{children:t.title}),o.jsxs(b,{children:["R",t.price]}),o.jsx(P,{children:t.description}),o.jsx(j,{className:a?"bounce":"",onClick:l,children:a?"Added!":"Add to Cart"})]}):o.jsx("p",{children:"Loading product details..."})};export{D as default};
