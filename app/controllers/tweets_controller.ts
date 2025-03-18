

export default class TweetsController {
    public async index({view}){
        const tweets = [
            {
              id: 1,
              user: { username: 'jemikan', name: 'Jemi kan', avatar: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png' },
              content: 'Fragilisé par les prises successives de Goma et de Bukavu, le président congolais est en quête de nouveaux soutiens et mise désormais sur la pression diplomatique et sur un gouvernement d’union nationale pour se relancer.',
              image: 'https://s.rfi.fr/media/display/fb732b28-1005-11ea-a3b4-005056bf7c53/w:980/p:16x9/2012-11-30T160552Z_1631959184_GM1E8C1005E01_RTRMADP_3_CONGO-DEMOCRATIC-MUNITIONS_0.JPG'
            },
            {
              id: 2,
              user: { username: 'janedoe', name: 'Jane Doe', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrwMvUgClCnBNDMfiBcopM8BgT74epXtu0g&s' },
              content: 'un gros choc nous attend entre deuw grands clubs ',
              image: 'https://estaticos.esmadrid.com/cdn/farfuture/C6NRvlWKbqReaL-OHq9flHaAzqCeJFN2Y6kp8TIR1DI/mtime:1740138203/sites/default/files/eventos/eventos/real_madrid_-_atletico_de_madrid_uefa_champions_league.jpg'
            },
          ]
          return view.render('home',{tweets})
    }
}