import firebase from 'gatsby-plugin-firebase';
import { SCHEDULE } from '../collections';

export const getSchedule = () => firebase.firestore().collection(SCHEDULE);
