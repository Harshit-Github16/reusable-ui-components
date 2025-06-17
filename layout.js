
import dynamic from 'next/dynamic';
import '../reusable-ui-components/src/style.css'
const Header = dynamic(() => import('./src/components/Header').then(mod => mod.Header), { ssr: false });
const Footer = dynamic(() => import('./src/components/Footer').then(mod => mod.Footer), { ssr: false });
