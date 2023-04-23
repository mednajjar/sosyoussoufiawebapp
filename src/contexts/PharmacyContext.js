import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { getDocs, collection, deleteDoc, addDoc, updateDoc } from "firebase/firestore";

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
                const snapshot = await getDocs(collection(db, 'pharmacies'));
                const updatedPharmacies = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPharmacies(updatedPharmacies);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // add newPharmacy to the pharmacyList state and update it to the backend
    const addPharmacy = async (newPharmacy) => {
        try {
            await addDoc(collection(db, 'pharmacies'), newPharmacy)
            // await db.collection('pharmacies').add(newPharmacy);
        } catch (error) {
            console.log(error);
        }
    };

    // find the pharmacy in the pharmacyList by id and update its details with updatedPharmacy
    // then update the pharmacyList state and also update the changes to the backend
    const updatePharmacy = async (id, updatedPharmacy) => {
        try {
            await updateDoc(collection(db, 'pharmacies', id), updatedPharmacy)
            // await db.collection('pharmacies').doc(id).update(updatedPharmacy);
        } catch (error) {
            console.log(error);
        }
    };

    // find the pharmacy in the pharmacyList by id and delete it
    // then update the pharmacyList state and also delete the pharmacy from the backend
    const deletePharmacy = async (id) => {
        try {
            await deleteDoc(collection(db, 'pharmacies', id))
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
