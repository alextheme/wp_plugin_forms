import questions from './questions.js'

const q = {...questions}

const auto = () => {
    q.auto[0].value.auto_year = 1999
    q.auto[0].value.auto_make = 'Audi'
    q.auto[0].value.auto_model = 'A3'

    q.auto[1].value = 'Pleasure'
    q.auto[2].value = 20
    q.auto[3].value = 'Finance'
    q.auto[4].value = 'Full Coverage'
    q.auto[5].value = '$1000'
    q.auto[6].value = '$1000'
    q.auto[7].value = 'No'

    // q.auto[8].value.auto_year = 1999
    // q.auto[8].value.auto_make = 'Audi'
    // q.auto[8].value.auto_model = 'A3'
    //
    // q.auto[9].value = 'Pleasure'
    // q.auto[10].value = 20
    // q.auto[11].value = 'Finance'
    // q.auto[12].value = 'Full Coverage'

    q.auto[13].value.full_name = 'Oleksandr'
    q.auto[13].value.last_name = 'Borymskyi'

    q.auto[14].value.mm = 5
    q.auto[14].value.dd = 25
    q.auto[14].value.yyyy = 2000

    q.auto[15].value = 'Male'
    q.auto[16].value = 'Yes'
    q.auto[17].value = 'Some College'

    q.auto[18].value = 'Architect'
    q.auto[19].value = 'Good (600-700)'
    q.auto[20].value = 'Permit'
    q.auto[21].value = 'No'
    q.auto[22].value = 'No'
    q.auto[23].value = 'Yes'

    q.auto[24].value = 'Yes'
    q.auto[25].value = 'Basic'
    q.auto[26].value = 'No'
    q.auto[27].value = 'Own'
    q.auto[28].value = 'Townhome'

    q.auto[29].value.address = 'Shevchenko, 45, Berdychiv'
    q.auto[29].value.unit = '1234'
    q.auto[29].value.apt = ''
    q.auto[29].value.state = 'MN'
    q.auto[29].value.zip = '4321'
}
const home = () => {
    q.home[0].value = 'Townhome'

    q.home[1].value.address = 'Shevchenko, 45, Berdychiv'
    q.home[1].value.unit = '1234'
    q.home[1].value.apt = ''
    q.home[1].value.state = 'MN'
    q.home[1].value.zip = '4321'

    q.home[2].value = 2000
    q.home[3].value = 3
    q.home[4].value = 3
    q.home[5].value = 4
    q.home[6].value = 6
    q.home[7].value = 2005

    q.home[8].value.full_name = 'Bob'
    q.home[8].value.last_name = 'Grid'

    q.home[9].value.dd = 13
    q.home[9].value.mm = 8
    q.home[9].value.yyyy = 1996

    q.home[10].value = 'Female'
    q.home[11].value = 'Yes'
    q.home[12].value = 'Masters Degree'
    q.home[13].value = 'Clergy'
    q.home[14].value = 'Poor (300-400)'
    // q.home[15].value = 'Yes'
    // q.home[16].value = 'AMICA'
    // q.home[17].value = '2-3 years'
    // q.home[18].value = '4-6 Month'
    // q.home[19].value = 'Что то уту'
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

    q.life[10].value.address = 'Shevchenko, 231'
    q.life[10].value.unit = '111'
    q.life[10].value.city = 'Berdychiv'
    q.life[10].value.state = 'OH'
    q.life[10].value.zip = '222'

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
    q.bike[0].value = 2000
    q.bike[1].value = 'Kawasaki'
    q.bike[2].value = 'EN650'
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
// life()
// health()
// medicare()
// commercial()
// bike()
// renters()

export default q
