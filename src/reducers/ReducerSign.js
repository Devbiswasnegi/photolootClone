const initialState = {
  data: {
    email: '',
    password: '',
    log: false,
  },
  signupData: {
    name: '',
    username: '',
    signupEmail: '',
    signupPassword: '',
    check: false,
  },
  profile: {
    profileName: '',
    username: '',
    bio: '',
  },
  array: [],
};

export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN_EMAIL':
      return {
        ...state,
        data: action.payload,
      };

    case 'SIGNUP_EMAIL':
      return {
        ...state,
        signupData: action.payload,
      };

    case 'PROFILE':
      return {
        ...state,
        profile: action.payload,
      };

    case 'CHANGE_PASS':
      return {
        ...state,
        signupData: action.payload,
      };

    case 'DEACTIVATE':
      return {
        ...state,
        data: {
          email: '',
          password: '',
          log: false,
        },
        signupData: {
          name: '',
          username: '',
          signupEmail: '',
          signupPassword: '',
          check: false,
        },
        profile: {
          profileName: '',
          username: '',
          bio: '',
        },
        array: state.array,
      };

    case 'UNFOLLOW':
      return {
        ...state,
        array: state.array.filter((element, index) => index !== action.payload),
      };

    case 'FOLLOW':
      return {
        ...state,
        array: state.array.includes(action.payload)
          ? state.array
          : state.array.concat(action.payload),
      };

    default:
      return initialState;
  }
};
