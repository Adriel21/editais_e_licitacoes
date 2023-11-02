/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/home',
            destination: '/auth/home',
          },
          {
            source: '/home/edital/cadastro',
            destination: '/auth/home/edital/cadastro',
          },
          // Adicione outras regras de reescrita aqui, se necessário
        ];
      },
}

module.exports = nextConfig
