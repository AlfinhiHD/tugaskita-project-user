import { useState } from 'react';

const useProfilSaya = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    points: 1500,
    completedTasks: 25,
    photo: '/assets/images/default-image.jpg',
  });

  const [isChangingPassword, setIsChangingPassword] = useState(false);

  return {
    user,
    isChangingPassword,
    setIsChangingPassword,
  };
};

export default useProfilSaya;