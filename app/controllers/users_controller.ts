//import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
    public async show({ view, params }: HttpContextContract) {
        const profiles = {
          jemikan: {
            username: 'jemikan',
            bio: 'la vie est un combat',
            avatar: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png',
           // tweets: [
              //{ id: 1, content: 'Fragilisé par les prises successives de Goma et de Bukavu, le président congolais est en quête de nouveaux soutiens et mise désormais sur la pression diplomatique et sur un gouvernement d’union nationale pour se relancer.' },
           // ]
          },
          janedoe: {
            username: 'janedoe',
            bio: 'le prochain',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrwMvUgClCnBNDMfiBcopM8BgT74epXtu0g&s',
            // tweets: [
            //   { id: 1, content: 'un gros choc nous attend entre deuw grands clubs' },
            // ]
          }
        }
    
        
    
        return view.render('show/profiles', { profiles })
      }
}