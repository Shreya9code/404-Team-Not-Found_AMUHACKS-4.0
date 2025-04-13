import { db } from "@/configs/FirebaseConfig"; // ✅ Correct path to db
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  //const { userEmail, userName } = await req.json();
  try {
    const { userEmail, userName } = await req.json();
    console.log("🔥 User data received:", userEmail, userName);
    if (!userEmail || !userName) {
        return NextResponse.json(
          { error: "Missing userEmail or userName" },
          { status: 400 }
        );
      }

    const docRef = doc(db, "users", userEmail);
 
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("✅user exists");
      return NextResponse.json(docSnap.data());
    } 
      //insert new user
      const data = {
        name: userName,
        email: userEmail,
        credits: 50,
      };
      /*await setDoc(doc, "users", userEmail, {
        ...data,
      });*/await setDoc(docRef, data); 

      console.log("✅ New user created");
      return NextResponse.json(data);
    
  } catch (error) {
    console.log("❌ Server error:",error);
    return NextResponse.json(
        { error: "Internal server error", details: error.message },
        { status: 500 }
      );
  }
}
