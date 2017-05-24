import Home from './components/Home.vue';
import Telebista from './components/Telebista.vue';
import TelebistaZerrenda from './components/TelebistaZerrenda.vue';
import TelebistaSaioa from './components/TelebistaSaioa.vue';
import Irratia from './components/Irratia.vue';
import IrratiaZerrenda from './components/IrratiaZerrenda.vue';


export const routes = [
	{ path: '/', component: Home},
	{ path: '/telebista', component: Telebista},
	{ path: '/telebista/zerrenda/:id64', component: TelebistaZerrenda},
	{ path: '/telebista/saioa/:id64', component: TelebistaSaioa},
	{ path: '/irratia', component: Irratia},
	{ path: '/irratia/zerrenda/:id64', component: IrratiaZerrenda},
];