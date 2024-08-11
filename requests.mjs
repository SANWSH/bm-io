//! Register fetch
const headerRegister = new Headers
headerRegister.append('Content-Type', 'application/json')
headerRegister.append('Authtorization', 'Bearer 2|U0BLQmcnoN9jTVpfJ2lYhNk9N1i31STNiNTsqbCyf6311bcd')

const reqOptionsReguster = {
  method: 'POST',
  credentials: 'include',
  headers: headerRegister,
  mode: 'cors',
  cache: 'default',
  body: JSON.stringify({ 
    name: "developer_test",
    email: "dev.test@develop.com",
    password: "devtest",
  })
}

fetch('https://test.bitmafia.io/api/frontend/auth/register', reqOptionsReguster)
.then((res) => res.json())
.then((result) => console.log(result))

//! Auth fetch

const headerAuth = new Headers
headerAuth.append('Content-Type', 'application/json')

const reqOptionsAuth = {
  method: 'POST',
  credentials: 'include',
  headers: headerAuth,
  mode: 'cors',
  cache: 'default',
  body: JSON.stringify({ 
    email: "inventboxst@gmail.com",
    password: "T3stbit-m4fia33521!",
  })
}

fetch('https://test.bitmafia.io/api/frontend/auth/login', reqOptionsAuth)
.then((res) => res.json())
.then((result) => console.log(result))