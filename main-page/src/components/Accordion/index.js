import React, { useState } from 'react';

export { default as Item } from './Item';
export { default as IconPlay } from '../../pages/components/svg/IconPlay';
export { default as IconLock } from '../../pages/components/svg/IconLock';

export default function index({ children }) {
    const [Active, setActive] = useState(null);

    function toggle(id) {
        setActive((prev) => (prev === id ? null : id));
    }

    return <div className='accordion'>{children(Active, toggle)}</div>;
}
