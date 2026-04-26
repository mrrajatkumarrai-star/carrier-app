import { db } from "./firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

window.Contacts = {

data:[],

async load(){
  const snap = await getDocs(collection(db,"contacts"));
  this.data=[];
  snap.forEach(d=>this.data.push({id:d.id,...d.data()}));
  this.render(this.data);
},

render(list){
  let html="";
  list.forEach(r=>{
    html+=`<tr>
<td>${r.carrier||""}</td>
<td>${r.location||""}</td>
<td>${r.pic||""}</td>
<td>${r.email||""}</td>
<td>${r.contact||""}</td>
<td>${r.remarks||""}</td>
<td>
<button onclick="Contacts.del('${r.id}')">Delete</button>
</td>
</tr>`;
  });
  document.getElementById("contactData").innerHTML = html;
},

async save(){
  await addDoc(collection(db,"contacts"),{
    carrier:carrier.value,
    location:location.value,
    pic:pic.value,
    email:email.value,
    contact:contact.value,
    remarks:remarks.value
  });
  this.load();
},

async del(id){
  await deleteDoc(doc(db,"contacts",id));
  this.load();
},

search(val){
  val=val.toLowerCase();
  this.render(this.data.filter(r=>
    Object.values(r).join(" ").toLowerCase().includes(val)
  ));
}

};

window.initContacts = function(){
  Contacts.load();
};
