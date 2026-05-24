import jobhunt from '../assets/jobsearch.webp';
import portfolio from '../assets/portfolio.webp';
import Cinemaplus from '../assets/Cinemaplus.webp';
import heavenly from '../assets/heavenly.webp';
import anana from '../assets/anana.webp';
import lengendary from '../assets/lengendary.webp';
import systemx from '../assets/systemx.png';
import kicks from '../assets/kicks.webp';
import emmad from '../assets/emmad.webp';
import emmab from '../assets/emmab.webp';

const allData = [
    {
        id: 1,
        title: 'SYSTX(systemx)',
        summary: 'Official website for SYSTX.INFRA.',
        tech: ['React', 'supabase', 'Tailwind'],
        link: 'https://systx-infra.vercel.app/',
        image: systemx
    },
    {
        id: 2,
        title: 'JobPortal - Job board',
        summary: 'Full stack job listing platform with auth & profiles (demo).',
        tech: ['React', 'Node', 'MongoDB'],
        link: 'https://seeker-employer.vercel.app/',
        image: jobhunt
    },
    {
        id: 3,
        title: 'React Portfolio ',
        summary: 'My personal portfolio showcasing projects & contact.',
        tech: ['React', 'Tailwind'],
        link: 'pattin-portfolio.vercel.app',
        image: portfolio
    },
    {
        id: 4,
        title: 'Cinema plus+',
        summary: 'Cinema Plus+ is a Full stack project with a modern, responsive platform for showcasing events and enabling professional bookings with ease.',
        tech: ['React', 'Vite', 'Clerk auth','Tailwind/CSS', 'Vercel and render hosting', 'modern JavaScript','mongodb'],
        link: 'https://cinema-plus-delta.vercel.app/',
        image: Cinemaplus
    },
    {
        id: 5,
        title: 'Heavenly point of sale',
        login: 'username:demo password:demo',
        summary: ' Heavenly Point of Sale is a comprehensive full-stack application designed to streamline retail operations, featuring user authentication, product management, sales tracking, to enhance business efficiency.',
        tech: ['React', 'Vite', 'Tailwind/CSS', 'Vercel and render hosting', 'modern JavaScript','mongodb'],
        link: 'https://heavenly-pos-1.vercel.app/',
        image: heavenly
    },
    {
        id: 6,
        title: 'Lengendary Backers',
        summary: 'A full frontend website.',
        tech: ['React', 'Vite', 'Tailwind/CSS', 'Vercel and hosting', 'modern JavaScript'],
        link: 'https://lengendary-bakers.vercel.app/',
        image: lengendary
    },
    {
        id: 7,
        title: 'Anana-Backers',
        summary: 'A complete frontend website with cool features.',
        tech: ['React', 'Vite', 'Tailwind/CSS', 'Vercel hosting', 'modern JavaScript'],
        link: 'https://anana-backers.vercel.app/',
        image: anana
    },
    {
        id: 8,
        title: 'Kicks-collection',
        summary: 'A collection of stylish kicks for every occasion.',
        tech: ['React', 'Vite', 'Tailwind/CSS', 'Vercel hosting','mongodb', 'modern JavaScript'],
        link: 'https://kicks-collection.vercel.app/',
        image: kicks
    },
    {
        id: 9,
        title: 'Emma driving school',
        summary: 'A modern driving school website with online booking and course information.',
        tech: ['React', 'Vite', 'Tailwind/CSS', 'Vercel hosting', 'modern JavaScript'],
        link: 'https://emma-driving-school.vercel.app/',
        image: emmad
    },
    {
        id: 10,
        title: 'Emma bakery',
        summary: 'A stylish bakery for fresh bread and pastries.',
        tech: ['React', 'Vite', 'Tailwind/CSS', 'Vercel hosting', 'modern JavaScript'],
        link: 'https://emma-backers.vercel.app/',
        image: emmab
    }
];

const projects = [
    ...allData.slice(0, 5),
    {
        id: 'cta-view-all',
        isCTA: true 
    }
];

// Named export for the full list, default export for the sliced homepage grid
export { allData };
export default projects;