const landing=document.getElementById('landing');
const landingBtn=document.getElementById('landing-button');
const shop=document.getElementById('shop');
const header=document.getElementById('mainHeader');
const tazze=document.getElementById('tazze');
const account=document.getElementById('account');
const about=document.getElementById('about');
const drop=document.getElementById('drop');
const cart=document.getElementById('cart');
const checkout=document.getElementById('checkout');
const toast=document.getElementById('toast');
const footer=document.querySelector("footer");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let selectedSizes = {};
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

/* Toast */
function showToast(msg,icon="✅"){
  toast.innerHTML=`<span>${icon}</span><span>${msg}</span>`;
  toast.style.display='block';
  setTimeout(()=>toast.style.display='none',2500);
}

/* Landing → Shop */
landingBtn.addEventListener('click',()=>{
  landing.classList.add('hidden');
  header.classList.remove('hidden');
  shop.classList.remove('hidden');
  footer.classList.add('active');
});

/* Nav */
function hideAll(){
  shop.classList.add('hidden');
  tazze.classList.add('hidden');
  account.classList.add('hidden');
  about.classList.add('hidden');
  drop.classList.add('hidden');
  checkout.classList.add('hidden');
}

// Logo → torna alla landing
document.getElementById('headerLogo').addEventListener('click',()=>{
  hideAll();
  header.classList.add('hidden');
  landing.classList.remove('hidden');
  footer.classList.remove('active');
});

// Nav links
document.getElementById('navShop').addEventListener('click',()=>{hideAll();shop.classList.remove('hidden');footer.classList.add('active');});
document.getElementById('navTazze').addEventListener('click',()=>{hideAll();tazze.classList.remove('hidden');footer.classList.add('active');});
document.getElementById('tazzeIcon').addEventListener('click',()=>{hideAll();tazze.classList.remove('hidden');footer.classList.add('active');});
document.getElementById('navAccount').addEventListener('click',()=>{hideAll();account.classList.remove('hidden');footer.classList.add('active');});
document.getElementById('accountIcon').addEventListener('click',()=>{hideAll();account.classList.remove('hidden');footer.classList.add('active');});
document.getElementById('navAbout').addEventListener('click',()=>{hideAll();about.classList.remove('hidden');footer.classList.add('active');});
document.getElementById('navDrop').addEventListener('click',()=>{hideAll();drop.classList.remove('hidden');footer.classList.add('active');});
document.getElementById('cartIcon').addEventListener('click',()=>cart.classList.add('open'));
document.getElementById('backCartBtn').addEventListener('click',()=>cart.classList.remove('open'));

/* Hamburger Menu */
const hamburger=document.getElementById('hamburger');
const nav=document.getElementById('mainNav');
hamburger.addEventListener('click',()=>{nav.classList.toggle('active');});

/* Taglie */
document.querySelectorAll('.size-box').forEach(box=>{
  box.addEventListener('click',()=>{
    const parent=box.parentElement;
    const product=parent.dataset.product;
    parent.querySelectorAll('.size-box').forEach(b=>b.classList.remove('selected'));
    box.classList.add('selected');
    selectedSizes[product]=box.dataset.size;
  });
});

/* Carrello */
function renderCart(){
  const cont=document.getElementById('cartItems');
  cont.innerHTML='';
  let total=0;
  cartItems.forEach((i,idx)=>{
    const row=document.createElement('div');
    row.className='cart-item';
    row.innerHTML=`
      <span>${i.name}</span>
      <div>
        <button data-idx="${idx}" class="decrease">-</button>
        <span>${i.qty}</span>
        <button data-idx="${idx}" class="increase">+</button>
      </div>
      <span> €${(i.price*i.qty).toFixed(2)}</span>
    `;
    cont.appendChild(row);
    total+=i.price*i.qty;
  });
  document.getElementById('cartTotal').textContent='Totale: €'+total.toFixed(2);

  // Badge carrello
  const badge=document.getElementById('cartBadge');
  if(cartItems.length>0){
    let totalQty=cartItems.reduce((sum,i)=>sum+i.qty,0);
    badge.textContent=totalQty;
    badge.classList.remove('hidden');
  }else{
    badge.classList.add('hidden');
  }

  // Salva carrello
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Gestione bottoni quantità
  cont.querySelectorAll('.increase').forEach(b=>{
    b.addEventListener('click',()=>{cartItems[b.dataset.idx].qty++;renderCart();});
  });
  cont.querySelectorAll('.decrease').forEach(b=>{
    b.addEventListener('click',()=>{
      if(cartItems[b.dataset.idx].qty>1){cartItems[b.dataset.idx].qty--;}
      else{cartItems.splice(b.dataset.idx,1);}
      renderCart();
    });
  });
}
renderCart();

document.querySelectorAll('.add-to-cart').forEach(b=>{
  b.addEventListener('click',()=>{
    const name=b.dataset.name;
    const price=parseFloat(b.dataset.price);
    if(name.includes("Maglia") && !selectedSizes[name]){
      showToast("Seleziona una taglia!","⚠️");return;
    }
    const label=selectedSizes[name]?`${name} (${selectedSizes[name]})`:name;
    const existing=cartItems.find(i=>i.name===label);
    if(existing){existing.qty++;}
    else{cartItems.push({name:label,price,qty:1});}
    renderCart();cart.classList.add('open');showToast("Aggiunto al carrello");
  });
});

document.getElementById('closeCartBtn').addEventListener('click',()=>cart.classList.remove('open'));

/* Checkout */
document.getElementById('toCheckout').addEventListener('click',()=>{
  cart.classList.remove('open');
  hideAll();
  checkout.classList.remove('hidden');
  header.classList.add('hidden');
  footer.classList.add('active');
  const sum=document.getElementById('checkoutSummary');sum.innerHTML='';let total=0;
  cartItems.forEach(i=>{
    sum.innerHTML+=`<div class="summary-item"><span>${i.name} x${i.qty}</span><span> €${(i.price*i.qty).toFixed(2)}</span></div>`;
    total+=i.price*i.qty;
  });
  sum.innerHTML+=`<div class="summary-total"><span>Totale</span><span>€${total.toFixed(2)}</span></div>`;
});
document.getElementById('backToShopFromCheckout').addEventListener('click',()=>{
  checkout.classList.add('hidden');shop.classList.remove('hidden');header.classList.remove('hidden');footer.classList.add('active');
});
document.getElementById('checkoutForm').addEventListener('submit',e=>{
  e.preventDefault();
  showToast("🎉 Ordine confermato!");
  cartItems=[];
  renderCart();
  localStorage.removeItem("cartItems");
  checkout.classList.add('hidden');
  shop.classList.remove('hidden');
  header.classList.remove('hidden');
  footer.classList.add('active');
});

/* Newsletter */
document.getElementById('newsletterSubmit').addEventListener('click',()=>{
  const email=document.getElementById('newsletterInput').value.trim();
  if(email){showToast("✉️ Grazie per esserti iscritto!");}
});

/* Wishlist */
document.querySelectorAll('.wishlist-btn').forEach(b=>{
  if(wishlist.includes(b.dataset.name)) b.classList.add("active");
  b.addEventListener('click',()=>{
    if(wishlist.includes(b.dataset.name)){
      wishlist=wishlist.filter(i=>i!==b.dataset.name);
      b.classList.remove("active");
    }else{
      wishlist.push(b.dataset.name);
      b.classList.add("active");
    }
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
    showToast("❤️ Wishlist aggiornata");
  });
});

/* Fade-in scroll animazioni */
const faders=document.querySelectorAll('.product');
const obs=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.1});
faders.forEach(f=>obs.observe(f));

/* Countdown Upcoming Drop */
function startCountdown(date){
  const end=new Date(date).getTime();
  const el=document.getElementById("countdown");
  setInterval(()=>{
    let now=new Date().getTime();
    let diff=end-now;
    if(diff<0){el.textContent="Drop online!";return;}
    let d=Math.floor(diff/(1000*60*60*24));
    let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    let m=Math.floor((diff%(1000*60*60))/(1000*60));
    let s=Math.floor((diff%(1000*60))/1000);
    el.textContent=`${d}d ${h}h ${m}m ${s}s`;
  },1000);
}
startCountdown("Dec 31, 2025 18:00:00");
