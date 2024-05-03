import questions from './questions.js'

const q = {...questions}

const auto = () => {

    [
        [   // Let's get started, what car do you drive?
            { k:'auto_year', v: '1999' },
            { k:'auto_make', v:'Audi' },
            { k:'auto_model', v:'A3' }
        ],
        'Pleasure',         // What do you use your ... for? Pleasure
        '20',               // How many miles per day do you drive? 20
        'Finance',          // Do you own your ...? Finance
        'Full Coverage',    // Would You Like Full Coverage or Liability Only? Full Coverage
        '$1000',            // Select Deductible for Collision? $1000
        '$1500',            // Select Deductible for Comprehensive? $1500
        'Yes',              // Want to add a second vehicle? Yes

        [   // Second Vehicle: What car do you drive?
            { k:'auto_year', v: '2014' },
            { k:'auto_make', v:'BMV' },
            { k:'auto_model', v:'328d' }
        ],

        'Uber / Lyft',      // Second Vehicle: What do you use your BMV 328d for? Uber / Lyft
        '30+',              // Second Vehicle: How many miles per day do you drive? 30+
        'Lease',            // Second Vehicle: Do you own your BMV 328d? Lease
        'Liability Only',   // Second Vehicle: Would You Like Full Coverage or Liability Only? Liability Only
        '$1000',            // Second Vehicle: Select Deductible for Collision $1000
        '$1500',            // Second Vehicle: Select Deductible for Comprehensive $1500

        // Next Tab

        [   // What is your name?
            { k:'full_name', v: 'Oleksandr' },
            { k:'last_name', v:'Borymskyi' }
        ],

        [   // What is your date of birth?
            { k:'mm', v: '05' },
            { k:'dd', v:'25' },
            { k:'yyyy', v:'2000' }
        ],

        'Male',             // What is your gender? Male
        'Yes',              // Are you married? Yes
        'Some College',     // What is your education level? Some College
        'Architect',        // What is your occupation? Architect
        'Good (600-700)',   // What is your credit score? Good (600-700)
        'Permit',           // What is the status of your driver's license? Permit
        'Yes',              // Do you require SR-22? Yes
        // 'No',              // Any incidents in the last 3 years? Yes

        // .................... REPEATER ....................

        // 'Yes',              // Want to add a second driver?
        //
        // [   // Second Driver: What is your name?
        //     { k:'full_name', v: 'Maria' },
        //     { k:'last_name', v:'Leik' }
        // ],
        //
        // [   // Second Driver: What is your date of birth?
        //     { k:'mm', v: '01' },
        //     { k:'dd', v:'01' },
        //     { k:'yyyy', v:'1928' }
        // ],
        //
        // 'Female',           // Second Driver: What is your gender? Female
        // 'Yes',              // Second Driver: Are you married? Yes
        // 'Doctorate Degree', // Second Driver: What is your education level? Doctorate Degree
        // 'Architect',        // Second Driver: What is your occupation? Architect
        // 'Poor (300-400)',   // Second Driver: What is your credit score? Poor (300-400)
        // 'Suspended',        // Second Driver: What is the status of your driver's license? Suspended
        // 'No',               // Second Driver: Do you require SR-22? No
        // 'Yes',              // Second Driver: Any incidents in the last 3 years? Yes
        //
        // // .................... REPEATER ....................
        //
        // 'Yes',              // Do you currently have car insurance? Yes
        // 'Basic',            // How much coverage do you need? Basic
        // 'No',               // Have you or anyone in your familyserved in the military? No
        // 'Own',              // Do you own or rent your home? Own
        // 'Townhome',         // What type of home do you live in? Townhome
        //
        // [   // What is your address?
        //     { k: 'address', v: 'Shevchenko, 45, Berdychiv' },
        //     { k: 'unit',    v:'1234' },
        //     { k: 'apt',     v:'' },
        //     { k: 'state',   v:'MN' },
        //     { k: 'zip',     v:'4321' },
        // ],
        //
        // 'favorstreet21@gmail.com',  // What is Your Email? favorstreet21@gmail.com
        // '1234567890',               // What is Your Phone Number? 1234567890

    ].forEach((elem, i) => {
        if (typeof elem === 'string')
            q.auto[i].value = elem
        else
            elem.forEach(e => q.auto[i].value[e.k] = e.v)
    })
}
const home = () => {
    q.home[0].value = 'Townhome'

    q.home[1].value.address = 'Shevchenko, 45, Berdychiv'
    q.home[1].value.unit = '1234'
    q.home[1].value.apt = ''
    q.home[1].value.state = 'MN'
    q.home[1].value.zip = '4321'

    // q.home[2].value = 2000
    q.home[3].value = 3
    q.home[4].value = 3
    q.home[5].value = 4
    q.home[6].value = 6
    // q.home[7].value = 2005

    q.home[8].value.full_name = 'Bob'
    q.home[8].value.last_name = 'Grid'

    // q.home[9].value.dd = 13
    // q.home[9].value.mm = 8
    // q.home[9].value.yyyy = 1996

    q.home[10].value = 'Female'
    q.home[11].value = 'Yes'
    q.home[12].value = 'Masters Degree'
    q.home[13].value = 'Clergy'
    q.home[14].value = 'Poor (300-400)'

    q.home[15].value = 'Yes'
    q.home[16].value = 'AMICA'
    q.home[17].value = '2-3 years'
    q.home[18].value = '4-6 Month'
    q.home[19].value = 'Что то уту'

    q.home[20].value = 'favorstreet21@gmail.com'
    q.home[21].value = '123456789'
}
const life = () => {
    q.life[0].value.dd = 18
    q.life[0].value.mm = 3
    q.life[0].value.yyyy = 2001

    q.life[1].value = 'Male'

    q.life[2].value = 'Yes'

    q.life[3].value.ft = 12
    q.life[3].value.in = 23

    q.life[4].value = 31

    q.life[5].value = 'No'
    q.life[6].value = 'No'
    q.life[7].value = 'Term 20 Year'
    q.life[8].value = '$550,000'

    q.life[9].value.full_name = 'Oleg'
    q.life[9].value.last_name = 'Korob'

    // q.life[10].value.address = 'Shevchenko, 231'
    // q.life[10].value.unit = '111'
    // q.life[10].value.city = 'Berdychiv'
    // q.life[10].value.state = 'OH'
    // q.life[10].value.zip = '222'

    q.life[11].value = 'favorstreet21@gmail.com'
    q.life[12].value = '123456789'
}
const health = () => {
    q.health[0].value.dd = 18
    q.health[0].value.mm = 3
    q.health[0].value.yyyy = 2001

    q.health[1].value = '$20,000 - $25,000'
    q.health[2].value = 'Yes'

    q.health[3].value.full_name = 'Oksana'
    q.health[3].value.last_name = 'Super'

    q.health[4].value.address = 'Shevchenko, 111'
    q.health[4].value.unit = '1234567890'
    q.health[4].value.city = 'Berdychiv 2'
    q.health[4].value.state = 'CA'
    q.health[4].value.zip = '7777'

    q.health[5].value = 'favorstreet21@gmail.com'
    q.health[6].value = '123456789'
}
const medicare = () => {
    q.medicare[0].value.dd = 22
    q.medicare[0].value.mm = 2
    q.medicare[0].value.yyyy = 2005

    q.medicare[1].value = 'Female'

    q.medicare[2].value.full_name = 'Nikita'
    q.medicare[2].value.last_name = 'Grand'

    q.medicare[3].value.address = 'Shevchenko, 222'
    q.medicare[3].value.unit = '224455'
    q.medicare[3].value.city = 'Berdychiv 3'
    q.medicare[3].value.state = 'AZ'
    q.medicare[3].value.zip = '65433'

    q.medicare[4].value = 'favorstreet21@gmail.com'
    q.medicare[5].value = '123456789'
}
const commercial = () => {
    q.commercial[0].value = 'Name Business'
    q.commercial[1].value = 'LLC'

    q.commercial[2].value.address = 'Shevchenko, 333'
    q.commercial[2].value.unit = '333'
    q.commercial[2].value.city = 'Berdychiv 333'
    q.commercial[2].value.state = 'AZ'
    q.commercial[2].value.zip = '333'

    q.commercial[3].value = 'Brief Description of Your Business'
    q.commercial[4].value = '3 Year'
    q.commercial[5].value = '5'
    q.commercial[6].value = '6 - 10'
    q.commercial[7].value = '21 - 30'
    q.commercial[8].value = '$1,000,000 - $5,000,000'
    q.commercial[9].value = '$200,001 - $500,000'
    q.commercial[10].value = ['Commercial Property', 'Professional Liability (E&O)']
    q.commercial[11].value = '$2,000,000'

    q.commercial[12].value.full_name = 'Boris'
    q.commercial[12].value.last_name = 'Dushcenko'

    q.commercial[13].value = 'favorstreet21@gmail.com'
    q.commercial[14].value = '123456789'
}
const bike = () => {
    // q.bike[0].value = 2000
    q.bike[1].value = 'Kawasaki'
    q.bike[2].value = 'BJ'
    q.bike[3].value = 'Yes'
    q.bike[4].value = 'AAA Insurance Co.'
    q.bike[5].value = '1-2 years'
    q.bike[6].value = 'No'

    q.bike[7].value.dd = 11
    q.bike[7].value.mm = 6
    q.bike[7].value.yyyy = 1987

    q.bike[8].value = 'Female'
    q.bike[9].value = 'No'
    q.bike[10].value = 'No'
    q.bike[11].value = 'No'

    q.bike[12].value.full_name = 'Solomon'
    q.bike[12].value.last_name = 'Mudryi'

    q.bike[13].value.address = 'Shevchenko, 55'
    q.bike[13].value.unit = '5555'
    q.bike[13].value.apt = 'apt bike ...'
    q.bike[13].value.city = 'Berdychiv 5'
    q.bike[13].value.state = 'AZ'
    q.bike[13].value.zip = '55555'

    q.bike[14].value = '!favorstreet21@gmail.com'
    q.bike[15].value = '22334400'
}
const renters = () => {
    q.renters[0].value = 'Duplex'
    q.renters[1].value = 'Yes'
    q.renters[2].value = 'AMICA'
    q.renters[3].value = '$70,000'

    q.renters[4].value.dd = 16
    q.renters[4].value.mm = 9
    q.renters[4].value.yyyy = 1998

    q.renters[5].value = 'Male'
    q.renters[6].value = 'No'
    q.renters[7].value = 'Yes'

    q.renters[8].value.full_name = 'Timofey'
    q.renters[8].value.last_name = 'Silnik'

    q.renters[9].value.address = 'Shevchenko, 1dfr'
    q.renters[9].value.unit = '13579'
    q.renters[9].value.city = 'Berdychiv &&&'
    q.renters[9].value.state = 'AZ'
    q.renters[9].value.zip = '4321'

    q.renters[10].value = 'TTttreet21@gmail.com'
    q.renters[11].value = '2231111155'
}


// auto()
// home()
life()
// health()
// medicare()
// commerc  ial()
// bike()
// renters()

export default q
