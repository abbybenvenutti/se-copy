const {db} = require('./server/db')
const {green, red} = require('chalk')
const Campus = require('./server/db/models/Campus')
const Student = require('./server/db/models/Student')

const seed = async () => {
  await db.sync({force: true})

const schools = [{
   name: 'Hunter College',
   imageUrl: 'http://www.hunter.cuny.edu/facilities/repository/images/hunter-buildings/HU_Thomas%20Hunter%20Hall_6_jpg.jpg',
   address: '695 Park Avenue New York, NY',
   description: 'No decore aeterno pro, quot maiestatis eu sit. Salutandi sententiae reformidans an his, aperiam nostrud no pro, at accumsan rationibus deterruisset duo. Malorum tacimates duo cu, no pri quas mediocritatem. In his ferri eligendi recteque, his ut commune detraxit tacimates. Eu has labitur molestiae. Pertinax mandamus per ea. Cu summo maiestatis est, doctus postulant erroribus eam no, ex case eripuit intellegat est.'
 }, {name: 'UMass Amherst', imageUrl: 'https://www.umass.edu/gateway/sites/default/files/umass_amherst_dubois_library_campus_center.jpg', address: '300 Massachussetts Avenue Amherst, MA', description: 'No decore aeterno pro, quot maiestatis eu sit. Salutandi sententiae reformidans an his, aperiam nostrud no pro, at accumsan rationibus deterruisset duo. Malorum tacimates duo cu, no pri quas mediocritatem. In his ferri eligendi recteque, his ut commune detraxit tacimates. Eu has labitur molestiae. Pertinax mandamus per ea. Cu summo maiestatis est, doctus postulant erroribus eam no, ex case eripuit intellegat est.'}, {name: 'UPenn', imageUrl: 'https://oneclassblog.com/wp-content/uploads/2017/09/upenn.jpg', address: '3400 Spruce Street Philadelphia, PA', description: 'No decore aeterno pro, quot maiestatis eu sit. Salutandi sententiae reformidans an his, aperiam nostrud no pro, at accumsan rationibus deterruisset duo. Malorum tacimates duo cu, no pri quas mediocritatem. In his ferri eligendi recteque, his ut commune detraxit tacimates. Eu has labitur molestiae. Pertinax mandamus per ea. Cu summo maiestatis est, doctus postulant erroribus eam no, ex case eripuit intellegat est.'}]

 const peeps = [{
   firstName: 'Abby',
   lastName: 'Benvenutti',
   email: 'abbybenvenutti@gmail.com',
   imageUrl: 'https://3.bp.blogspot.com/-IjFzKQLhs7g/Wtp-QM0xaUI/AAAAAAAAWM4/hsI1F0fHnK04veI5jx6poMEzSe8UCwr3gCLcBGAs/s1600/bow-tie-smiley.png',
   gpa: '4.00',
   campusId: 1}, {firstName: 'Keyairra', lastName: 'Wright', email: 'keyairra@luvtolearn.com', imageUrl: 'https://i.pinimg.com/736x/e1/9a/62/e19a628908e921664dd0fe79e26f1125--symbols-emoticons-emoji-emoticons.jpg', gpa: '3.99', campusId: 2}, {firstName: 'Jordan', lastName: 'Davis', email: 'jbone@midwestrocks.net', imageUrl: 'http://www.smileystore.com/Merchant2/graphics/00000001/12103.jpg', gpa: '3.76', campusId: 3}]

   Promise.all(schools.map(school =>
     Campus.create(school))).then(() =>
    Promise.all(peeps.map(peep =>
  Student.create(peep))))

 await Campus.sync()
 await Student.sync()

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
