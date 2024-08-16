const urlPart = "https://test.bitmafia.io/api/frontend/auth";
const urlRegister = urlPart + "/register";
const urlLogin = urlPart + "/login";

export const useAuthStore = defineStore("auth", function () {
  const registerAccount = async (name, email, password) => {
    const result = await sendRequest(urlRegister, { name, email, password });
    console.log(result);
    return result;
  };

  const loginAccount = async (email, password) => {
    const result = await sendRequest(urlLogin, { email, password });
    console.log(result);
    return result;
  };

  return { registerAccount, loginAccount };
});

async function sendRequest(url, body) {
  const options = {
    method: "POST",
    body: JSON.stringify(body),
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 2|U0BLQmcnoN9jTVpfJ2lYhNk9N1i31STNiNTsqbCyf6311bcd",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const response = await fetch(url, options);
  return await response.json();
}
