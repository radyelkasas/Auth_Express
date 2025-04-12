interface LoggedInUser {
  email: string;
  password: string;
}

interface RegisteredUser {
  email: string;
  password: string;
  name: string;
}

export class AuthServices {
  register = async (userData: RegisteredUser) => {
    return { ...userData };
  };

  login = async (userData: LoggedInUser) => {
    return { ...userData };
  };
}
