import jobhunt from '../assets/jobhunt.webp';
import portfolio from '../assets/portfolio.webp';
import agrismart from '../assets/agrismart.webp';

const projects = [
    {
        id: 1,
        title: 'JobHunt - Job board',
        summary: 'Full stack job listing platform with auth & profiles (demo).',
        tech: ['React', 'Node', 'MongoDB'],
        link: '#',
        image: jobhunt
    },
    {
        id: 2,
        title: 'React Portfolio ',
        summary: 'My personal portfolio showcasing projects & contact.',
        tech: ['React', 'Tailwind'],
        link: 'pattin-portfolio.vercel.app',
        image: portfolio
    },
    {
        id: 3,
        title: 'AgriSmart - Marketplace',
        summary: 'Farm produce marketplace MVP for local farmers.',
        tech: ['React', 'Stripe'],
        link: '#',
        image: agrismart
    },
]

export default projects
