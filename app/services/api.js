// services/api.js
const API_BASE_URL = 'http://localhost:8080';

async function fetchData(endpoint) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    cache: 'no-store',
  });
  return response.json();
}

// Outras funções de serviço podem ser adicionadas aqui

export default {
  fetchData,
};
