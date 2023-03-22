import React from 'react'
import {auth} from "../components/Firebase"
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function Home(){
    const [userName, setUserName] = useState("")
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                setUserName(user.displayName)
            }else{
                setUserName("")
            }
        })
    }, [])

    return (
        <div className='text-center mt-10'>
            Welcome - {userName}
        </div>
    )
}