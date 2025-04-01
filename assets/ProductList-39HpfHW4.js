import{u as j,r as o,a as C,j as e,d as r,b as k}from"./index-S4HtMFL_.js";const v=r.div`
  padding: 2rem;
`,S=r.input`
  width: 100%;
  max-width: 400px;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  background-color: #eceff1;
  margin-top: 2rem;
  &:focus {
    outline: none;
    border-color: #28a745;
    box-shadow: 0 2px 8px rgba(40, 167, 69, 0.3);
  }
`,y=r.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-top: 2rem;
`,T=r.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 100%;
  position: relative;
`,E=r.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  margin-bottom: 1rem;
`,L=r.h3`
  font-size: 1.2rem;
  color: #555;
  flex-grow: 1;
`,A=r.p`
  color: #777;
  margin: 0.5rem 0;
`,I=r.button`
  background-color: #28a745;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: auto;
  
  &:hover {
    background-color: #218838;
  }
  &.bounce {
    animation: bounce 0.6s ease-out;
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    70% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`,B=()=>{const l=j(),[n,u]=o.useState([]),[m,p]=o.useState(!0),[c,h]=o.useState(null),[i,d]=o.useState(null),[a,x]=o.useState(""),g=C();o.useEffect(()=>{(async()=>{try{const s=await fetch("https://fakestoreapi.com/products");if(!s.ok)throw new Error("Failed to fetch products");const P=await s.json();u(P)}catch(s){h(s.message)}finally{p(!1)}})()},[]);const f=o.useMemo(()=>n.filter(t=>t.title.toLowerCase().includes(a.toLowerCase())),[n,a]),b=t=>{g(`/product/${t}`)},w=t=>{l(k(t)),d(t.id),setTimeout(()=>d(null),600)};return m?e.jsx("p",{children:"Loading products..."}):c?e.jsxs("p",{children:["Error: ",c]}):e.jsxs(v,{children:[e.jsx(S,{type:"text",placeholder:"Search for products...",value:a,onChange:t=>x(t.target.value)}),e.jsx(y,{children:f.map(t=>e.jsxs(T,{onClick:()=>b(t.id),children:[e.jsx(E,{src:t.image,alt:t.title}),e.jsx(L,{children:t.title}),e.jsxs(A,{children:["R",t.price]}),e.jsx(I,{className:i===t.id?"bounce":"",onClick:s=>{s.stopPropagation(),w(t)},children:i===t.id?"Added!":"Add to Cart"})]},t.id))})]})};export{B as default};
