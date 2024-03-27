export const address =  {
    title: "What is your address?",
    value: {
        address: '',
        unit: '',
        apt: '',
        state: '',
        zip: ''
    },
    options: [
        'State...',

        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
        'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',

        'DC', 'AS', 'GU', 'MP', 'PR', 'VI'
    ],
    type: 'address',
}

export const addressV2   =  {
    ...address,
    value: {
        ...address.value,
        city: ''
    },
    type: 'address_v2',
}

export const whatIsYourDateOfBirth = {
    title: "What is your date of birth?",
    value: {
        dd: '',
        mm: '',
        yyyy: '',
        error: {
            text: 'Driver Must be at least 18 years old',
            show: false
        }
    },
    minAge: 18,
    type: 'user_birth',
}

export const whatIsYourName =  {
    title: "What is your name?",
    descr: 'The better we know you, the more accurate quotes we can provide',
    value: {
        full_name: '',
        last_name: ''
    },
    type: 'user_name',
}

export const whatIsYourGender = {
    title: "What is your gender?",
    value: '',
    options: ['Male', 'Female', 'Non-binary'],
    type: 'radio',
}

export const whatIsYourGenderMin = {
    title: "What is your gender?",
    value: '',
    options: ['Male', 'Female'],
    type: 'radio',
}

export const whatIsYourGenderOptional = {
    title: "What is your gender? (Optional)",
    value: '',
    options: ['Male', 'Female'],
    type: 'radio',
    optional: true,
    complete: true,
}

export const areYouMarried = {
    title: "Are you married?",
    value: '',
    options: ['Yes', 'No'],
    type: 'radio',
}

export const whatIsYourEducationLevel = {
    title: "What is your education level?",
    value: '',
    options: ['Less than High School', 'Some or No High School', 'High School Diploma', 'Some College', 'Associate Degree', 'Bachelors Degree', 'Masters Degree', 'Doctorate Degree'],
    type: 'radio',
}

export const whatIsYourOccupation = {
    title: "What is your occupation?",
    value: '',
    options: [
        '',
        'Administrative Clerical',
        'Architect',
        'Business Owner',
        'Certified Public Accountant',
        'Clergy',
        'Construction Trades',
        'Consultant',
        'Dentist',
        'Disabled',
        'Engineer',
        'Financial Services',
        'Health Care',
        'Homemaker',
        'Human Relations',
        'Lawyer',
        'Marketing',
        'Manager Supervisor',
        'Military Enlisted',
        'Minor Not Applicable',
        'Other / Not Listed',
        'Other Non Technical',
        'Other Technical',
        'Physician',
        'Professional Salaried',
        'Professor',
        'Retail',
        'Retired',
        'Sales Inside',
        'Sales Outside',
        'School Teacher',
        'Scientist',
        'Self Employed',
        'Skilled Semi Skilled',
        'Transportantion / Logistics',
        'Student',
        'Unemployed'],
    type: 'select',
}

export const whatIsYourCreditScore = {
    title: "What is your credit score?",
    value: '',
    options: ['Excellent (700-850)', 'Good (600-700)', 'Average (400-600)', 'Poor (300-400)'],
    type: 'radio',
}

export const whatTypeOfHomeDoYouLiveIn = {
    title: "What type of home do you live in?",
    descr: 'Home owners usually need more coverage than renters',
    value: '',
    options: ['Single Family Home', 'Townhome', 'Multi Family Home', 'Condominium', 'Duplex', 'Mobile Home', 'Apartment'],
    type: 'radio',
}

export const areYouCurrentlyInsured = {
    title: "Are you currently insured?",
    value: '',
    options: ['Yes', 'No'],
    type: 'radio',
    key: 'is_insured',
}

export const whatCompanyAreYouInsuredWith = {
    title: "What company are you insured with?",
    value: '',
    options: [
        'Select Company',
        '21st Century Insurance',
        'AAA Insurance Co.',
        'Allstate',
        'American Family',
        'AMICA',
        'Country Financial',
        'Esurance',
        'Farmers',
        'Geico',
        'Liberty Mutual',
        'Mercury',
        'Nationwide',
        'Progressive',
        'State Farm',
        'The Hartford',
        'Travelers',
        'USAA',
        'Other'
    ],
    type: 'select',
    key: 'select_insured_company',
    active: 0,
    parent: 'is_insured', // key question
}

export const howLongHaveYouBeenWithCompany = {
    title: "How long have you been with %%company_name%%?",
    value: '',
    options: ['Less than a year', '1-2 years', '2-3 years', '3-5 years', '5+ years'],
    type: 'radio',
}

export const whatIsYourEmail = {
    title: "What is Your Email?",
    value: '',
    type: 'email',
    name: 'Your Email',
    pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    patternUnicode: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

export const whatIsYourPhoneNumber = {
    title: "What is Your Phone Number?",
    value: '',
    type: 'text',
    key: 'phone_number',
    name: 'Phone Number',
    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
}

export const anyAtFaultAccidentsInTheLast3Years = {
    title: "Any at-fault Accidents in the Last 3 years?",
    value: '',
    options: ['Yes', 'No'],
    type: 'radio',
}