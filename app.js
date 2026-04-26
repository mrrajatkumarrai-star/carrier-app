async function loadPage(page){

  const res = await fetch(page);
  const html = await res.text();

  const container = document.getElementById("app");
  container.innerHTML = html;

  // 🔴 IMPORTANT: initialize page after load
  if(page === "contacts.html" && window.initContacts){
    window.initContacts();
  }

  if(page === "rates.html" && window.initRates){
    window.initRates();
  }
}
