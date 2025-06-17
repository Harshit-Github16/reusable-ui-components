import '@harshit0150/reusable-ui-components/styles.css';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@harshit0150/reusable-ui-components').then(mod => mod.Header), { ssr: false });
const Footer = dynamic(() => import('@harshit0150/reusable-ui-components').then(mod => mod.Footer), { ssr: false });

const poppins = Poppins({
// ... existing code ...
}); 