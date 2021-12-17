import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Body from './components/Layout/Body';
import Footer from './components/Layout/Footer';

function App() {
  const jobs = [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Tiktok',
      location: 'San Diego, CA'
    },
    {
      id: '2',
      title: 'Software Engineer',
      company: 'Snap',
      location: 'San Fransisco, CA'
    },
    {
      id: '3',
      title: 'UI Engineer',
      company: 'Instagram',
      location: 'San Mateo, CA'
    },
    {
      id: '4',
      title: 'Software Developer',
      company: 'Pinterest',
      location: 'Seattle, WA'
    }
  ];

  return (
    <Fragment>
      <Header />
      <Body jobs={jobs} />
      <Footer />
    </Fragment>
  );
}

export default App;
