import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAuqdy-GedYjCaz5mFgIktlMhHymW-cXik',
	authDomain: 'disney-plus-2a96b.firebaseapp.com',
	projectId: 'disney-plus-2a96b',
	storageBucket: 'disney-plus-2a96b.appspot.com',
	messagingSenderId: '120594635500',
	appId: '1:120594635500:web:15c0c30bde1171750623c9',
	measurementId: 'G-NH2TWW4N9J',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
/* import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY',
	authDomain: 'disneyplus-clone-a33d5.firebaseapp.com',
	projectId: 'disneyplus-clone-a33d5',
	storageBucket: 'disneyplus-clone-a33d5.appspot.com',
	messagingSenderId: '37918794208',
	appId: '1:37918794208:web:dbe9842dfe1dda522a4b85',
	measurementId: 'G-DRVLJKWRWG',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
 */
