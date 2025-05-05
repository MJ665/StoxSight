import { getServerSession } from "next-auth/next";
import { NEXT_AUTH } from "./../lib/auth";
export async function GET (){
    try {
        const session = await getServerSession ( NEXT_AUTH)
        return new Response(JSON.stringify(session),{status:200})
    }catch(error){
        return new Response (JSON.stringify({errormsg :"failed to get session in api / user/route.ts ", error :{error}}),{status:500})
    }
}


