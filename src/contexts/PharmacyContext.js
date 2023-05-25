import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import {
    // collection, 
    deleteDoc,
    // addDoc, 
    // updateDoc, 
    doc
} from "firebase/firestore";
import {
    onValue,
    ref,
    update,
    // set,
    getDatabase

} from "firebase/database"
import { database } from '../firebase'
const PharmacyContext = createContext();

export function usePharmacy() {
    return useContext(PharmacyContext);
}

export function PharmacyProvider({ children }) {
    const [pharmacies, setPharmacies] = useState([]);

    // fetch pharmacy list data from backend and set it to pharmacyList state
    useEffect(() => {
        const fetchData = async () => {
            // try {
            //     // const snapshot = await getDocs(collection(db, 'pharmacies'));
            //     // const updatedPharmacies = snapshot.docs.map((doc) => ({
            //     //     id: doc.id,
            //     //     ...doc.data(),
            //     // }));
            //     const dbRef = ref(database);
            //     // let allData = [];

            //     onValue(dbRef, (snapshot) => {
            //         // snapshot.forEach((childSnapshot) => {
            //         //     // const childKey = childSnapshot.key;
            //         //     const childData = childSnapshot.val();
            //         //     allData.push(childData)
            //         setPharmacies(snapshot.val());
            //         // });
            //     }, {
            //         onlyOnce: false
            //     });
            // } catch (error) {
            //     console.error('Error fetching data:', error);
            // }
            // const dbRef = ref(database);
            // get(child(dbRef)).then((snapshot) => {
            //     if (snapshot.exists()) {
            //         console.log('data ==>', snapshot.val());
            //         setPharmacies(snapshot.val());
            //     } else {
            //         console.log("No data available");
            //     }
            // }).catch((error) => {
            //     console.error(error);
            // });
            const db = getDatabase();
            // let allData = []
            const starCountRef = ref(db);
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                // allData.push(data)
                setPharmacies(data);
            });
        };

        fetchData();
    }, []);

    // add newPharmacy to the pharmacyList state and update it to the backend
    const addPharmacy = async (newPharmacy) => {
        try {
            // await addDoc(collection(db, 'pharmacies'), newPharmacy)

        } catch (error) {
            console.log(error);
        }
    };

    // find the pharmacy in the pharmacyList by id and update its details with updatedPharmacy
    // then update the pharmacyList state and also update the changes to the backend
    const updatePharmacy = async (id, data) => {
        try {
            //     //     // await updateDoc(collection(db, 'pharmacies', id), updatedPharmacy)
            //     //     // await db.collection('pharmacies').doc(id).update(updatedPharmacy);
            //     //     // Get a key for a new Post.
            // const db = getDatabase();
            let editedId = parseInt(id) - 1
            console.log("i pass update function check database")
            return update(ref(database, editedId.toString()), data)
                .then(() => { console.log('data saved successfuly') })
                .catch((err) => console.log('err', err));



        } catch (error) {
            console.log(error);
        }

    };

    // find the pharmacy in the pharmacyList by id and delete it
    // then update the pharmacyList state and also delete the pharmacy from the backend
    const deletePharmacy = async (id) => {
        try {
            const del_ref = doc(db, 'pharmacies', id)
            await deleteDoc(del_ref)
            // await db.collection('pharmacies').doc(id).delete();
        } catch (error) {
            console.log(error);
        }
    };

    const values = {
        pharmacies,
        addPharmacy,
        updatePharmacy,
        deletePharmacy,
    };

    return (
        <PharmacyContext.Provider value={values}>
            {children}
        </PharmacyContext.Provider>
    );
}
