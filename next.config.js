/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/home',
            destination: '/auth/home',
          },
          // Adicione outras regras de reescrita aqui, se necessário
        ];
      },
}

module.exports = nextConfig
