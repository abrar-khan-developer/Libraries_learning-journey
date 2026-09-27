import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(){
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ req , token }) => {
                const { pathname } = req.nextUrl;

                if(pathname == '/' || pathname == '/login'){
                    return true;
                }

                return !!token;
            },
            
        }
    }
);

matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]