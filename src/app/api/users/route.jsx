import { doc } from "firebase/firestore"
import { NextResponse } from "next/server"
import { getDoc, setDoc } from "firebase/firestore";

export async function POST(req) {
    const {userEmail,userName}=await req.json()
    try {
        //if user exists
        const docRef=doc(db,'users',userEmail)
        const docSnap=await getDoc(docRef)
        if(docSnap.exists()){
            console.log("user exists")
            return NextResponse.json(docSnap.data())
        }else{
            //insert new user
            const data={
                name:userName,
                email:userEmail,
                credits:50
            }
            await setDoc(doc,"users",userEmail,{
                ...data
            })
            console.log("user created")
            return NextResponse.json(data)
        }
    } catch (error) {
        console.log(error)
    }
    
}