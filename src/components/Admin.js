import React, { useEffect, useState } from 'react';
import "../App.css";
import db, { auth } from "./firebase";
function Admin() {
    const [messages, setMessages] = useState([]);
    const [loggedin, setLoggedin] = useState(false);
    const [email, setEmail] = useState("");
    const [passworsd, setPassworsd] = useState("");
    const [isWrongCrenditials, setIsWrongCrenditials] = useState(false)
    useEffect(() => {
        db.collection('FORM_SUBMISSIONS').onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })
    }, []);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLoggedin(true)
            }
            else {
                setLoggedin(false);
            }
        })
    })
    const validateUser = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, passworsd).catch(() => {
            setIsWrongCrenditials(true);
            setTimeout(() => {
                setIsWrongCrenditials(false)
            }, 5000);
        }
        );
    }
    const logout = () => {
        auth.signOut();
    }
    return (
        <>
            {
                !loggedin && (<>
                    <div className='flex'>
                        <form>
                            {isWrongCrenditials && (
                                <h2 style={{ color: "red" }}>The email id or password is wrong</h2>
                            )}
                            <label htmlFor="email">Emial Id</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="password">Passsword</label>
                            <input type="password" value={passworsd} onChange={(e) => setPassworsd(e.target.value)} />
                            <button type='submit' onClick={validateUser}>
                                Login
                            </button>
                        </form>
                    </div>
                </>
                )
            }



            {loggedin && (
                <>
                    <button className='logout' onClick={logout}>Log out</button>

                    <div className='AContainer'>
                        {
                            messages && messages.map((el) => (
                                <div className='message-card'>
                                    Name:{el.data.name}
                                    <br />
                                    email:{el.data.email}
                                    <br />
                                    Message:{el.data.message}
                                </div>
                            ))
                        }
                    </div>
                </>)
            }
        </>
    )
}

export default Admin