import React from 'react';
import Header from '../../components/ui/header';
import Navigation from '../../components/ui/navigation';
import Footer from '../../components/ui/footer';

const navigations =[{name:'Главная', to:'/'},
    {name:'Товары', to:'/'},
    {name:'Акции', to:'/'},
    {name:'Контакты', to:'/'},
    {name: 'Франшиза', to:'/'},
    {name: 'О нас', to:'/'}
]

const PageTemplate = ({children}) => (
    <div className={'page-template'}>
        <Header/>
        <Navigation navigations={navigations}/>
        {children}
        <Footer/>
    </div>
);

export default PageTemplate;