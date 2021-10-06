import firebase from 'gatsby-plugin-firebase';
import { USERS } from '../collections';

export const getUsers = () => firebase.firestore().collection(USERS);

export const getUserByEmail = (email) => firebase.firestore().collection(USERS).where('email', '==', email);

export const createUser = (user) => firebase.firestore().collection(USERS).add(user);

export const updateUser = (id, user) => firebase.firestore().collection(USERS).doc(id).update(user);
