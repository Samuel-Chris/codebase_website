import React, { Component } from 'react'
import Layout from '../components/layout/Layout';
import Section1 from '../components/contact-page/Section1';
import Section2 from '../components/contact-page/Section2';

export class ContactPageTemplate extends Component {
    render() {
        return (
           <Layout>
               <Section1 />
               <Section2 />
           </Layout>
        )
    }
}

const ContactPage = () => {
  
    return  (
        <ContactPageTemplate  />
      )
  }

  
export default ContactPage

