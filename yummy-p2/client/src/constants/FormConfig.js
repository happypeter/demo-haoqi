export const signupConfig = {
  fields: [
    {
      name: 'username',
      type: 'text'
    },
    {
      name: 'password',
      type: 'password'
    },
    {
      name: 'passwordConfirm',
      type: 'password'
    }
  ],
  options: {
    text: '已有账号，直接登录',
    link: '/login',
    title: '注册'
  }
}

export const loginConfig = {
  fields: [
    {
      name: 'username',
      type: 'text'
    },
    {
      name: 'password',
      type: 'password'
    }
  ],
  options: {
    text: '没有账号，请先注册',
    link: '/signup',
    title: '登录'
  }
}
