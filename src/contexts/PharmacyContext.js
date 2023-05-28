import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import {
    // collection, 
    // deleteDoc,
    // addDoc, 
    // updateDoc, 
    doc
} from "firebase/firestore";
import {
    onValue,
    ref,
    update,
    // set,
    // child,
    // push,
    getDatabase,
    remove

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
            try {

                const db = getDatabase();
                // let allData = []
                const dbRef = ref(db, "pharmacies");
                onValue(dbRef, (snapshot) => {
                    const data = snapshot.val();
                    // allData.push(data)
                    setPharmacies(data);
                });
            } catch (error) {
                console.log("err ==> ", error)
            }
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

            let editedId = parseInt(id) - 1

            return update(ref(database, `/pharmacies/${editedId}`), data)
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
            let editedId = parseInt(id) - 1
            const del_ref = doc(db, `/pharmacies/${editedId}`)
            await remove(del_ref)
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
