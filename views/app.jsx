import 'core-js';
import React from 'react';
import Page from './page/index';
import {createRoot} from "react-dom/client";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Page/>)
