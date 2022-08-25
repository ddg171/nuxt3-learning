export const useAuthState = () => {
  return useState('auth', () => { return { user: 'hoge' } })
}
