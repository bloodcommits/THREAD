/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
        serverComponentsExternalPackages:["moongose"]

    },
    images: {
       remotePatterns:[
        {
            protocol:"https",
            hostname:"img.clerk.com"
        },
        {
            protocol:"https",
            hostname:"img.clerk.dev"
        },
        {
            protocol:"https",
            hostname:"img.clerk.uploadthing.com"
        },
        {
            protocol:"https",
            hostname:"placehold.co"
        },
       ]
    }
}

module.exports = nextConfig
