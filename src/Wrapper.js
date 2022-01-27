import {createApp} from 'vue'
import {default as generateRouteConfig, routes} from './router';
import WrapperComponent from './WrapperComponent.vue';

export function createVueElement({path, basename, elementRef}) {
    const router = generateRouteConfig({path, basename});
    const app = createApp(WrapperComponent, {}).use(router)
    app.mount(elementRef);

    return () => app.unmount();
}

export const componentsPath = routes.reduce((acc,curr) => {
    if(curr.name){
        acc[curr.name] = curr.path;
    }
    return acc;
}, {});