
const pageAnalytics = (id,domain, timezone, page,referer) => {
    return (
        {
            id,
            type: 'page',
            domain,
            timezone,
            page,
            referer
        }
    )
}

const actionAnalytics = (id,domain, timezone,page,action) => {
    return (
        {
            id,
            type: 'action',
            domain,
            timezone,
            page,
            action
        }
    )
}

export {pageAnalytics, actionAnalytics}