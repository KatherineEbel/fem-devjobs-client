import {ReactComponent as SearchIcon} from "assets/desktop/icon-search.svg";
import {ReactComponent as FilterIcon} from "assets/mobile/icon-filter.svg";
import json2mq from "json2mq";
import useMediaQuery from "../hooks/useMediaQuery";
import LocationFilter from "./LocationFilter";
import Modal from "./Modal";
import FullTimeFilter from "./FullTimeFilter";
import React, {useState} from "react";
import SearchFilter from "./SearchFilter";
import {JobFilters} from "../types/job";


export default function JobFilter({onFiltersSelected}: {onFiltersSelected: (filters: JobFilters) => void}) {
    const [filters, setFilters] = useState<JobFilters>({ position: '', location: '',  fullTime: false})
    const [searchPlaceHolder, setSearchPlaceholder] = useState<string | undefined>(undefined)
    const isTablet = useMediaQuery(json2mq({minWidth: 689}))

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const {name, value } = e.target
        setFilters({...filters, [name]: name === 'fullTime' ? value === 'on' : value})
    }

    const handleSearch: React.MouseEventHandler<HTMLLabelElement | HTMLButtonElement> = () => {
        setSearchPlaceholder(undefined)
        onFiltersSelected(filters)
    }

    return (
        <div className='flex items-center bg-base-200 h-20 px-6 rounded -translate-y-1/2 shadow'>
            <SearchFilter name='position' placeholder={searchPlaceHolder} value={filters.position} onChange={handleChange} />
            {isTablet ? (
                <>
                    <div className='divider flex-none divider-vertical w-[1px] h-full bg-secondary shadow opacity-20'/>
                    <LocationFilter name='location' value={filters.location} onChange={handleChange}/>
                    <div className='divider flex-none divider-vertical w-[1px] h-full bg-secondary shadow opacity-20'/>
                    <FullTimeFilter name='fullTime' checked={filters.fullTime} onChange={handleChange}/>
                </>
            ) : (
                <label htmlFor="modal-filter" className="btn btn-ghost modal-button">
                    <FilterIcon className='fill-[#6E8098]' onClick={() => setSearchPlaceholder('Enter job desc...')}/>
                </label>
            )}
            {isTablet ? (
                <button className="btn btn-primary w-20"
                        onClick={handleSearch}
                >
                    Search
                </button>
            ) : (

                <button className="btn btn-square btn-primary"
                        onClick={handleSearch}
                >
                    <SearchIcon className='fill-white'/>
                </button>
            )}
            <Modal modalId='modal-filter'>
                <div className='flex flex-col gap-6'>
                    <LocationFilter name='location' value={filters.location} onChange={handleChange}/>
                    <div className='divider'/>
                    <FullTimeFilter name='fullTime' checked={filters.fullTime} onChange={handleChange}/>
                    <label htmlFor='modal-filter' className='btn btn-primary border-none flex-shrink-0'
                           onClick={handleSearch}
                    >Search</label>
                </div>
            </Modal>
        </div>
    )
}