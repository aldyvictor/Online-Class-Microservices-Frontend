import React from 'react';

import Modal from 'src/components/Modal';
import IconPreview from 'src/pages/components/svg/IconPreview';

export default function CoursePhoto({ data }) {
    return (
        <div className='w-1/3 px-4'>
            <div className='item relative'>
                <figure className='item-image'>
                    <IconPreview className={'icon'}></IconPreview>
                    <img src={data} alt={data} className='object-cover h-32 w-full' />
                </figure>
                <Modal content={(toggle) => <img src={data} alt={data} />}>{(toggle) => <span onClick={toggle} className='link-wrapped'></span>}</Modal>
            </div>
        </div>
    );
}
