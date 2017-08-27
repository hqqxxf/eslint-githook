// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'

const config = {
  databaseURL: 'https://vue-h-ae754.firebaseio.com/'
}

firebase.initializeApp(config)

// Get a reference to the database service
const database = firebase.database()

function getUsersData () {
  const users = database.ref('users')
  return new Promise((resolve, reject) => {
    users.on('value', data => {
      resolve(data.val())
    })
  })
}

getUsersData().then(data => {
  console.log(data)
})

// function writeUserData (userId, name, email, imageUrl) {
//   const users = getUsersData()
//   users.then(data => {
//     if (!data) data = []
//     const arr = data.concat({
//       userId,
//       name,
//       email,
//       imageUrl
//     })
//     firebase.database().ref('users').set(arr)
//   })
// }

// writeUserData(1, 'hqq', 'hqq@58.com', '//pic.58.com')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
