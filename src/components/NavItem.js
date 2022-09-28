import {FaHome,FaBookReader,FaSourcetree,FaServicestack,FaUserCircle} from 'react-icons/fa'

 export const navItem =[
    {
      id:1,
      title:"Home",
      icon:<FaHome className='nav-icons' />,
      path:"/",
      cName:"home"
    },
    {
        id:2,
        title:"About Us",
        icon:<FaUserCircle className='nav-icons'/>,
        path:"/about-us",
        cName:"aboutus"
      },
      {
        id:3,
        title:"Courses",
        icon:<FaSourcetree className='nav-icons'/>,
        path:"/courses",
        cName:"courses"
        
      },
      {
        id:4,
        title:"Study Material",
        icon:<FaBookReader className='nav-icons'/>,
        path:"/study-material",
        cName:"studymaterial"
      },
      {
        id:5,
        title:"Contact Us",
        icon:<FaServicestack className='nav-icons'/>,
        path:"/contact-us",
        cName:"contactus"
      },
];

export const studyMaterialItem =[
  {
    id:1,
    title:"Upsc",
    path:"/upsc",
    cName:"upsc"
  },
  {
    id:1,
    title:"Mpsc",
    path:"/mpsc",
    cName:"mpsc"
  }
]