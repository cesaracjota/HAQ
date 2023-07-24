import React from 'react';
import Layout from '../components/layout/Layout';
import TerminosCondiciones from '../components/privacidad/TerminosCondiciones';

const TerminosCondicionesPage = () => {
    return (
        <Layout children={<TerminosCondiciones />} image={'https://images.pexels.com/photos/878156/pexels-photo-878156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
    )
}

export default TerminosCondicionesPage;