import { useTelegram } from '../hooks/useTelegram';

export const UserData = () => {
  const { user } = useTelegram();
  return (
    <div className='user__data'>
        {user && (
          <div>
            {/* <h3 className="user__data_element">
              Avatar
            </h3>
            <div className="user__data_element">
              <img src={ user.photo_url } alt="User avatar" />
            </div> */}
            <h3 className="user__data_element">
              Telegram Id
            </h3>
            <div className="user__data_element">
              { user.telegramUserId }
            </div>
            <h3 className="user__data_element">
              First name
            </h3>
            <div className="user__data_element">
              { user.firstName }
            </div>
            <h3 className="user__data_element">
              Last name
            </h3>
            <div className="user__data_element">
              { user.lastName }
            </div>
            <h3 className="user__data_element">
              Username
            </h3>
            <div className="user__data_element">
              @{ user.username }
            </div>
            <h3 className="user__data_element">
              Language code
            </h3>
            <div className="user__data_element">
              { user.languageCode }
            </div>
          </div>
        )}
    </div>
  );
}

