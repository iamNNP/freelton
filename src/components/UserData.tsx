import { useTelegram } from '../hooks/useTelegram';

export const UserData = () => {
  const { user } = useTelegram();
  return (
    <div>
        {user ? (
          <div>
            <div>{ user.id }</div>
            <div>{ user.first_name }</div>
            <div>{ user.last_name }</div>
            <div>{ user.username }</div>
            <div>{ user.language_code }</div>
          </div>
        ) : (
          <div>Unable to get user data</div>
        )}
    </div>
  );
}

