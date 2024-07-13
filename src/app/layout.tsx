import "./[locale]/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import ReduxProvider from '@/feature/ReduxProvider';
import { ToastContainer } from "react-toastify";

interface RootLayoutProps{
    children:React.ReactNode;
   
}


export default function RootLayout({
  children,
 
}: RootLayoutProps) {
  return(
    <html lang="en">
    <body>
    
            <ReduxProvider>
         
                {children}
                <ToastContainer />
            </ReduxProvider>
           
    </body>
</html>
       )
}