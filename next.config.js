/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
    reactStrictMode: true,
    rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/:path*',
            },
        ]
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                    },
                },
            ],
        })

        return config
    },
}
