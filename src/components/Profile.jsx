import React from "react";

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src="https://funik.ru/wp-content/uploads/2019/05/b9b57d4863b903af6a95.jpg" alt=""/>
            </div>
            <div className='user'>
                <img src="https://i007.fotocdn.net/s123/2950fc2e1fadccab/user_xl/2816616767.jpg" alt=""/>
                <div>
                    img descr11
                </div>
            </div>
            <div className='post'>
                <div className="postText">
                    my post
                </div>
                <div className='form'>
                    <textarea type="text" className='textField'></textarea>
                    <div className='buttonBlock'>
                        <input type="button" className='button' value='Send' />
                    </div>
                </div>
                <div className='post-list'>
                    <div className="postText">post 111111</div>
                    <div className="postText">post 222222</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
