export interface userProps {
  _id: string | undefined;
  imageId: string | undefined;
  name: string | undefined;
  email: string | undefined;
  messages: any[];
}

export interface ChatListProps {
  reverse(): any;
  filter(arg0: (arg: any) => any): any;
  map(arg0: (user: any) => React.JSX.Element): React.ReactNode;
  _id: string | undefined;
  imageId: string | undefined;
  name: string | undefined;
  email: string | undefined;
}

export interface selectedUserState {
  selectedUser: undefined | any;
  setSelectedUser: (user: any) => void;
}
export interface userState {
  myUser: undefined | any;
  setUser: (user: any) => void;
}
interface AvatarProps {
  avatarId: string;
  setAvatarId: (id: string) => void;
}
