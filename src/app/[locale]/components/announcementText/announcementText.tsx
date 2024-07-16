'use client';

import { useTranslations } from 'next-intl';
import React, { useState, useEffect } from 'react';

const AnnouncementText = () => {
    const t = useTranslations('header');
    const texts = [
        {
            index: "1",
            component: (
                <div key="1" className="flex flex-col items-center justify-center text-sm font-bold">
                    <p>{t('announcement.announcementOne')}</p>
                    <p className="underline">{t('announcement.announcementTwo')}</p>
                </div>
            )
        },
        {
            index: "2",
            component: (
                <div key="2" className="flex flex-col items-center justify-center text-sm font-bold">
                    <p>{t('announcement.announcementThree')}</p>
                    <p className="underline">{t('announcement.announcementFour')}</p>
                </div>
            )
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 9000);

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className=' bg-black w-full text-white p-2'>
            {texts[currentIndex].component}
        </div>
    );
}

export default AnnouncementText;