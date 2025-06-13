export async function handleLogin(email, password, navigate){
    const sanitizedEmail = sanitizeInput(email)
    
    const res = await fetch('http://localhost:2025/api/login', {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            credentials: 'include',
            body: JSON.stringify({
                email: sanitizedEmail,
                password: password
            })
        })
        
        if (res.ok){
            const data = await res.json()
            navigate('/posts')
            return data
          } else {
            alert('Invalid credentials!!!!')
          }
    } 

function sanitizeInput(input) {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML.trim();
  }