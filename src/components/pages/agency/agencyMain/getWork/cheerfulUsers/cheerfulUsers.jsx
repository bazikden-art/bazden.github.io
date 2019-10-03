import React from 'react'

import CheerfulUser from "./cheerfulUser/cheerfulUser"


// const users = [
//     {
//         img:noah,
//         name:'Noah',
//         position:'Leading specialist of the Control Department',
//         email:'noah.controldepartment@gmail.com  ',
//         phone:'+38 (050) 678 03 24'
//     },
//     {
//         img:adolph,
//         name:'Adolph Blaine Charles David Earl ',
//         position:'The contextual advertising specialist',
//         email:'adolph.blainecharles-davidearl@example.com',
//         phone:'+38 (095) 556 08 45'
//     },
//     {
//         img:liam,
//         name:'Liamgrievescasey Smith Wiam',
//         position:'Lead designer',
//         email:'liamgrievescasey@example.com',
//         phone:'+38 (050) 273 93 32'
//     },
//     {
//         img:elizabeth,
//         name:'Elizabeth',
//         position:'Frontend developer',
//         email:'elisabet.frontend@gmail.com',
//         phone:'+38 (095) 924 66 37'
//     },
//     {
//         img:alexander,
//         name:'Alexander',
//         position:'Backend developer',
//         email:'alexander.backend@gmail.com',
//         phone:'+38 (050) 789 24 09'
//     },
//     {
//         img:mason,
//         name:'Mason',
//         position:'QA',
//         email:'mason.qa@gmail.com',
//         phone:'+38 (095) 283 27 00'
//     }
//
// ]

const CheerfulUsers = ({users}) =>{
         return (
            <div className='cheerfulUsers'>
                <h2>Our cheerful users</h2>
                <h4>Attention! Sorting users by registration date</h4>
                <div className='cheerfulUsersBlock'>
                    {
                        users && users.map((user,i) => (

                            <CheerfulUser
                                key={user.email+user.name}
                                i={i}
                                img={user.photo}
                                name = {user.name}
                                position={user.position}
                                email={user.email}
                                phone={user.phone}
                            />
                        ))
                    }
                </div>

                <button  className='cheerfulUsersBtn'>Show more</button>
            </div>
        );

}

export default CheerfulUsers;