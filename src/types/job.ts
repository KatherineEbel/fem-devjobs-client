export interface Requirements {
    content: string;
    items: string[];
}

export interface Role {
    content: string;
    items: string[];
}

export interface Company {
    id: string
    name: string
    description: string
}

export interface Job {
    id: string;
    company: Company;
    logoUrl: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: Requirements;
    role: Role;
}

export type JobFilters = {
    position?: string
    location?: string
    fullTime?: boolean
}

export type JobFilterRequest = {
    filters: JobFilters
    limit?: number
    offset?: number
}
