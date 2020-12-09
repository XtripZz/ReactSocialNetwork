import React from 'react'
import Preloader from "../components/MainContainer/Friends/SearchUsers/Users/Preloader/Preloader";

export const withSuspense = Component => {
    return props => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </React.Suspense>
    }
}