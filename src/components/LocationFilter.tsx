import { ReactComponent as LocationIcon } from "assets/desktop/icon-location.svg";
import React from "react";

type LocationFilterProps = Partial<React.HTMLProps<HTMLInputElement>>

export default function LocationFilter({ name, value, onChange }: LocationFilterProps) {
    return (
     <label className='flex flex-1 items-center gap-4 ml-2 bg-base-200'>
         <LocationIcon/>
         <input className='w-36 bg-base-200 py-2 focus:outline-none' placeholder='Filter by location...' value={value}
                name={name} onChange={onChange}
         />
     </label>
    )
}