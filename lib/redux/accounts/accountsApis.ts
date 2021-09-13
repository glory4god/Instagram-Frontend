export function getAccountsIds() {
  return Object.keys(accountNenuBar);
}
export function getAccountsValues() {
  return Object.values(accountNenuBar);
}

const accountNenuBar = {
  edit: '프로필 편집',
  password_change: '비밀번호 변경',
  manage_access: '앱 및 웹사이트',
};
