import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Cabins from './pages/Cabins';
import Bookings from './pages/Bookings';
import Settings from './pages/Settings';
import Login from './pages/Login';
import NewUsers from './pages/Users';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
// import styled from 'styled-components';
// import GlobalStyles from './styles/GlobalStyles';
// import Button from './ui/Button';
// import Input from './ui/Input';
// import Heading from './ui/Heading';
// import Row from './ui/Row';

// const StyledApp = styled.div`
//   /* background-color: orangered; */
//   padding: 20px;
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <StyledApp>
//         <Row>
//           <Row type="horizontal">
//             <Heading type="h1">The Wild Oasis</Heading>
//             <div>
//               <Heading as="h2">Checkin n Checkout</Heading>
//               <Button

//                 onClick={() => alert('Check in')}
//               >
//                 Check in
//               </Button>
//               <Button
//                 variation="secondary"
//                 size="small"
//                 onClick={() => alert('Check out')}
//               >
//                 Check out
//               </Button>
//             </div>
//           </Row>
//           <Row type="vertical">
//             <Heading as="h3">Form</Heading>
//             <form>
//               <Input type="number" placeholder="Number of guests" />
//               <Input type="number" placeholder="Number of guests" />
//             </form>
//           </Row>
//         </Row>
//       </StyledApp>
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<NewUsers />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
