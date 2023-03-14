const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withReactSvg = require('next-react-svg');
const withImages = require('next-images');
const path = require('path');

module.exports = async () => {
    return withPlugins([
        [withCss, {}],
        [
            withReactSvg,
            {
                include: path.resolve(__dirname, './public/images'),
                webpack(config, options) {
                    return config;
                },
            },
        ],
        [withImages, {}],
    ]);
};

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://ee9b-203-190-54-83.ap.ngrok.io/:path*',
            },
        ];
    },
};
