/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader', 'glslify-loader'],
        });

        return config;
    },
    images: {
        domains: ['xn----8sbb1agckqokro3icn.xn--p1ai', 'img.freepik.com'],
    },
    transpilePackages: ['three']
}

module.exports = nextConfig
