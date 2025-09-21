document.getElementById('loginForm').addEventListener('submit', async function(e){
    e.preventDefault();
    const username=e.target.username.value;
    const password=e.target.password.value;
    const res=await fetch('/login', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username,password})
    });
    const data=await res.json()
    document.getElementById('message').innerText=data;
})