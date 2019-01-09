import React from 'react';
import Header from '../../components/ui/header';
import Navigation from '../../components/ui/navigation';
import Footer from '../../components/ui/footer';

const PageTemplate = ({children}) => (
    <div className={'page-template'}>
        <Header/>
        <Navigation/>
        {children}
        <Footer/>
    </div>
);

export default PageTemplate;