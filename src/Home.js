export default function loadhome(){
    let content=document.getElementById('content');
    content.textContent='';

    const header=document.createElement('h1');
    header.textContent="Welcome to BBQ";

    const textlines=document.createElement('p');
    textlines.textContent="we serve authetic BBQ homemade dry and fruity...";

    const img=document.createElement('img');
    img.alt = "chicken grilled";

    content.appendChild(header);
    content.appendChild(textlines);
    content.appendChild(img);

}