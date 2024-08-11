
export const useAuthStore = defineStore('auth', function() {
    const TOKEN = ref(null)

    function registerAccount(name, email, password) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer 2|U0BLQmcnoN9jTVpfJ2lYhNk9N1i31STNiNTsqbCyf6311bcd");
        
        //Test tokens from postman
        myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IjFVazA1UkVGSUtvL3EwZTV2TklkQXc9PSIsInZhbHVlIjoiVEVwWWNWUWlCSTBBczJGQllFU3BmNkRBUDFXdmxySjVJelYrRWdDdGN0MWMzdjM1RGwxRVhFeCtRY2JjNXlLRlFqRnI3UnJoTG4zSXNlSEd3cS9ydkhiWW9pNU4yeno2dDRJRUtTVjUvSFg3Sm80YTR6aUQrbEpJdklLbWNxOUsiLCJtYWMiOiJjMDUyZmIyNThjYTEwNmNjYzE2ZDg5MDRjMmE5ZjhkNGQ4MjI5OWE1NjdhY2Y2NTE0YTY2NmM3YTNmZmQ3MDVhIiwidGFnIjoiIn0%3D; iexexchanger_session=eyJpdiI6ImtCeGRQbTlVYmJGWUJyOUY0VXdSOEE9PSIsInZhbHVlIjoicDVTdmhxTlcyOTc4ckVJMTdFUzNxWW05WFZlTEE0VWV2bjVsRHRhVkJFc3Iyc0UrYzJGSHRHSnpLQ1hjc0trR1dYZjlLbXpLelRrajc3TkxpZ0pHeGdRK2F6L2hwcVMvbUFCYktzV21xUGlJbHVmOE15Sm44cUNxVklwTENNUGMiLCJtYWMiOiJjOGEyMTcwODgzMTVjMzg5N2I3MTJiYzBkYmQ0ODNhZmUwMzM3MGVjMzdmN2NlYTk2NjI2YmIyNDVmOWVkNGMyIiwidGFnIjoiIn0%3D");

        const formdata = new FormData();
        formdata.append("name", "testname");
        formdata.append("email", "test001@gmail.com");
        formdata.append("password", "testpassword");

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
        };

        fetch("https://test.bitmafia.io/api/frontend/auth/register", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }

    return {
        TOKEN
    }
})