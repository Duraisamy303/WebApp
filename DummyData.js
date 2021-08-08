import image from '../pages/Images/logo2.jpg'
import Logo1 from '../pages/Images/IMG-20190208-WA0011.jpg'
import Logo2 from '../pages/Images/IMG-20200330-WA0030.jpg'
import Logo3 from '../pages/Images/IMG-20181025-WA0007.jpg'
import Logo4 from '../pages/Images/IMG_20200309_142233.jpg'

export const Users =[

    {
        id:1,
        profilePicture:"../pages/Images/IMG-20190208-WA0011.jpg",
        username:"Durai"
    },
    {
        id:2,
        profilePicture:{Logo1},
        username:"Ashok"
    },
    {
        id:3,
        profilePicture:{Logo2},
        username:"Ajith"
    },
    {
        id:4,
        profilePicture:{Logo3},
        username:"Ramji"
    },
    {
        id:5,
        profilePicture:{Logo4},
        username:"Dinesh"
    },
];
export const Posts =[
    {
        id:1,
        desc:"Love for All,Hatred For None",
        photo:'../pages/Images/IMG_20200309_142233.jpg',
        date:"15 mins ago",
        userId:1,
        like:32,
        comment:11,
    },
    {
    id:2,
    desc:"Love for All",
    photo:{Logo1},
    date:"25 mins ago",
    userId:2,
    like:2,
    comment:9
},
{
    id:3,
    photo:{Logo2},
    date:"45 mins ago",
    userId:3,
    like:2,
    comment:10
},
]