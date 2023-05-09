import React from 'react';

import BusinessDevelopment from 'src/pages/components/svg/BusinessDevelopment';
import ContentCreator from 'src/pages/components/svg/ContentCreator';
import ProductAdvertisement from 'src/pages/components/svg/ProductAdvertisement';
import CustomerRelationship from 'src/pages/components/svg/CustomerRelationship';
import GameDevelopment from 'src/pages/components/svg/GameDevelopment';
import TravelGuidance from 'src/pages/components/svg/TravelGuidance';

import ItemCategory from './ItemCategory';

export default function index() {
    const data = [
        {
            imageName: <BusinessDevelopment />,
            name: 'Business Development',
            total: 1238,
        },
        {
            imageName: <ContentCreator />,
            name: 'Content Creator',
            total: 378,
        },
        {
            imageName: <ProductAdvertisement />,
            name: 'Product Advertisement',
            total: 25,
        },
        {
            imageName: <CustomerRelationship />,
            name: 'Customer Relationship',
            total: 58,
        },
        {
            imageName: <GameDevelopment />,
            name: 'Game Development',
            total: 172,
        },
        {
            imageName: <TravelGuidance />,
            name: 'Travel Guidance',
            total: 83,
        },
    ];

    return (
        <>
            <div className={'flex justify-between items-center'}>
                <div className={'w-auto'}>
                    <h2 className={'text-lg text-gray-600'}>Category</h2>
                    <h3 className={'text-xl text-gray-900 font-medium'}>
                        Explore & <span className={'text-teal-400'}>Learn</span>
                    </h3>
                </div>
            </div>
            <div className={'flex justify-start items-center -mx-4 mt-6'}>
                {data?.length > 0 ? (
                    data.map((item, index) => {
                        return <ItemCategory item={item} key={index}></ItemCategory>;
                    })
                ) : (
                    <div className={'w-full text-center py-12'}>No Item Found</div>
                )}
            </div>
        </>
    );
}
