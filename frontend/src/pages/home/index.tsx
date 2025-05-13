import type React from "react";
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

type PromoPageProps={

}

const PromoPage:React.FunctionComponent<PromoPageProps> = () => { 
    return ( 
        <>
            <nav> 
                <h1>Doctorator-generator</h1>
                <div>
                    <Button>
                        <Link
                            to={{
                                pathname:'/create-valid'
                            }}
                        />
                    </Button>
                    <Button>
                    </Button>
                </div>
            </nav>
        </>
    )
}

export default PromoPage