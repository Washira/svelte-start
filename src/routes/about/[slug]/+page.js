import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params, url, routeId }) {
    const slug = params.slug
    const pathName = url.pathname
    const route_id = routeId ?? ''
    
    // if (params.slug === 'hello-world') {
    //     return {
    //         title: 'Hello world!',
    //         content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    //     };
    // }
    return {
        slug: slug,
        pathName: pathName,
    }

    throw error(404, 'Not found');
}