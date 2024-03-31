
export function lastIncidents({ repeatGroup, indexInGroup, other = false }) {
    return {
        title: 'Any ' + (other ? 'other ' : '') + 'incidents in the last 3 years?',
        descr: !other ? 'Such as tickets, accidents, claims, DUI, or license suspension' : '',
        value: '',
        options: ['Yes', 'No'],
        type: 'radio',
        repeatGroup,
        indexInGroup,
    }
}

export function typeIncidents({ repeatGroup, indexInGroup }) {
    return   {
        title: "Type of incident",
        value: '',
        options: ['Ticket', 'Accident', 'Claim', 'DUI', 'License Suspension'],
        type: 'radio',
        repeatGroup,
        indexInGroup,
    }
}

export function dateIncident({ repeatGroup, indexInGroup, typeIncident }) {
    return {
        title: {
            ticket: 'Date of Ticket',
            claim: 'Date of Claim',
            accident: 'Date of Accident',
            dui: 'Date of DUI',
            'license suspension': 'Date of License Suspension'
        }[typeIncident],
        value: {
            dd: '', mm: '', yyyy: '',
            error: { text: 'Date must be within last 3 years', show: false }
        },
        min: 0,
        max: 3,
        type: 'date',
        repeatGroup,
        indexInGroup,
    }
}

export function typeIncident({ repeatGroup, indexInGroup, typeIncident }) {
    const types = {
        ticket: [
            'Ticket Type',
            'Speeding less than 10 mph over',
            'Speeding more than 10 mph over',
            'Speeding more than 20 mph over',
            'Drug possession',
            'Minor in possession',
            'Open Container',
            'DUI/DWI'
        ],
        claim: [
            'Claim Type',
            'Speeding less than 10 mph over',
            'Speeding more than 10 mph over',
            'Speeding more than 20 mph over',
            'Drug possession',
            'Minor in possession',
            'Open Container',
            'DUI/DWI'
        ],
        accident: [
            'Select What Happened',
            'Collided with another car',
            'Hit while stopped',
            'Hit by another person',
            'Rear-ended by another person',
            'Single car accident',
            'Other'
        ],
        dui: [
            'Select DUI State',
            'Alabama', 
            'Alaska',
            'Arkansas',
            'Arizona',
            'California', 
            'Colorado',
            'Connecticut',
            'District of Columbia', 
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Iowa',
            'Idaho',
            'Illinois',
            'Indiana',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Missouri',
            'Mississippi',
            'Montana',
            'North Carolina',
            'North Dakota',
            'Nebraska',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'Nevada',
            'New York',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Puerto Rico',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Virginia',
            'Virgin Islands',
            'Vermont',
            'Washington',
            'Wisconsin',
            'West Virginia',
            'Wyoming'
        ],
    }

    const title = {
        ticket: 'Type of Ticket',
        claim: 'Type of Claim',
        accident: 'What happened in the accident?',
        dui: 'What state was DUI in?'
    }

    return {
        title: title[typeIncident],
        value: '',
        options: types[typeIncident],
        type: 'select',
        repeatGroup,
        indexInGroup,
    }
}

export function accident({ repeatGroup, indexInGroup }) {
    return {
        title: "We're you at-fault in the accident?",
        value: '',
        options: ['Yes', 'No'],
        type: 'radio',
        repeatGroup,
        indexInGroup,
    }
}

export function damage({ repeatGroup, indexInGroup }) {
    return {
        title: 'Was there damage?',
        value: '',
        options: ['No damage', 'Property', 'People', 'Both'],
        type: 'radio',
        repeatGroup,
        indexInGroup,
    }
}
