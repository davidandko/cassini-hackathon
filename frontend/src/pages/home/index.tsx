import type React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

type PromoPageProps={

}

const PromoPage:React.FunctionComponent<PromoPageProps> = () => { 
    return ( 
        <>
            <nav className="flex justify-between "> 
                <h1 style={{color:'#646cff'}}>Doctorator-generator</h1>
                <div className="flex gap-3 items-center text-xl">
                    <Button asChild variant="outline" className="">
                        <Link
                            to={{
                                pathname:"/create-account"
                            }}
                        >
                            Register
                        </Link>
                    </Button>
                    <Button asChild variant='outline'>
                        <Link 
                            to={{
                                pathname:'/login'
                            }}
                        >
                            Login 
                        </Link>
                    </Button>
                </div>
            </nav>
            <main> 
                
            </main>
        </>
    )
}

export default PromoPage