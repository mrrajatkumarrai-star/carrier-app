async function loadPage(page){

  const res = await fetch(page);
  const html = await res.text();

  document.getElementById("app").innerHTML = html;

  if(page === "contacts.html" && window.initContacts){
    window.initContacts();
  }

  if(page === "rates.html" && window.initRates){
    window.initRates();
  }
}
