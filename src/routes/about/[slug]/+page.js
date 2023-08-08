import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params, url, route }) {
    const slug = params.slug
    const pathName = url.pathname
    const route_id = route.id ?? ''
    
    // if (params.slug === 'hello-world') {
    //     return {
    //         title: 'Hello world!',
    //         content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    //     };
    // }
    return {
        slug: slug,
        pathName: pathName,
        routeId: route_id,
    }

    throw error(404, 'Not found');
}