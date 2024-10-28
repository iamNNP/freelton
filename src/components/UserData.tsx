import { useTelegram } from '../hooks/useTelegram';

export const UserData = () => {
  const { user } = useTelegram();
  return (
    <div className='user__data'>
        {user ? (
          <div>
            <h3>
              Avatar
            </h3>
            <div>
              <img src={ user.photo_url } alt="User avatar" />
            </div>
            <h3>
              Telegram Id
            </h3>
            <div>
              { user.id }
            </div>
            <h3>
              First name
            </h3>
            <div>
              { user.first_name }
            </div>
            <h3>
              Last name
            </h3>
            <div>
              { user.last_name }
            </div>
            <h3>
              Username
            </h3>
            <div>
              @{ user.username }
            </div>
            <h3>
              Language code
            </h3>
            <div>
              { user.language_code }
            </div>
          </div>
        ) : (
          <div>Unable to get user data</div>
        )}
    </div>
  );
}

