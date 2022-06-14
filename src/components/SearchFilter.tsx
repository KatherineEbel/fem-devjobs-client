import React from "react";
import {useTheme} from "../hooks/useTheme";
import useMediaQuery from "../hooks/useMediaQuery";
import json2mq from "json2mq";
import { ReactComponent as SearchIcon } from "assets/desktop/icon-search.svg";

type SearchFilterProps = Partial<React.HTMLProps<HTMLInputElement>>

export default function SearchFilter({placeholder = 'Filter by title...', ...rest}: SearchFilterProps) {
    const { theme } = useTheme()
    const isTablet = useMediaQuery(json2mq({minWidth: 636}))

    return (
        <label data-theme={theme} className='flex md:flex-1 items-center gap-4 mr-2 bg-base-200'>
            { isTablet && <SearchIcon className='fill-primary' />}
            <input type="text" placeholder={placeholder} className={`w-36 flex-auto bg-base-200 focus:outline-none`}
                   {...rest}
            />
        </label>
    )
}