import React from 'react'
import { Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));

const CreateRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/*" element={<>not Found</>} />
        </Routes>
    )
}

export default CreateRoutes