import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import SearchBar from '@/Components/SearchBar';


export default function Guest({ children,props,auth, }) {

    const {canLogin, canRegister,allUsers} = props;

    return (
        <div>                          
                    <Navbar canLogin={canLogin} canRegister={canRegister} auth={auth}  /> 
                    {/* <SearchBar placeholder="Enter a Name..." data={allUsers}/> */}
                    
                    {children}
           
                    <Footer />
                    
        </div>
    );
}