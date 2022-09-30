import { useEffect } from "react";
import { useRouter } from "next/router";
const ErrorPage = () => {
    const route = useRouter();

    useEffect(() => {
        setTimeout(() => {
            route.push("/#about/");
        }, 3000);
    }, [])
    return ( 
        <div className="bg-gray-900 flex flex-col relative h-screen space-y-10 items-center justify-center" >
            
            <h1 className="text-7xl text-blue-800">Page Not Found 🙂</h1>
            <h2 className="text-4xl text-center text-red-800">Revoir votre url</h2>
        </div>
     );
}

export default ErrorPage;