import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import Nav1 from './Nav';
import './App.css'
const Example = (props) => {
   
  return (
      <div>
          <Nav1 />
          <div class="container sauce" >  
          
<div class="row" >
     <div class="col align-self-center"> 
     <div class="row align"> 
     <div class="gray">
     <Card>
     <img width="1150" src={require('./images/glob.PNG')} alt="Card image cap" />
        <CardBody>

          <CardText> <p className="display-10 my-6 text-center text-muted">Miracle Software Systems, Inc , founded in 1994, is a Global Systems Integrator specializing in ERP/ BPM (EAI/SOA) / B2B / Digital Experience Technologies and is a Minority Certified Private Business headquartered in Novi, MI – USA. Over the past twenty five years, Miracle has helped numerous large and mid-sized businesses transition their IT to a Service Oriented Architecture, with IT Transformation Initiatives, deploying SAP / Oracle ERP Systems. Miracle has a global presence on four continents with multiple Global Development Centers spanning across the USA, Canada and India. Today, Miracle’s team includes 2600 IT Professionals with a projected targeted expansion to 3000 by the end of 2019.

Whether it is Internal Application to Application(A2A/EAI) Integration, Process Integration(BPM), Process Integration, or Business to Business Integration using EDI / Web Services, API Management, Machine to Machine (M2M) Communications, Internet of Things(IOT), Cloud Integration or Mobile Application Integration, Miracle is the Systems Integrator of Choice and the Thought Leader in this industry. Miracle has been and continues to be a leader in the niche space of Business Integration and SOA services over the past 21 Years with Premier Partnerships with companies such as SAP, IBM, Oracle and Microsoft.

</p>
</CardText>
        </CardBody>
      </Card>
         </div> 
         <div class="green">
      <Card>
      <img width="1150" src={require('./images/aipaas.jpg')} alt="Card image cap" />
        <CardBody>

          <CardText>
          <p className="display-10 my-6 text-center text-muted text-center">
          Artificial intelligence (AI) technologies open new horizons for organizations from different industries. With the help of AI, you can process huge sets of data at high speed, analyze visual, audio, and text content to extract specific features, and easily solve complex tasks that humans can’t.

With the rising popularity of AI, cloud service providers (CSPs) have started to offer services dedicated to specific tasks: detecting objects in video, recognizing faces of celebrities, turning speech into text. Some of these providers have even taken steps toward offering a more useful solution: an AI Platform as a Service (AI PaaS).
          </p>
          </CardText>
     

        </CardBody>
      </Card>
             </div> 
        
 </div>
    </div>
    </div>
   
    </div>
    </div>
    
      );
};

export default Example;