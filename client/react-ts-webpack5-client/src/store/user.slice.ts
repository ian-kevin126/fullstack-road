import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { LoginParams, Role } from '@/interface/user/login';
import { UserState } from '@/interface/user/user';
import { getGlobalState } from '@/utils/getGlobalState';
import { apiLogin, apiLogout } from '@/api/user.api';

const initialState: UserState = {
  ...getGlobalState(),
  noticeCount: 0,
  // locale: (localStorage.getItem('locale')! || 'en_US') as unknown as Locale,
  locale: 'en_US',
  newUser: JSON.parse(localStorage.getItem('newUser')!) ?? true,
  logged: localStorage.getItem('t') ? true : false,
  menuList: [],
  username: localStorage.getItem('username') || '',
  role: (localStorage.getItem('username') || '') as Role,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserItem(state, action: PayloadAction<Partial<UserState>>) {
      const { username } = action.payload;

      if (username !== state.username) {
        localStorage.setItem('username', action.payload.username || '');
      }

      Object.assign(state, action.payload);
    },
  },
});

export const { setUserItem } = userSlice.actions;

export default userSlice.reducer;

export const loginAsync = (payload: LoginParams) => {
  return async (dispatch: Dispatch): Promise<boolean> => {
    const { result, status } = await apiLogin(payload);
    console.log(result, status);
    if (status) {
      localStorage.setItem('t', result.token);
      localStorage.setItem('username', result.username);
      dispatch(
        setUserItem({
          logged: true,
          username: result.username,
        }),
      );
      return true;
    }
    return false;
  };
};

export const logoutAsync = () => {
  return async (dispatch: Dispatch) => {
    // const { status } = await apiLogout({ token: localStorage.getItem('t')! });
    const { status } = await apiLogout({ token: localStorage.getItem('t')! });
    if (status) {
      localStorage.clear();
      dispatch(
        setUserItem({
          logged: false,
        }),
      );
      return true;
    }
    return false;
  };
};
