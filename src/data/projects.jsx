import jobhunt from '../assets/jobhunt.webp';
import portfolio from '../assets/portfolio.webp';
import Cinemaplus from '../assets/Cinemaplus.webp';

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
        title: 'Cinema plus+',
        summary: 'Cinema Plus+ is aFull stack project with a modern, responsive platform for showcasing events and enabling professional bookings with ease.',
        tech: ['React', 'Vite', 'Clerk auth','Tailwind/CSS', 'Vercel and render hosting', 'modern JavaScript','mongodb'],
        link: 'https://cinema-plus-delta.vercel.app/',
        image: Cinemaplus
    },
]

export default projects
