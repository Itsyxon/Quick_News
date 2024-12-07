import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='my-20 font-bold text-center'>
            <p className='text-4xl'>
                Страница не найдена :(
            </p>
            <button className='bg-[--secondary] h-[35px] w-[195px] my-3 text-white rounded-3xl'>
                <Link href='/news'>Вернуться на главную</Link>
            </button>

        </div>
    );
};

export default NotFound;