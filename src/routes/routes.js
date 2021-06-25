import Missions from '@/views/Missions';
import Teams from '@/views/Teams';
import Hero from '@/views/Hero';

export const routes =  [
    {
        path: '/missions',
        component: Missions,
        name: 'Missions'
    },
    {
        path: '/teams',
        component: Teams,
        name: 'Teams'
    },
    {
        path: '/hero/:id',
        component: Hero,
        name: 'Hero'
    }
];

