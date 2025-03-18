/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import TweetsController from '#controllers/tweets_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async ({ view }) => {
  const controller = new TweetsController()
  return controller.index({ view })
})
router.get('/profile', async ({ view }) => {
  const controller = new UsersController()
  return controller.show({ view })
})
