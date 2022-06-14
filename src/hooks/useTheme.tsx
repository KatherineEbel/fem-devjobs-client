import React, {useCallback, useEffect, useState} from "react";
import {createCtx} from "./createCtx";
import useMediaQuery from "./useMediaQuery";
import json2mq from "json2mq";


interface ThemeProviderContext {
    theme: Theme
    toggleTheme: () => void
}

const [ useTheme, Provider] = createCtx<ThemeProviderContext>()

export { useTheme }

export enum Theme {
    DevJobsLight = 'light',
    DevJobsDark = 'dark',
}

export const ThemeProvider = ({ children}: {children: React.ReactNode}) => {
    const prefersDark = useMediaQuery(json2mq({
        'prefers-color-scheme': Theme.DevJobsDark
    }))
    const [theme, setTheme] = useState<Theme>(Theme.DevJobsLight)

    const getThemePreference = useCallback(() => {
        if (localStorage.theme === 'dark' || prefersDark) {
            setTheme(Theme.DevJobsDark)
        } else {
            setTheme(Theme.DevJobsLight)
        }
    }, [prefersDark])

    const toggleTheme = () => {
        setTheme(prevState => {
            const newTheme = prevState === Theme.DevJobsDark ? Theme.DevJobsLight : Theme.DevJobsDark
            localStorage.setItem('theme', newTheme)
            return newTheme
        })
    }

    useEffect(() => {
        console.log('useEffect')
        getThemePreference()
    }, [getThemePreference])

    return (
        <Provider value={{theme, toggleTheme}}>
            {children}
        </Provider>
    )
}