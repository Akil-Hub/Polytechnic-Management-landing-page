import { createBrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import NoticeSection from '@/components/NoticeSection';
import AboutUs from '@/components/AboutUs';
import UniversalLayout from './layouts/UniversalLayout';
import Home from './pages/Home';
import Study from '@/components/Study';
import OurDepartment from '@/components/OurDepartment';
import AllNotice from '@/pages/AllNotice';
import Instructor from './pages/Instructors';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';
import CSTPage from './pages/CSTPage';
import AcademicPage from './pages/AcademicPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UniversalLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'notice',
        element: <AllNotice />,
      },
      {
        path: 'about',
        element: <AboutUsPage />,
      },
      {
        path: 'contact',
        element: <ContactUsPage />,
      },
      {
        path: 'academic',
        element: <AcademicPage />,
      },
      {
        path: 'instructors',
        element: <Instructor />,
      },
      {
        path: 'cst',
        element: <CSTPage />,
      },
    ],
  },
]);

export default router;
