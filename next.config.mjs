/** @type {import('next').NextConfig} */
const nextConfig = {
    // if we need to take img from remote servers, we can add the following config
    // without this, images will be loaded from local just
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'your-image-host.com',
    //         }
    //     ]
    // }
}

export default nextConfig;
