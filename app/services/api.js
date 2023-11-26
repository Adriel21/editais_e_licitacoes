// services/api.js
const API_BASE_URL = 'http://localhost:8080/auth';

async function fetchData(endpoint, token, methodApi) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    // Adicione o cabeçalho de autorização com o Bearer Token
    'Authorization': `Bearer ${token}`,
  });

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: methodApi, // ou 'POST' ou qualquer outro método que você precise
    headers: headers,
    cache: 'no-store',
  });

  return response.json();
}

// Outras funções de serviço podem ser adicionadas aqui

export default {
  fetchData,
};
