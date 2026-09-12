const products=[
{name:'T-shirt Premium Unissexo',cat:'Vestuário',ref:'TS-1001',price:'Desde 4,95€',icon:'👕',stock:'Em stock'},
{name:'Sweatshirt com Capuz',cat:'Vestuário',ref:'SW-2040',price:'Desde 14,90€',icon:'🧥',stock:'Em stock'},
{name:'Garrafa Térmica 500 ml',cat:'Brindes',ref:'GF-0520',price:'Desde 7,90€',icon:'🧴',stock:'Em stock'},
{name:'Caneca Cerâmica 350 ml',cat:'Brindes',ref:'CN-0350',price:'Desde 3,50€',icon:'☕',stock:'Em stock'},
{name:'Mochila Urban',cat:'Mochilas',ref:'MB-1180',price:'Desde 15,90€',icon:'🎒',stock:'Em stock'},
{name:'Caderno Executivo A5',cat:'Empresas',ref:'CD-5005',price:'Desde 5,90€',icon:'📓',stock:'Em stock'},
{name:'Powerbank Compacta',cat:'Tecnologia',ref:'PW-1000',price:'Desde 12,90€',icon:'🔋',stock:'Em stock'},
{name:'Boné Clássico',cat:'Vestuário',ref:'BC-0320',price:'Desde 4,50€',icon:'🧢',stock:'Em stock'},
{name:'Saco Tote em Algodão',cat:'Brindes',ref:'ST-0800',price:'Desde 2,90€',icon:'👜',stock:'Em stock'},
{name:'Coluna Bluetooth',cat:'Tecnologia',ref:'BT-2210',price:'Desde 16,90€',icon:'🔊',stock:'Em stock'},
{name:'Polo Piqué',cat:'Vestuário',ref:'PL-0420',price:'Desde 8,90€',icon:'👔',stock:'Em stock'},
{name:'Guarda-chuva Automático',cat:'Brindes',ref:'GC-7700',price:'Desde 9,50€',icon:'☂️',stock:'Em stock'}];
let active='Todos',quote=[];
function render(list=products){const grid=document.getElementById('productGrid');grid.innerHTML=list.map(p=>{const i=products.indexOf(p);return `<article class="product"><div class="product-img">${p.icon}</div><span class="stock">${p.stock}</span><h3>${p.name}</h3><small>Ref. ${p.ref}</small><b>${p.price}</b><button onclick="addQuote(${i})">+ Adicionar ao pedido</button></article>`}).join('')}
function setCategory(c){active=c;filterProducts();document.getElementById('produtos').scrollIntoView({behavior:'smooth'})}
function filterProducts(){let q=document.getElementById('search').value.toLowerCase();render(products.filter(p=>(active==='Todos'||p.cat===active)&&(p.name+' '+p.ref+' '+p.cat).toLowerCase().includes(q)))}
function addQuote(i){quote.push(products[i]);document.getElementById('count').textContent=quote.length;renderQuote()}
function openQuote(){document.getElementById('quotePanel').classList.toggle('open');renderQuote()}
function renderQuote(){document.getElementById('quoteItems').innerHTML=quote.length?quote.map((p,i)=>`<div class="quote-item"><b>${p.name}</b><br><small>Ref. ${p.ref} · ${p.price}</small><br><button onclick="quote.splice(${i},1);document.getElementById('count').textContent=quote.length;renderQuote()">Remover</button></div>`).join(''):'<p>Ainda não adicionou produtos.</p>'}
function sendQuote(){if(!quote.length)return alert('Adicione produtos ao pedido primeiro.');alert('Pedido preparado! Na próxima fase vamos ligar este formulário ao email/WhatsApp e painel de administração.')}
render();