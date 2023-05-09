import React from 'react';
import Link from 'next/link';

import formatThousand from 'src/helpers/formatThousand';

export default function ItemCategory({ item }) {
    return (
        <div className={'w-1/6 px-4 h-100'}>
            <div className={'card relative transition-all duration-200'}>
                {item?.imageName ?? '-'}
                <div className='card-meta mt-10'>
                    <h4 className='text-lg transition-all duration-200 w-1/2'>{item?.name ?? 'Category Name'}</h4>
                    <h5 className='text-small transition-all duration-500 mt-2'>{formatThousand(item.total)} Courses</h5>
                </div>
                <Link href={'#'} className={'link-wrapped'}></Link>
            </div>
        </div>
    );
}
