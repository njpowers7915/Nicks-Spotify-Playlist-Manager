const API_URL = process.env.REACT_APP_API_URL;

class SessionApi {
  static login(credentials) {
    debugger;
    const request = new Request(`${API_URL}/login`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default SessionApi;
