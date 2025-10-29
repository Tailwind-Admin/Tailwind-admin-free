import mock from './mockAdapter';


import './apps/tickets/ticketsData';
import './apps/notes/notesData'
import './apps/blog/BlogData'


mock.onAny().passThrough();
