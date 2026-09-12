const products=[
{name:'T-shirt Regular Fit',cat:'Vestuário',supplier:'JHK Shirt',price:'2,95€',icon:'👕'},
{name:'Garrafa Térmica 500ml',cat:'Brindes',supplier:'Makito',price:'6,80€',icon:'🧴'},
{name:'Mochila Urban',cat:'Mochilas',supplier:'Makito',price:'12,50€',icon:'🎒'},
{name:'Caneca Cerâmica 350ml',cat:'Brindes',supplier:'Tejo Brinde',price:'1,95€',icon:'☕'},
{name:'Sweatshirt com Capuz',cat:'Vestuário',supplier:'JHK Shirt',price:'12,90€',icon:'🧥'},
{name:'Boné Clássico',cat:'Vestuário',supplier:'Makito',price:'3,95€',icon:'🧢'},
{name:'Powerbank Compacta',cat:'Tecnologia',supplier:'Makito',price:'8,90€',icon:'🔋'},
{name:'Caderno Premium',cat:'Empresas',supplier:'Tejo Brinde',price:'4,50€',icon:'📓'},
{name:'Vela Decorativa',cat:'Casa',supplier:'Makito',price:'5,90€',icon:'🕯️'}];
let active='Todos', quote=[];
function render(list=products){const grid=document.getElementById('productGrid');grid.innerHTML=list.map((p,i)=>`<article class="product"><div class="product-img">${p.icon}</div><span class="stock">Em stock</span><h3>${p.name}</h3><small>${p.supplier}</small><b>Desde ${p.price}</b><button onclick="addQuote(${products.indexOf(p)})">+ Adicionar ao pedido</button></article>`).join('');}
function setCategory(c){active=c;filterProducts();document.getElementById('produtos').scrollIntoView({behavior:'smooth'});}
function filterProducts(){let q=document.getElementById('search').value.toLowerCase();let list=products.filter(p=>(active==='Todos'||p.cat===active)&&(p.name+' '+p.supplier+' '+p.cat).toLowerCase().includes(q));render(list)}
function addQuote(i){quote.push(products[i]);document.getElementById('count').textContent=quote.length;renderQuote();}
function openQuote(){document.getElementById('quotePanel').classList.toggle('open');renderQuote()}
function renderQuote(){document.getElementById('quoteItems').innerHTML=quote.length?quote.map((p,i)=>`<div class="quote-item"><b>${p.name}</b><br><small>${p.supplier} · Desde ${p.price}</small><br><button onclick="quote.splice(${i},1);document.getElementById('count').textContent=quote.length;renderQuote()">Remover</button></div>`).join(''):'<p>Ainda não adicionou produtos.</p>'}
function sendQuote(){if(!quote.length)return alert('Adicione produtos ao pedido primeiro.');alert('Pedido preparado! Na próxima fase vamos ligar este formulário ao email/WhatsApp e painel de administração.');}
render();