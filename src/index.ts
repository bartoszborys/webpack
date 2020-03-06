import './main.scss';
import { Example } from './example-component/example.component'

const root: HTMLElement = document.querySelector('main');
new Example().bootstrap(root);