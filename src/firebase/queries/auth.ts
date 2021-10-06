import firebase from 'gatsby-plugin-firebase';

export const auth = () => firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const login = (email, password) => auth().signInWithEmailAndPassword(email, password);

export const register = (email, password) => auth().createUserWithEmailAndPassword(email, password);

export const forgot = (email) => auth().sendPasswordResetEmail(email);

export const getToken = () => {
  const user = auth().currentUser;
  return user?.getIdToken();
};

export const logout = () => firebase.auth().signOut();

export const signInWithGoogle = () => auth().signInWithPopup(googleProvider);
