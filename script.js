const landing=document.getElementById('landing');
const landingBtn=document.getElementById('landing-button');
const shop=document.getElementById('shop');
const header=document.getElementById('mainHeader');
const tazze=document.getElementById('tazze');
const account=document.getElementById('account');
const about=document.getElementById('about');
const cart=document.getElementById('cart');
const checkout=document.getElementById('checkout');
const toast=document.getElementById('toast');
const footer=document.getElementById('mainFooter');
const badge=document.getElementById('cartBadge');

let cartItems=JSON.parse(localStorage.getItem('cartItems')||'[]');
let selectedSizes={};
let wishlist=JSON.parse(localStorage.getItem('wishlist')||'[]');

/* Toast */
function showToast(msg,icon='✅'){toast.innerHTML=`<span>${icon}</span><span>${msg}</span>`;toast.style.display='block';setTimeout(()=>toast.style.display='none',2500);}

/* Landing → Shop */
landingBtn.addEventListener('click',()=>{
  landing.classList.add('hidden');
  header.classList.remove('hidden');
  shop.classList.remove('hidden');
  footer.classList.remove('hidden'); // footer NON in landing
});

/* Nav */
function hideAll(){shop.classList.add('hidden');tazze.classList.add('hidden');account.classList.add('hidden');about.classList.add('hidden');checkout.classList.add('hidden');}

// Logo → torna alla landing (nasconde footer)
document.getElementById('headerLogo').addEventListener('click',()=>{
  hideAll();header.classList.add('hidden');landing.classList.remove('hidden');footer.classList.add('hidden');
});

document.getElementById('navShop').addEventListener('click',()=>{hideAll();shop.classList.remove('hidden');footer.classList.remove('hidden');});
document.getElementById('navTazze').addEventListener('click',()=>{hideAll();tazze.classList.remove('hidden');footer.classList.remove('hidden');});
document.getElementById('tazzeIcon').addEventListener('click',()=>{hideAll();tazze.classList.remove('hidden');footer.classList.remove('hidden');});
document.getElementById('navAccount').addEventListener('click',()=>{hideAll();account.classList.remove('hidden');footer.classList.remove('hidden');});
document.getElementById('accountIcon').addEventListener('click',()=>{hideAll();account.classList.remove('hidden');footer.classList.remove('hidden');});
document.getElementById('navAbout').addEventListener('click',()=>{hideAll();about.classList.remove('hidden');footer.classList.remove('hidden');});

/* Hamburger menu (mobile) */
const hamburger=document.getElementById('hamburger');
const nav=document.getElementById('mainNav');
hamburger.addEventListener('click',()=>nav.classList.toggle('active'));

/* Apri/chiudi carrello */
document.getElementById('cartIcon').addEventListener('click',()=>cart.classList.add('open'));
document.getElementById('closeCartBtn').addEventListener('click',()=>cart.classList.remove('open'));

/* Taglie */
document.querySelectorAll('.size-box').forEach(box=>{
  box.addEventListener('click',()=>{
    const parent=box.parentElement;const product=parent.dataset.product;
    parent.querySelectorAll('.size-box').forEach(b=>b.classList.remove('selected'));
    box.classList.add('selected');selectedSizes[product]=box.dataset.size;
  });
});

/* Render carrello */
function renderCart(){
  const cont=document.getElementById('cartItems');cont.innerHTML='';
  let total=0, totalQty=0;
  cartItems.forEach((i,idx)=>{
    const row=document.createElement('div');row.className='cart-item';
    row.innerHTML=`
      <span>${i.name}</span>
      <div>
        <button data-idx="${idx}" class="decrease">-</button>
        <span>${i.qty}</span>
        <button data-idx="${idx}" class="increase">+</button>
      </div>
      <span>+ ${(i.price*i.qty).toFixed(2)}€</span>
    `;
    cont.appendChild(row);
    total+=i.price*i.qty; totalQty+=i.qty;
  });
  document.getElementById('cartTotal').textContent='Totale: €'+total.toFixed(2);

  // Badge con quantità totale
  if(totalQty>0){badge.textContent=totalQty;badge.classList.remove('hidden');}
  else{badge.classList.add('hidden');}

  // Salva su localStorage
  localStorage.setItem('cartItems',JSON.stringify(cartItems));

  // Gestione + / -
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

/* Add to cart */
document.querySelectorAll('.add-to-cart').forEach(b=>{
  b.addEventListener('click',()=>{
    const name=b.dataset.name;const price=parseFloat(b.dataset.price);
    if(name.includes('Maglia') && !selectedSizes[name]){showToast('Seleziona una taglia!','⚠️');return;}
    const label=selectedSizes[name]?`${name} (${selectedSizes[name]})`:name;
    const existing=cartItems.find(i=>i.name===label);
    if(existing){existing.qty++;}else{cartItems.push({name:label,price,qty:1});}
    renderCart();cart.classList.add('open');showToast('Aggiunto al carrello');
  });
});

/* Wishlist (cuore) */
document.querySelectorAll('.wishlist-btn').forEach(btn=>{
  if(wishlist.includes(btn.dataset.name)) btn.classList.add('active');
  btn.addEventListener('click',()=>{
    const n=btn.dataset.name;
    if(wishlist.includes(n)){wishlist=wishlist.filter(x=>x!==n);btn.classList.remove('active');}
    else{wishlist.push(n);btn.classList.add('active');}
    localStorage.setItem('wishlist',JSON.stringify(wishlist));
    showToast('❤️ Wishlist aggiornata');
  });
});

/* Checkout */
document.getElementById('toCheckout').addEventListener('click',()=>{
  cart.classList.remove('open');hideAll();checkout.classList.remove('hidden');header.classList.add('hidden');footer.classList.add('hidden');
  const sum=document.getElementById('checkoutSummary');sum.innerHTML='';let total=0;
  cartItems.forEach(i=>{sum.innerHTML+=`<div class="summary-item"><span>${i.name} x${i.qty}</span><span>+ ${(i.price*i.qty).toFixed(2)}€</span></div>`;total+=i.price*i.qty;});
  sum.innerHTML+=`<div class="summary-total"><span>Totale</span><span>€${total.toFixed(2)}</span></div>`;
});
document.getElementById('backToShopFromCheckout').addEventListener('click',()=>{
  checkout.classList.add('hidden');shop.classList.remove('hidden');header.classList.remove('hidden');footer.classList.remove('hidden');
});
document.getElementById('checkoutForm').addEventListener('submit',e=>{
  e.preventDefault();showToast('🎉 Ordine confermato!');cartItems=[];renderCart();localStorage.removeItem('cartItems');
  checkout.classList.add('hidden');shop.classList.remove('hidden');header.classList.remove('hidden');footer.classList.remove('hidden');
});

/* Newsletter (solo toast mock) */
document.getElementById('newsletterSubmit').addEventListener('click',()=>{
  const email=document.getElementById('newsletterInput').value.trim();
  if(email){showToast('✉️ Grazie per esserti iscritto!');}
});

/* Fade-in prodotti */
const faders=document.querySelectorAll('.product');
const obs=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});
},{threshold:0.1});
faders.forEach(f=>obs.observe(f));


// --- Carrello con LocalStorage ---
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartBadge();

function addToCart(productId) {
    cart.push(productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const badge = document.getElementById("cart-badge");
    if (badge) badge.textContent = cart.length;
}

// --- Wishlist base ---
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
    } else {
        wishlist.push(productId);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Wishlist aggiornata: " + wishlist.join(", "));
}


// --- Checkout rendering ---
function renderCheckout() {
    const container = document.getElementById("checkout-items");
    const totalElement = document.getElementById("checkout-total");
    if (!container) return;

    container.innerHTML = "";
    let total = 0;

    cart.forEach((id, index) => {
        const item = document.createElement("div");
        item.classList.add("checkout-item");
        item.innerHTML = `Prodotto ${id} 
            <button onclick="removeFromCart(${index})">Rimuovi</button>`;
        container.appendChild(item);
        total += 20; // prezzo fittizio (20€)
    });

    totalElement.textContent = total + "€";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
    renderCheckout();
}

function fakeOrder() {
    alert("Ordine completato! (simulazione)");
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
    renderCheckout();
}

// Avvia se siamo su checkout.html
if (window.location.pathname.includes("checkout.html")) {
    renderCheckout();
}


// --- Scroll dalla landing allo shop ---
    const shop = document.getElementById("shop");
    if (shop) {
        shop.scrollIntoView({ behavior: "smooth" });
    }
}


// --- Gestione landing -> shop ---
document.addEventListener('DOMContentLoaded', function(){
  var landing = document.getElementById('landing');
  var btn = document.getElementById('landing-button');

  function closeLandingAndScroll(){
    if (!landing) return;
    landing.classList.add('hidden');
    var shop = document.getElementById('shop');
    if (shop) {
      shop.scrollIntoView({behavior: 'smooth'});
    }
  }

  if (btn){
    btn.addEventListener('click', function(e){
      // Non impediamo il link, ma in più nascondiamo l'overlay
      closeLandingAndScroll();
    });
  }

  // Se si atterra con #shop o si cambia hash, nascondi landing
  if (location.hash === '#shop'){
    closeLandingAndScroll();
  }
  window.addEventListener('hashchange', function(){
    if (location.hash === '#shop'){
      closeLandingAndScroll();
    }
  });
});
