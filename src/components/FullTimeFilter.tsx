import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import json2mq from "json2mq";


type FullTimeFilterProps = Partial<React.HTMLProps<HTMLInputElement>>
// {checked: boolean, changeHandler: React.ChangeEventHandler<HTMLInputElement>}
export default function FullTimeFilter(props: FullTimeFilterProps) {
    const isTablet = useMediaQuery(json2mq([
        {minWidth: 600, maxWidth: 900},
    ]))

    return (
        <label className="flex flex-shrink-0 mx-4 gap-4 items-center cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-primary"
                   {...props}
            />
            <span className="font-bold">Full Time{isTablet ? '' : ' Only'}</span>
        </label>
    )
}