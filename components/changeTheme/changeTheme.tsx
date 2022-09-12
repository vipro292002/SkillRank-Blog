import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

type Props = {}

const ChangeThemeButton = (props: Props) => {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);



    const renderThemeChanger = () => {

        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <button className=" rounded-md transition ease-in-out delay-150 duration-500 hover:scale-110  p-2  focus:ring-primary-100"
                    onClick={() => setTheme('light')}
                >
                    <SunIcon className="h-5 w-5" />
                </button>
            )
        } else {
            return (
                <button className="rounded-md transition ease-in-out delay-150 duration-500 hover:scale-110 p-2 focus:ring-primary-100"
                    onClick={() => setTheme('dark')}
                >
                    <MoonIcon className="h-5 w-5" />
                </button>
            )
        }

    }
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div>
            {renderThemeChanger()}
        </div>
    )
}

export default ChangeThemeButton