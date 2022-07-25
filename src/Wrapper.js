import {createApp} from 'vue'
import {default as generateRouteConfig} from './router';
import WrapperComponent from './WrapperComponent.vue';

export function createVueElement({ basename, elementRef}) {
    const router = generateRouteConfig({basename});
    const app = createApp(WrapperComponent, {}).use(router)
    app.mount(elementRef);

    return () => app.unmount();
}

