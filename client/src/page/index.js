import { lazy } from 'react';


const Home = lazy(() => import('./HomePage'))
const About = lazy(() => import('./AboutUsPage'))
const Contact = lazy(() => import('./ContactUsPage'))
const Register = lazy(() => import('./RegisterPage'))

const MultiCloudData = lazy(() => import('./courses/MultiCloudData'))
const MultiCloudNetworking = lazy(() => import('./courses/MultiCloudNetworking'))
const MultiCloudSecurity = lazy(() => import('./courses/MultiCloudSecurity'))


export {Home,About,Contact,Register,MultiCloudData,MultiCloudNetworking,MultiCloudSecurity}