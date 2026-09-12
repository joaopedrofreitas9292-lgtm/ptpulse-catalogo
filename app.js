const products=[
{name:'Bolsa tecido reciclado origem oceânica',cat:'Brindes',ref:'CH670046',price:'Desde 21,168 €',icon:'👜',stock:'Stock 82'},
{name:'Garrafa térmica 500 ml, com palhinha',cat:'Brindes',ref:'370731',price:'Desde 9,922 €',icon:'🧴',stock:'Stock 7355'},
{name:'Agenda diária A5 - Oslo',cat:'Empresas',ref:'470258',price:'Desde 6,970 €',icon:'📔',stock:'Stock 1504'},
{name:'Esferográfica em ABS reciclado, detalhe em bambu',cat:'Empresas',ref:'131593',price:'Desde 0,248 €',icon:'🖊️',stock:'Stock 95143'},
{name:'Lanyard porta copos',cat:'Brindes',ref:'140894',price:'Desde 0,444 €',icon:'🏷️',stock:'Stock 39896'},
{name:'Mochila expansível para portátil',cat:'Mochilas',ref:'310407',price:'Desde 38,776 €',icon:'🎒',stock:'Stock 2974'},
{name:'Esferográfica em metal com detalhes em bambu',cat:'Empresas',ref:'131521',price:'Desde 1,302 €',icon:'🖊️',stock:'Stock 26258'},
{name:'Esferográfica RABS, pulsar silencioso',cat:'Empresas',ref:'131524',price:'Desde 0,364 €',icon:'🖊️',stock:'Stock 59200'},
{name:'Agenda diária A5 - New York',cat:'Empresas',ref:'470257',price:'Desde 7,330 €',icon:'📕',stock:'Stock 84'},
{name:'Esferográfica alumínio c/ clip espelhado',cat:'Empresas',ref:'130190',price:'Desde 1,138 €',icon:'🖊️',stock:'Stock 19269'},
{name:'Bolsa térmica em tarpaulim',cat:'Brindes',ref:'300388',price:'Desde 15,996 €',icon:'🥡',stock:'Stock 1750'},
{name:'Copo reutilizável em PP 600 ml',cat:'Brindes',ref:'370725',price:'Desde 0,570 €',icon:'🥤',stock:'Stock 5680'}];
let active='Todos',quote=[];
function render(list=products){const grid=document.getElementById('productGrid');grid.innerHTML=list.map(p=>{const i=products.indexOf(p);return `<article class="product"><div class="product-img">${p.icon}</div><span class="stock">${p.stock}</span><h3>${p.name}</h3><small>Ref. ${p.ref}</small><b>${p.price}</b><button onclick="addQuote(${i})">+ Adicionar ao pedido</button></article>`}).join('')}
function setCategory(c){active=c;filterProducts();document.getElementById('produtos').scrollIntoView({behavior:'smooth'})}
function filterProducts(){let q=document.getElementById('search').value.toLowerCase();render(products.filter(p=>(active==='Todos'||p.cat===active)&&(p.name+' '+p.ref+' '+p.cat).toLowerCase().includes(q)))}
function addQuote(i){quote.push(products[i]);document.getElementById('count').textContent=quote.length;renderQuote()}
function openQuote(){document.getElementById('quotePanel').classList.toggle('open');renderQuote()}
function renderQuote(){document.getElementById('quoteItems').innerHTML=quote.length?quote.map((p,i)=>`<div class="quote-item"><b>${p.name}</b><br><small>Ref. ${p.ref} · ${p.price}</small><br><button onclick="quote.splice(${i},1);document.getElementById('count').textContent=quote.length;renderQuote()">Remover</button></div>`).join(''):'<p>Ainda não adicionou produtos.</p>'}
function sendQuote(){if(!quote.length)return alert('Adicione produtos ao pedido primeiro.');alert('Pedido preparado!')}
render();