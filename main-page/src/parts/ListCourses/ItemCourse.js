import React from 'react';

import Link from 'next/link';

import IconPlay from 'src/pages/components/svg/IconPlay';

export default function ItemCourse({ item }) {
    return (
        <div className={'w-1/4 px-4'}>
            <div className={'item relative'}>
                <figure className={'item-image mb-2'}>
                    <IconPlay className={'icon-play'}></IconPlay>
                    <img src={item?.thumbnail ?? '-'} alt={item?.name ?? 'Thumbnail Courses'} className={'w-full'} />
                </figure>
                <div className='item-meta'>
                    <h4 className='text-lg text-gray-900'>{item?.name ?? 'Course Name'}</h4>
                    <h5 className='text-sm text-gray-600'>{item?.level ?? 'Course Level'}</h5>
                </div>
                <Link href={`/courses/${item.id}`} className={'link-wrapped'}></Link>
            </div>
        </div>
    );
}
