




const MainRoutes = [
    {
        path: '/',
        component: () => import('../layouts/full/FullLayout.vue'),
        children: [
            {
                path: '',
                name: 'Modern',
                component: () => import('../views/dashboards/Modern.vue'),
            },

            {
                name: 'Notes',
                path: '/apps/notes',
                component: () => import('../views/apps/notes/Notes.vue')
            },
            {
                name: 'Tickets',
                path: '/apps/tickets',
                component: () => import('../views/apps/tickets/Tickets.vue')
            },
            {
                name: 'Blog Posts',
                path: '/apps/blog/post',
                component: () => import('../views/apps/blog/Posts.vue')
            },
            {
                name: 'Blog Details',
                path: '/apps/blog/:slug',
                component: () => import('../views/apps/blog/[id].vue')
            },
            {
                name: 'Icon',
                path: '/icons/solar',
                component: () => import('../views/icons/Solar.vue')
            },
            {
                name: 'Table',
                path: '/utilities/table',
                component: () => import('../views/utilities/Table.vue')
            }, {
                name: 'Form',
                path: '/utilities/form',
                component: () => import('../views/utilities/Form.vue')
            },
            {
                name: 'User Profile',
                path: '/user-profile',
                component: () => import('../views/utilities/UserProfile.vue')
            },
        ],
    },
];



export default MainRoutes;
