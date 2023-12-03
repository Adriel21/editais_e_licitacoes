// services/api.js
const API_BASE_URL = 'http://localhost:8080/';

//  Api sendo consumida via server
async function fetchData(endpoint, token, methodApi, bodyJson) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    // Adicione o cabeçalho de autorização com o Bearer Token
    'Authorization': `Bearer ${token}`, // valor do token obtido no post
  });

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: methodApi, // ou 'POST' ou qualquer outro método que você precise
    headers: headers,
    cache: 'no-store', // Estou informando que não quero que seja armazenado cache dos dados da api
    body: bodyJson
  });

  return response.json();
}

async function fetchDataPublic(endpoint, methodApi, bodyJson) {
  const headers = new Headers({
    'Content-Type': 'application/json'
    });

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: methodApi, // ou 'POST' ou qualquer outro método que você precise
      headers: headers,
      cache: 'no-store', // Estou informando que não quero que seja armazenado cache dos dados da api
      body: bodyJson
    });

    return response.json();
}

// Outras funções de serviço podem ser adicionadas aqui

export default {
  fetchData,
  fetchDataPublic
};
