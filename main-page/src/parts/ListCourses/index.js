import React from 'react';

import Link from 'next/link';
import ItemCourse from './ItemCourse';

export default function ListCourses({ data }) {
    return (
        <>
            <div className={'flex justify-between items-center'}>
                <div className={'w-auto'}>
                    <h2 className={'text-lg text-gray-600'}>New Classes</h2>
                    <h3 className={'text-xl text-gray-900 font-medium'}>
                        Summer <span className={'text-teal-400'}>Productive</span>
                    </h3>
                </div>
                <div className={'w-auto'}>
                    <Link href={'/courses'} className={'text-gray-600 hover:underline text-sm'}>
                        View All Courses
                    </Link>
                </div>
            </div>
            <div className={'flex justify-start items-center -mx-4 mt-6'}>
                {data?.length > 0 ? (
                    data.map((item, index) => {
                        return <ItemCourse item={item} key={index}></ItemCourse>;
                    })
                ) : (
                    <div className={'w-full text-center py-12'}>No Item Found</div>
                )}
            </div>
        </>
    );
}
