import {
    address, addressV2, anyAtFaultAccidentsInTheLast3Years, areYouCurrentlyInsured,
    areYouMarried, howLongHaveYouBeenWithCompany, whatCompanyAreYouInsuredWith,
    whatIsYourCreditScore, whatIsYourDateOfBirth, whatIsYourEducationLevel,
    whatIsYourEmail, whatIsYourGender, whatIsYourGenderMin, whatIsYourGenderOptional,
    whatIsYourName, whatIsYourOccupation, whatIsYourPhoneNumber, whatTypeOfHomeDoYouLiveIn
} from "./questions-export.js";

import motorcycle from './moto.js'
import { motorcycleCheckbox, motorcycleDatabase } from './moto.js'

// example validation rule
// :validation="[['required'], ['matches', /^\d{3}-\d{3}-\d{4}$/]]"

// TODO: Required option Appears during the required question
// Select ‘Not Sure’ if you don’t know what coverage you want.
// Your Information is safe & secure
// Insurance companies require this in order to provide an accurate quote.
// No Spam Guaranteed
// Your life insurance quotes are ready

// TODO: Type of Ticket
// type_of_ticket: [
//     'Speeding less than 10 mph over',
//     'Speeding more than 10 mph over',
//     'Speeding more than 20 mph over',
//     'Drug possession',
//     'Minor in possession',
//     'Open Container',
//     'DUI/DWI',
// ]

const formData = {
    test: [
        {
            title: "TEST... Select Auto",
            value: {
                auto_year: '',
                auto_make: '',
                auto_model: '',
            },
            options: {
                years: ['Select Vehicle Year', ...Array.from({ length: (2024 - 1990) + 1 }, (_, i) => '' + (1990 + i)).reverse()],
                makes: ["Select Make"],
                // make: ["Select Make", "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Genesis", "GMC", "Honda", "Hyundai", "INFINITI", "Jaguar", "Kia", "Land Rover", "Lincoln", "Mazda", "MINI", "Mitsubishi", "Nissan", "Polestar", "Subaru", "Toyota", "Volvo", "Alfa Romeo", "Bentley", "Chrysler", "Dodge", "FIAT", "Ford", "Jeep", "Karma", "Lamborghini", "Lexus", "Lucid", "Maserati", "McLaren", "Mercedes-Benz", "Porsche", "Ram", "Rivian", "Rolls-Royce", "Tesla", "Volkswagen", "Aston Martin", "Lotus", "Ferrari", "smart", "Scion", "Suzuki", "Fisker", "Maybach", "Saab", "Mercury", "HUMMER", "Pontiac", "Bugatti", "Saturn", "Spyker", "Isuzu", "Panoz", "Oldsmobile", "Daewoo", "Plymouth", "AM General", "Eagle", "Geo", "VinFast" ],
                models: ['Select Model', 'QASHQAI Hybrid', 'BMW 5', 'X-TRAIL Hybrid', 'QASHQAI', 'JUKE', 'LEAF'],
            },
            load: {
                years: false,
                makes: false,
                models: false,
            },
            show: true,
            complete: false,
            type: 'select_auto',
        },
        {
            title: "TEST... Select",
            value: '',
            options: ['Select Engineer', 'Engineer2', 'Engineer3', 'Engineer4', 'Engineer5', 'Engineer6'],
            type: 'select',
        },
        {
            title: 'TEST... Radio',
            descr: 'Most drivers average 30 per day',
            value: '',
            options: ['5', '10', '20', '30+'],
            type: 'radio',
        },
        {
            title: "TEST... Radio Star",
            descr: 'Most select Standard, You can change it later if you want.',
            value: '',
            options: [
                { value: 'State Minimum', descr: 'Bodily Injury Minimum\nProperty Damage Minimum', star: 1 },
                { value: 'Basic', descr: 'Bodily Injury $50K / $100K\nProperty Damage $50K', star: 2 },
                { value: 'Standard', descr: 'Bodily Injury $100K / $300K\nProperty Damage $100K', star: 3 },
                { value: 'Superior', descr: 'Bodily Injury $250K / $500K\nProperty Damage $250K', star: 4 }
            ],
            type: 'radio_star',
        },
        {
            title: "TEST... User Name",
            descr: 'The better we know you, the more accurate quotes we can provide',
            value: {
                full_name: '',
                last_name: ''
            },
            type: 'user_name',
        },
        {
            title: "TEST... User Birth Date",
            value: {
                dd: '',
                mm: '',
                yyyy: '',
                error: {
                    text: 'Driver Must be at least 18 years old',
                    show: false
                }
            },
            type: 'user_birth',
        },
        {
            title: "TEST... Address1",
            value: {
                address: '',
                unit: '',
                apt: '',
                state: '',
                zip: ''
            },
            options: ['State...', 'AB', 'BC', 'CD', 'AA', 'FD', 'RP'],
            type: 'address',
            formKitvalid: false,
        },
        {
            title: "TEST... Address2",
            value: {
                address: '',
                unit: '',
                city: '',
                state: '',
                zip: ''
            },
            options: ['State...', 'AB', 'BC', 'CD', 'AA', 'FD', 'RP'],
            type: 'address_v2',
            formKitvalid: false,
        },
        {
            title: 'TEST... Number',
            value: '',
            type: 'number',
            validation: 'required|number',
        },
        {
            title: 'TEST... Size',
            value: '',
            type: 'size',
        },
        {
            title: 'TEST... Size Two',
            value: {
                ft: '',
                in: ''
            },
            type: 'size_two',
        },
        {
            title: "TEST... Email",
            value: '',
            type: 'email',
            name: 'Your Email',
            validation: 'email',
        },
        {
            title: "TEST... Text",
            value: '',
            type: 'text',
            validation: 'required|length:3',
        },
        {
            title: "TEST... Checkbox",
            value: [],
            options: ['General Liability', 'Commercial Auto', 'Commercial Property', 'Professional Liability (E&O)', 'Directors and Officers Liability', 'Business owner Package Police (BOP)', 'Worker Compensation', 'Commercial Crime'],
            type: 'checkbox',
        },
    ],

    auto: [
        // tab 1
        {
            title: "Let's get started, what car do you drive?",
            value: {
                auto_year: '',
                auto_make: '',
                auto_model: '',
            },
            options: {
                years: ['Select Vehicle Year', ...Array.from({ length: (2024 - 1990) + 1 }, (_, i) => '' + (1990 + i)).reverse()],
                makes: ["Select Make"],
                models: ['Select Model'],
            },
            load: {
                years: false,
                makes: false,
                models: false,
            },
            show: true,
            complete: false,
            type: 'select_auto',
            key: 'select_auto',
        },
        {
            title: 'What do you use your %%auto_make%% for?',
            value: '',
            options: ['Getting to Work', 'Running Errands', 'Pleasure', 'Uber / Lyft'],
            type: 'radio',
        },
        {
            title: 'How many miles per day do you drive?',
            descr: 'Most drivers average 30 per day',
            value: '',
            options: ['5', '10', '20', '30+'],
            type: 'radio',
        },
        {
            title: 'Do you own your %%auto_make%%?',
            descr: 'Drivers who lease or finance may need more coverage',
            value: '',
            options: ['Own', 'Lease', 'Finance'],
            type: 'radio',
        },
        {
            title: 'Would You Like Full Coverage or Liability Only?',
            descr: 'Liability covers damage you cause other drivers or their property.\nFull coverage applies to damage to your vehicle.',
            value: '',
            options: ['Full Coverage', 'Liability Only'],
            type: 'radio',
        },
        {
            title: 'Select Deductible for Collision',
            descr: 'Amount you pay in case of an accident.',
            value: '',
            options: ['$2500', '$1500', '$1000', '$750', '$500', '$250', '$100', '$0'],
            type: 'radio',
        },
        {
            title: 'Select Deductible for Comprehensive',
            descr: 'Amount you pay in case of theft, vandalism etc.',
            value: '',
            options: ['$2500', '$1500', '$1000', '$750', '$500', '$250', '$100', '$0'],
            type: 'radio',
        },
        {
            title: 'Want to add a second vehicle?',
            descr: 'You can save up to 25% by having multiple vehicles on the same policy',
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
            key: 'add_second_vehicle',
        },

        /** Second Vehicle */
        {
            title: "Second Vehicle: What car do you drive?",
            value: {
                auto_year: '',
                auto_make: '',
                auto_model: '',
            },
            options: {
                years: ['Select Vehicle Year', ...Array.from({ length: (2024 - 1990) + 1 }, (_, i) => '' + (1990 + i)).reverse()],
                makes: ["Select Make"],
                models: ['Select Model'],
            },
            load: {
                years: false,
                makes: false,
                models: false,
            },
            complete: false,
            type: 'select_auto',
            key: 'select_auto2',
            group: 'vehicle2',
        },
        {
            title: 'Second Vehicle: What do you use your %%second_auto_make%% for?',
            value: '',
            options: ['Getting to Work', 'Running Errands', 'Pleasure', 'Uber / Lyft'],
            type: 'radio',
            group: 'vehicle2',
        },
        {
            title: 'Second Vehicle: How many miles per day do you drive?',
            descr: 'Most drivers average 30 per day',
            value: '',
            options: ['5', '10', '20', '30+'],
            type: 'radio',
            group: 'vehicle2',
        },
        {
            title: 'Second Vehicle: Do you own your %%second_auto_make%%?',
            descr: 'Drivers who lease or finance may need more coverage',
            value: '',
            options: ['Own', 'Lease', 'Finance'],
            type: 'radio',
            group: 'vehicle2',
        },
        {
            title: 'Second Vehicle: Would You Like Full Coverage or Liability Only?',
            descr: 'Liability covers damage you cause other drivers or their property.\nFull coverage applies to damage to your vehicle.',
            value: '',
            options: ['Full Coverage', 'Liability Only'],
            type: 'radio',
            group: 'vehicle2',
        },
        // Second Vehicle


        // tab 2
        {...whatIsYourName, show: true},
        whatIsYourDateOfBirth,
        whatIsYourGender,
        areYouMarried,
        whatIsYourEducationLevel,
        whatIsYourOccupation,
        whatIsYourCreditScore,
        {
            title: "What is the status of your driver's license?",
            value: '',
            options: ['Active', 'Permit', 'Suspended', 'Foreign', 'Expired'],
            type: 'radio',
        },
        {
            title: "Do you require SR-22?",
            descr: 'SR-22 is a certificate issued by the state that is sometimes required for drivers that have a DUI or multiple incidents.',
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "Any incidents in the last 3 years?",
            descr: 'Such as tickets, accidents, claims, DUI, or license suspension',
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "Want to add a second driver?",
            descr: 'You can save up to 25% by having multiple drivers on the same policy',
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },


        // tab 3
        {
            title: "Do you currently have car insurance?",
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "How much coverage do you need?",
            descr: 'Most select Standard, You can change it later if you want.',
            value: '',
            options: [
                { value: 'State Minimum', descr: 'Bodily Injury Minimum\nProperty Damage Minimum', star: 1 },
                { value: 'Basic', descr: 'Bodily Injury $50K / $100K\nProperty Damage $50K', star: 2 },
                { value: 'Standard', descr: 'Bodily Injury $100K / $300K\nProperty Damage $100K', star: 3 },
                { value: 'Superior', descr: 'Bodily Injury $250K / $500K\nProperty Damage $250K', star: 4 }
            ],
            type: 'radio_star',
        },
        {
            title: "Have you or anyone in your family\nserved in the military?",
            descr: 'Some insurance companies offer military discounts',
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "Do you own or rent your home?",
            descr: 'Home owners usually need more coverage than renters',
            value: '',
            options: ['Own', 'Rent'],
            type: 'radio',
        },
        whatTypeOfHomeDoYouLiveIn,
        address,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],

    home: [
        {...whatTypeOfHomeDoYouLiveIn, show: true},
        address,
        {
            title: 'What year was your home built?',
            value: '',
            type: 'number',
            validation: 'required|number|between:1900,2025',
        },
        {
            title: 'What is the square footage?',
            value: '',
            type: 'number',
            validation: 'required|number|between:1,2000',
        },
        {
            title: 'How many stories is your home?',
            value: '',
            options: ['1', '2', '3', '4+'],
            type: 'radio',
        },
        {
            title: 'How many bedrooms?',
            value: '',
            options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            type: 'radio',
        },
        {
            title: 'How many bathrooms?',
            value: '',
            options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            type: 'radio',
        },
        {
            title: 'What year did you purchase your home?',
            value: '',
            type: 'number',
            validation: 'required|number|between:1900,2025',
        },
        whatIsYourName,
        whatIsYourDateOfBirth,
        whatIsYourGender,
        areYouMarried,
        whatIsYourEducationLevel,
        whatIsYourOccupation,
        whatIsYourCreditScore,
        areYouCurrentlyInsured,
        whatCompanyAreYouInsuredWith,
        howLongHaveYouBeenWithCompany,
        {
            title: "When does your policy expire?",
            descr: "It's ok to guess if you aren't sure.",
            value: '',
            options: ['Not Sure', 'A Few Days', '2 Weeks', '1 Month', '2 Month', '3 Month', '4-6 Month', '6 Month+'],
            type: 'radio',
        },
        {
            title: "Last question Ertgerg, how much would \n it cost to rebuild your home?",
            descr: 'Rebuild cost is different from market value. If you’re not sure we recommend using $150 per sq ft.',
            value: '',
            validation: 'required',
            type: 'number',
        },
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],

    life: [
        {...whatIsYourDateOfBirth, show: true},
        whatIsYourGender,
        areYouMarried,
        {
            title: 'How Tall Are You?',
            value: {
                ft: '',
                in: ''
            },
            validation: {
                ft: 'required|number',
                in: 'required|number',
            },
            type: 'size_two',
        },
        {
            title: 'How Much Do you Weigh?',
            value: '',
            type: 'size',
            validation: 'required|number',
        },
        {
            title: "Do You Use Tobacco?",
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "Do You Have any Major Health Conditions?",
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        {
            title: "What Coverage Are You Interested in?",
            value: '',
            options: ['Term 1 Year', 'Term 5 Year', 'Term 10 Year', 'Term 15 Year', 'Term 20 Year', 'Term 25 Year', 'Term 30 Year', 'Whole Life', 'Universal Life', 'Variable Life', 'Investment', 'Not Sure'],
            type: 'radio',
        },
        {
            title: 'What Coverage Amount Are You Interested in?',
            value: '',
            options: ['$50,000', '$100,000', '$150,000', '$200,000', '$250,000', '$300,000', '$350,000', '$400,000', '$450,000', '$500,000', '$550,000', '$600,000', '$650,000', '$700,000', '$750,000', '$800,000', '$850,000', '$900,000', '$950,000', '$1,000,000', '$1,250,000', '$1,500,000', '$1,7500,000', '$2,000,000'],
            type: 'radio',
        },
        whatIsYourName,
        addressV2,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],

    health: [
        {...whatIsYourDateOfBirth, show: true},
        {
            title: "What is Your Household Income?",
            value: '',
            options: ['Below $17,000', '$17,000 - $20,000', '$20,000 - $25,000', '$25,000 - $30,000', '$30,000 - $35,000', '$35,000 - $40,000', '$40,000 - $55,000', 'Over $55,000'],
            type: 'radio',
        },
        {
            title: "Do You Have Any of the Following Health Conditions?",
            value: '',
            options: ['Yes', 'No'],
            descrList: [
                'Alcohol / Drug Abuse', 'Clinical Depression', 'Mental Illness',
                'Alcohol / Drug Abuse', 'Diabetes', 'Pulmonary Disease',
                'Alzheimer\'s Disease', 'Heart Disease', 'Stroke',
                'Asthma', 'High Blood Pressure', 'Ulcer',
                'Cancer', 'Kidney Disease', 'Vascular Disease',
                'High Cholesterol', 'Liver Disease', 'Other / Not Listed'
            ],
            type: 'radio',
        },
        whatIsYourName,
        addressV2,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],

    medicare: [
        {...whatIsYourDateOfBirth, title: whatIsYourDateOfBirth.title + ' (optional)', show: true, optional: true},
        whatIsYourGenderOptional,
        whatIsYourName,
        address,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],

    commercial: [
        {
            title: "What is the Name of Your Business?",
            value: '',
            type: 'text',
            validation: 'required|length:3',
            show: true,
        },
        {
            title: "Legal Entity",
            value: '',
            options: ['Sole Proprietorship', 'Partnership', 'LLC', 'S Corporation', 'C Corporation', 'Other'],
            type: 'radio',
            show: true,
        },
        addressV2,
        {
            title: "Brief Description of Your Business",
            value: '',
            type: 'text',
            validation: 'required|length:3',
        },
        {
            title: "Years in Business",
            value: '',
            options: ['Less that 1 Year', '1 Year', '2 Year', '3 Year', '4 Year', '5 Year', '6 Year', '7 Year', '8 Year',  '9 Year', '10 Year', '11 - 15 Year', '15 - 20 Year', '20 - 30 Year', '30 - 40 Year', '40 - 50 Year'],
            type: 'radio',
        },
        {
            title: "Number of Partners/Owners",
            value: '',
            options: ['1', '2', '3', '4', '5', '6', '7', '8',  '9', '10+'],
            type: 'radio',
        },
        {
            title: "Number of Full Time Employees",
            value: '',
            options: ['None', '1', '2', '3', '4', '5', '6 - 10', '11 - 20', '21 - 30',  '31 - 40', '41 - 50', '51 - 100', 'More then 100'],
            type: 'radio',
        },
        {
            title: "Number of Part Time Employees",
            value: '',
            options: ['None', '1', '2', '3', '4', '5', '6 - 10', '11 - 20', '21 - 30',  '31 - 40', '41 - 50', '51 - 100', 'More then 100'],
            type: 'radio',
        },
        {
            title: "Annual Revenue",
            value: '',
            options: ['Under $100,000', '$100,000 - $500,000', '$500,000 - $1,000,000', '$1,000,000 - $5,000,000', '$5,000,000 - $10,000,000', 'Over $10,000,000'],
            type: 'radio',
        },
        {
            title: "Annual Payroll",
            value: '',
            options: ['Less Than $50,000', '$50,001 - $100,000', '$100,001 - $200,000', '$200,001 - $500,000', 'Over $500,001'],
            type: 'radio',
        },
        {
            title: "Type of coverage You're Interested in",
            value: [],
            options: ['General Liability', 'Commercial Auto', 'Commercial Property', 'Professional Liability (E&O)', 'Directors and Officers Liability', 'Business owner Package Police (BOP)', 'Worker Compensation', 'Commercial Crime'],
            type: 'checkbox',
        },
        {
            title: "General Liability Coverage",
            value: '',
            options: ['$1,000,000', '$2,000,000'],
            type: 'radio',
        },
        whatIsYourName,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],

    bike: [
        {
            title: 'Legal Entity',
            value: '',
            options: ['2025', '2024', ...Array.from({ length: (2020 - 1986) + 1 }, (_, i) => '' + (1986 + i)).reverse()],
            type: 'radio',
            show: true,
        },
        {
            title: 'Select Motorcycle Make',
            value: '',
            options: {
                radio: [...motorcycleCheckbox, '__for_select__'],
                select: [
                    'Select Other Make',
                    ...motorcycleDatabase
                        .map(moto => moto.make[0].toUpperCase() + moto.make.toLowerCase().slice(1))
                        .filter(make => !motorcycleCheckbox.map(e => e.toLowerCase()).includes(make.toLowerCase())),
                    'Another',
                ]
            },
            type: 'radio_select',
            key: 'select_motorcycle_make'
        },
        {
            title: 'Select Motorcycle Model',
            value: '',
            options: ['BR125', 'EJ8000', 'EL450', 'EN650', 'EN651', 'EN652', 'EN653', 'EN654', 'EN655', 'EN656', 'EN657'],
            type: 'radio',
            key: 'select_motorcycle_models'
        },
        areYouCurrentlyInsured,
        whatCompanyAreYouInsuredWith,
        howLongHaveYouBeenWithCompany,
        {
            title: 'Are You a Homeowner?',
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        whatIsYourDateOfBirth,
        whatIsYourGenderMin,
        areYouMarried,
        anyAtFaultAccidentsInTheLast3Years,
        {
            title: "DUI in the Last 3 years?",
            value: '',
            options: ['Yes', 'No'],
            type: 'radio',
        },
        whatIsYourName,
        addressV2,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],

    renters: [
        {
            title: 'Select Type of Property',
            value: '',
            options: ['Single Family Home', 'Townhome', 'Multi Family Home', 'Condominium', 'Duplex', 'Mobile Home', 'Apartment'],
            type: 'radio',
            show: true,
        },

        areYouCurrentlyInsured,
        whatCompanyAreYouInsuredWith,

        {
            title: 'How Much Personal Property Do You Want to Insure?',
            value: '',
            options: ['$10,000 or less', '$15,000', '$20,000', '$25,000', '$30,000', '$35,000', '$40,000', '$45,000', '$50,000', '$60,000', '$70,000', '$80,000', '$90,000', '$100,000', '$125,000', '$150,000', '$175,000', '$200,000', '$225,000', '$250,000', '$275,000', '$300,000 or more'],
            type: 'radio',
        },

        whatIsYourDateOfBirth,
        whatIsYourGenderMin,
        areYouMarried,
        anyAtFaultAccidentsInTheLast3Years,
        whatIsYourName,
        addressV2,
        whatIsYourEmail,
        whatIsYourPhoneNumber,
    ],
}

export default formData