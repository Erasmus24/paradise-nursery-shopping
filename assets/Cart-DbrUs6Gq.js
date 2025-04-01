import{c as s,u as c,j as r,e as d,i as l,f as x,d as e}from"./index-S4HtMFL_.js";const m=e.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,p=e.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`,g=e.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-bottom: 2rem;
`,u=e.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`,h=e.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  margin-bottom: 1rem;
`,b=e.h3`
  font-size: 1.2rem;
  color: #555;
  margin: 0.5rem 0;
`,f=e.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,j=e.p`
  color: #777;
  margin: 0.5rem 0;
  font-weight: bold;
`,C=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`,i=e.button`
  background-color: #455a64;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #607d8b;
  }
`,y=e.button`
  background-color: #ec407a;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2185b;
  }
`,v=e.h3`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 2rem;
  color: #333;
`,k=()=>{const o=s(t=>t.cart),n=c();return r.jsxs(m,{children:[r.jsx(p,{children:"Shopping Cart"}),o.length===0?r.jsx("p",{className:"text-center text-gray-500",children:"Your cart is empty."}):r.jsx(g,{children:o.map(t=>r.jsxs(u,{children:[r.jsx(h,{src:t.image,alt:t.title}),r.jsx(b,{children:t.title}),r.jsxs(f,{children:[r.jsxs(j,{children:["R",(t.price*t.quantity).toFixed(2)]}),r.jsxs(C,{children:[r.jsx(i,{onClick:()=>n(d(t.id)),children:"-"}),r.jsx("span",{children:t.quantity}),r.jsx(i,{onClick:()=>n(l(t.id)),children:"+"})]}),r.jsx(y,{onClick:()=>n(x(t.id)),children:"Remove"})]})]},t.id))}),r.jsxs(v,{children:["Total: R",o.reduce((t,a)=>t+a.price*a.quantity,0).toFixed(2)]})]})};export{k as default};
