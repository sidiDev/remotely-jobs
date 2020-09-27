export const pass_data = (JobsData) => {
    const action = {
        type: 'SEND DATA',
        JobsData
    }

    return action;
}

export const apply_Search = (searchValues) => {
    const action = {
        type: 'APPLY SEARCH',
        searchValues
    }

    return action;
}

export const apply_Filter = (filterValues) => {
    const action = {
        type: 'APPLY FILTER',
        filterValues
    }

    return action;
}