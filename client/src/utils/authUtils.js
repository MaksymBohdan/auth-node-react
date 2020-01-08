const getAuthRoute = isRegistration => (isRegistration ? '/signup' : '/signin');

export { getAuthRoute };
