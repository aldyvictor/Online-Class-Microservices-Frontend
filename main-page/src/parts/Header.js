import React from 'react';
import propTypes from 'prop-types';
import { useRouter } from 'next/router.js';
import Link from 'next/link';

import Logo from '../pages/components/svg/Logo.js';

export default function Header({ onLight }) {
    const linkColor = onLight ? 'text-gray-900' : 'text-white';

    const router = useRouter();

    const linkCta = router.pathname.indexOf('login') > -1 ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register` : `${process.env.NEXT_PUBLIC_MEMBER_PAGE}/login`;
    const textCta = router.pathname.indexOf('login') > -1 ? 'Daftar' : 'Masuk';
    return (
        <header className={'flex justify-between items-center'}>
            <div style={{ height: 54 }}>
                <Logo className={'on-dark'} />
            </div>
            <ul className={'flex'}>
                <li>
                    <Link href={'/'} className={[linkColor, 'text-white hover:text-teal-500 text-lg px-6 py-3 font-medium'].join(' ')}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={[linkColor, 'text-white hover:text-teal-500 text-lg px-6 py-3 font-medium'].join(' ')}>
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={[linkColor, 'text-white hover:text-teal-500 text-lg px-6 py-3 font-medium'].join(' ')}>
                        Features
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={[linkColor, 'text-white hover:text-teal-500 text-lg px-6 py-3 font-medium'].join(' ')}>
                        Story
                    </Link>
                </li>
                <li>
                    <a
                        href={linkCta}
                        target={'_blank'}
                        rel={'noopener noereferrer'}
                        className={'bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 ml-6 font-medium'}
                    >
                        {textCta}
                    </a>
                </li>
            </ul>
        </header>
    );
}

Header.propTypes = {
    onLight: propTypes.bool,
};
