import React from 'react';
import {Navigate} from "react-router-dom";

const electronAPI=global.electronAPI;
export default [
    {
        path: '/', element: 'home', children: [
            {path: '/',element:<Navigate to={'/news'}/>},
            {path: '/news', element: 'home/news'},
            {path: '/about', element: 'home/about'},
            {path: '/service', element: 'home/service'},
            {path: '/solution', element: 'home/solution'},
            {path: '/party', element: 'home/party'},
            {path:'/article/:path/:id',element:'home/article'},
        ]
    },
    {path:'/error',element: 'error'},
    {path: 'desk/publish/:id', element: 'desk/application/messageList/Publish/detail', index: true,},
    {
        path: '/desk', element: 'desk', children: [
            {path: '/desk', element: `desk/application/${electronAPI?'desk':'index'}`},
            {
                path: '/desk/system', element: 'desk/admin', children: [
                    {path: 'dept', element: 'desk/admin/dept'},
                    {path: 'menu', element: 'desk/admin/menu'},
                    {path: 'role', element: 'desk/admin/role'},
                    {path: 'sso', element: 'desk/admin/sso'},
                    {path: 'user', element: 'desk/admin/user'},
                    {path: 'group', element: 'desk/admin/group'},
                    {path: 'param', element: 'desk/admin/params'},
                    {path: 'notice', element: 'desk/admin/notice'},
                    {path: 'publish', element: 'desk/admin/publish'},
                    {path: 'meeting', element: 'desk/admin/meeting'},
                    {path: 'agenda', element: 'desk/admin/agenda'},
                    {path: 'oss', element: 'desk/admin/oss'},
                    {path: 'memorandum', element: 'desk/admin/memorandum'},
                    {path: 'flow-model', element: 'desk/admin/flowModel'},
                    {path: 'flow-category', element: 'desk/admin/flowCategory'},
                ]
            },
            {
                path: '/desk/cms', element: 'desk/admin', children: [
                    {path: 'feature', element: 'desk/cms/feature'},
                    {path: 'statement', element: 'desk/cms/statement'},
                    {path: 'service', element: 'desk/cms/service'},
                    {path: 'about', element: 'desk/cms/about'},
                    {path: 'solution', element: 'desk/cms/solution'},
                    {path: 'party', element: 'desk/cms/party'},
                    {path: 'concat', element: 'desk/cms/concat'},
                    {path: 'service', element: 'desk/cms/service'},
                    {path: 'news', element: 'desk/cms/linkNews'},
                ]
            },
        ]
    },
];
