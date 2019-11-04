import { useState, useEffect } from 'react';
import { FIREBASE, FIREBASE_USER } from '../index';

/**
 * useAuth checks the authentication of the user and provides a loading state for it.
 * 
 * Mainly used within the ContentEditor component for logging the user in to edit the component.
 * 
 * Last Modified
 * William Kwok
 * June 17, 2019
 */
export const useAuth = (firebase: FIREBASE | null, setUserLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
	const [user, setUser] = useState<FIREBASE_USER | null>(null);

	useEffect(() => {
		if (!firebase) {
			return;
		}
		const provider = new firebase.auth.GoogleAuthProvider();
		return firebase.auth().onAuthStateChanged((user: any) => {
			if (user) {
				setUser(user);
				setUserLoading(false);
			} else {
				try {
					firebase.auth().signInWithPopup(provider).then((result: any) => {
						const user = result.user;
						setUser(user);
					});
				} catch (error) {
					console.log(error);
				}
			}
		});
	}, [setUserLoading, firebase]);

	return user;
}