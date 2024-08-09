import React, {Suspense} from "react";
import {BrowserRouter, useRoutes} from "react-router-dom";
import routesConfig from "./routes";

// 注释这个方法，就能编译成功
/*
function getRoutes(routes){
    return routes.map(({...route}) => {
        if (typeof route.element ==='string')
        {
            const path = route.element;
            const Component=React.lazy(() => import(`@/page/${path}`));
            delete route.element;
            const result={...route, element:<Suspense fallback={<div>loading...</div>}><Component/></Suspense>};
            const children=result.children;
            if (children){
                result.children=getRoutes(children);
            }
            return result;
        }else{
            return route;
        }

    });
}
*/


export default ()=>{
    return <BrowserRouter basename={''}>

    </BrowserRouter>
}
