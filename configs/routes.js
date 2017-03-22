import Home from '../components/Home';
import About from '../components/About';
import Awesome from '../components/Awesome';

export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: Home
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: About
    },
    awesome: {
        path: '/awesome',
        method: 'get',
        page: 'awesome',
        title: 'Awesome Page',
        handler: Awesome
    }
};
