import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile'>
            <div className={'fon'}>
                <img src={'http://www.hqwallpapers.ru/wallpapers/nature/serye-tuchi.jpg'}/>
            </div>
            <div className={'logo'}>
                <img
                    src={'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}/>
            </div>
        </div>
    );
}

export default Profile;