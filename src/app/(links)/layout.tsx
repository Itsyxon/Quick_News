import TitleBlock from '@/components/TitleBlock/TitleBlock';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>

            <TitleBlock />
            {children}
        </>
    );
};

export default layout;