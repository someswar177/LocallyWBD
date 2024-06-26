// import { useState } from 'react';
// import { Navbar } from './Navbar';
import { SellerServices } from "../pages/SellerServices"
// import { Layout } from './Layout';
import { AddService } from "../components/sellerServicesComponent/AddService"
// import { Footer } from './Footer';
import SellerProfile from "../pages/SellerProfile"
import SellerHistory from "../pages/SellerHistory"

export default [
    { path: "/seller/services", element: <SellerServices /> },
    { path: "/addservices", element: <AddService /> },
    { path: "/seller/history", element: <SellerHistory/>},
    { path: "/seller/profile", element: <SellerProfile /> }
]
