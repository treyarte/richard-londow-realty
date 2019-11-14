import firebase from "firebase/app";
import "firebase/firestore";

const config = 
    {
        apiKey: "AIzaSyAY1pMzv7x7NUbqRz-htJWyKNJ56L07l38",
        authDomain: "richard-londow-realty.firebaseapp.com",
        databaseURL: "https://richard-londow-realty.firebaseio.com",
        projectId: "richard-londow-realty",
        storageBucket: "richard-londow-realty.appspot.com",
        messagingSenderId: "221099592664",
        appId: "1:221099592664:web:458dcc56cd6c2170ae80ad"
    };


firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const convertCollectionsSnapshotToMap = (collections) =>{
    const transformedCollection = collections.docs.map(doc =>{
        const {address, imageUrls, rooms, title, status, size} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            address,
            imageUrls,
            rooms,
            title,
            status,
            size
        }
    });

    return transformedCollection;
    // return transformedCollection.reduce((accumulator, collection) => {
    //     accumulator[collection.title.toLowerCase()] = collection;
    //     return accumulator;
    // }, {});
}