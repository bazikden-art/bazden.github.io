import React from 'react'
import ProfileForm from "../../../../forms/profile/profileForm";
import avatar from '../../images/avatar2.png'
import { Input } from '@material-ui/core'

const Profile = ({posts, addPost,profile}) => {
    const onFormSubmit = formData => {
        console.log(formData)
        addPost(formData.postMessage)

    }

    const onChangeInput = (e) =>{
        console.log(e.target)
        let formData = new FormData()
        formData.append('image',e.target.files[0])
        console.log (formData)
    }
    return (
        <div className='profile'>
            <ProfileForm onSubmit={onFormSubmit}/>
            <div className='main-social-img'></div>
            {
                profile && <div className='profile-avatar'>
                    <div className='profile-avatar-block'>
                        <img className='profile-avatar-img' src={profile.photos.small?profile.photos.small:avatar} alt=""/>
                        <Input onChange={onChangeInput}   type='file'/>

                    </div>
                    <div className='profile-avatar-info'>
                        <div>{profile.fullName}</div>
                        <div>{profile.aboutMe}</div>
                        <div>{profile.lookingForAJob && profile.lookingForAJobDescription}</div>
                        <div className='profile-avatar-contacts'>Contacts:
                            <div className='profile-avatar-contacts-socials'>
                                Facebook: {profile.contacts.facebook}<br/>
                                GitHub: {profile.contacts.github}<br/>
                            </div>


                        </div>


                        </div>
                    </div>

            }

            <h3><i>Posts</i></h3>
            {
                posts && posts.map(post => (
                    <div key={post}>
                        <div>Name : {post.name}</div>
                        <div>Post : {post.post}</div>
                    </div>
                ))
            }
        </div>
    )
}


export default Profile