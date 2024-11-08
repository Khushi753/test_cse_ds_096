async function fetchdata() {
    try {
        let response=await fetch("https://api.github.com/users?per_page=10");
        let data=await response.json();
         data.forEach(element => {
        let h1=document.createElement('h3');
        h1.textContent=element.login;
        let top=document.getElementById('top');
        top.appendChild(h1);
        });
    } catch (error) {
        console.log(error);
        
    }
    
}
function sortUsers() {
    let sortedUsers = [...data].sort((a, b) => a.login.localeCompare(b.login));
    
}

