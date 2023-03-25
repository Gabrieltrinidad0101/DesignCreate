const Auth = (name: string, password: string): void => {
  if (name === '' || password === '') {
    alert('All the inputs are required')
  }
}

export default Auth
