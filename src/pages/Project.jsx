import React from 'react'
import Projects from '../components/common/Projects'
import { motion } from "framer-motion"

function Project() {
  const data = [
    {
      Image: [
        "/carosalimages/about.jpg",
        "/carosalimages/exp-service.avif",
        "/carosalimages/person2.jpg",
      ],
      Title: "Rework Tracing APP",
      Description: "This Web app provides tracing part status and whose are all handling in main line and rework line those corresponding parts. Then report generation of parts status for rectified or not.",
      Details: "The Rework Tracing App is a powerful web-based solution designed for real-time tracking and management of part statuses across both the main production line and the rework line. It enhances traceability, efficiency, and accuracy by ensuring that every part is monitored throughout its journey, from production to rework and final rectification.",
      features: [
        {
          heading: " Advanced Part Tracking",
          content: [
            "Logs each part’s movement, identifying handlers at every stage.",
            "Reduces manual errors and improves overall process transparency.",
            "Ensures accountability by tracking who handled each part and at what stage."
          ]
        },
        {
          heading: "Real-time Status Updates",
          content: [
            "Provides instant updates on part conditions, whether pending, under rework, or completed.",
            "Displays live data on an interactive dashboard for quick decision-making.",
            "Helps in prioritizing critical parts that need urgent rework."
          ]
        },
        {
          heading: "Data-Driven Insights",
          content: [
            "Stores historical data to analyze trends and identify recurring issues in production.",
            "Provides predictive insights to help prevent defects and enhance quality control.",
            "Helps improve resource allocation and workflow optimization."
          ]
        },
        {
          heading: "Scalable & Flexible Architecture",
          content: [
            "Built with MongoDB, Node.js, and AngularJS, ensuring a fast, responsive, and scalable solution.",
            "Supports IoT integration, allowing automated part scanning and tracking through connected devices.",
            "Can be extended with AI-powered analytics for better decision-making and predictive maintenance."
          ]
        },


      ],
      technologies: [
        {
          tech: "MonogoDB",
          detail: "MongoDB is used to store and manage real-time part status data, tracking components across the main and rework lines. It enables efficient querying and report generation on rectified and pending parts. 🚀"
        },
        {
          tech: "NodeJS",
          detail: "A backend runtime that handles API requests, processes business logic, and manages real-time data flow between the frontend and MongoDB, ensuring smooth and efficient performance.  🚀"

        },
        {
          tech: "AngularJs",
          detail: "A frontend framework that powers a dynamic UI, enabling real-time part tracking, instant updates, and interactive report generation through two-way data binding. 🚀"
        }
      ],

    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "Visibility APP",
      Description: "This Web app provides approving locations and branches as per request from clients. Then focusing sales, inventory and open purchase of them approved locations and branches. ",
      technologies: [
        {
          tech: "PHP",
          detail: "Handles backend logic, processes client requests, and manages location and branch approvals efficiently. It ensures secure data handling and smooth interaction between the frontend and database."
        },
        {
          tech: "MySQL",
          detail: "Stores and organizes data related to approved locations, sales, inventory, and open purchases. It enables fast retrieval, structured queries, and secure management of business information."

        },
        {
          tech: "JavaScript",
          detail: "Enhances user interaction by enabling real-time updates, form validation, and event handling. It improves responsiveness and ensures smooth dynamic content changes."
        },
        {
          tech:"JQuery",
          detail:"Simplifies complex JavaScript operations like DOM manipulation, AJAX requests, and animations. It helps in creating a more interactive and feature-rich user experience.",
        },
        {
          tech:"HTML",
          detail:"Defines the structure of web pages, ensuring proper content organization and accessibility. It forms the backbone of the application's interface."
        },
        {
          tech:"CSS",
          detail:"Styles the web pages to create a visually appealing and responsive design. It enhances user experience with layouts, colors, fonts, and animations."
        }
      ],
      Details: "The Visibility App is a web-based solution designed to streamline the approval process for locations and branches requested by clients. It enhances operational efficiency by providing a centralized system for managing approvals while also monitoring sales, inventory, and open purchases in the approved locations.",
      features: [
        {
          heading: "Automated Location & Branch Approvals",
          content: [
            "Simplifies the approval process by allowing clients to submit requests digitally.",
            "Reduces manual intervention and speeds up approval turnaround time.",
            "Ensures transparency and maintains a structured record of approved locations."
          ]
        },
        {
          heading: "Comprehensive Sales & Inventory Tracking",
          content: [
            "Monitors sales trends across different branches, providing real-time insights.",
            "Tracks inventory levels to prevent shortages and optimize stock management.",
            "Enhances decision-making with detailed analytics on product movement."
          ]
        },
        {
          heading: "Open Purchase Order Management",
          content: [
            "Manages ongoing purchase requests for each approved location.",
            "Ensures seamless coordination between vendors and businesses for timely procurement.",
            "Provides visibility into pending, completed, or canceled purchases."
          ]
        },
        {
          heading: "Scalable & Flexible Architecture",
          content: [
            "PHP & MySQL handle backend operations, ensuring secure data storage and fast performance.",
            "JavaScript & jQuery provide a dynamic and interactive user experience with real-time updates.",
            "HTML & CSS ensure a responsive and visually appealing interface accessible on all devices."
          ]
        },
      ],
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "Jewelry CRM",
      Description: "Jewelry Application maintains customer details whose are all purchase and visits shop. Then will send latest arrivals of jewels and send wish messages to customer's Birthday, wedding day and main events of the years through GCM options.",
      technologies: [
        {
          tech: "PHP",
          detail: "Manages customer data, processes visit records, and automates sending notifications for birthdays, weddings, and special events. It ensures seamless backend operations for personalized engagement."
        },
        {
          tech: "MySQL",
          detail: "Stores customer details, purchase history, and visit records. It enables quick retrieval of data for sending the latest jewelry arrivals and event-based messages."

        },
        {
          tech: "JavaScript",
          detail: "Enhances interactivity by enabling real-time updates, handling form submissions, and improving the user experience while browsing jewelry collections."
        },
        {
          tech:"HTML",
          detail:" Structures the web application by organizing customer profiles, jewelry listings, and notification sections. It ensures proper content display and easy navigation."
        },
        {
          tech:"CSS",
          detail:"Styles the interface with an elegant design, making the application visually appealing. It ensures a responsive layout for seamless access across different devices."
        }
      ],
      Details: "The Jewelry CRM is a comprehensive customer relationship management system designed specifically for jewelry businesses. It streamlines customer data management, enhances customer engagement, and automates personalized notifications. This system ensures efficient tracking of customer interactions, making it easier to provide tailored services and promotions.",
      features: [
        {
          heading: "Customer Data Management & Tracking",
          content: [
            "Maintains detailed records of customers who visit and make purchases.",
            "Stores information like purchase history, visit frequency, and preferred jewelry styles.",
            "Enables businesses to segment customers based on buying behavior for targeted marketing."
          ]
        },
        {
          heading: "Automated Notifications & Engagement",
          content: [
            "Uses Google Cloud Messaging (GCM) to send automated wish messages for birthdays, wedding anniversaries, and other special events.",
            "Notifies customers about the latest jewelry collections, discounts, and exclusive offers.",
            "Improves customer retention by fostering personalized interactions."
          ]
        },
        {
          heading: "Personalized Marketing & Sales Insights",
          content: [
            "Analyzes customer preferences and purchase history to recommend relevant products.",
            "Helps businesses plan marketing campaigns based on customer interest and seasonal trends.",
            "Enhances conversion rates by sending timely and relevant offers."
          ]
        },
        {
          heading: "Secure & Scalable Technology Stack",
          content: [
            "PHP & MySQL manage backend operations, ensuring secure storage of customer data and efficient processing of requests.",
            "JavaScript enables real-time updates, interactive elements, and smooth user experience.",
            "HTML & CSS create a visually appealing, responsive, and user-friendly interface accessible on various devices."
          ]
        },
      ],
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "JIT Web App ",
      Description: "This Office web app provides migrate employee joining kit details, d,ocument details, b,ond details, T,eam details, P,roject details, A,ttendance details, O,ffice daily, monthly, yearly financial status and so on.",
      Details: "",
      technologies: ["a", "b",],
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "Cartoon Clicks Web App",
      Description: "This Web app provides count of print, DVD write status. This App contains 2 kind of design. One is employee login, 2nd one is admin login. Admin can know the details of, print, DVD write details, w,hich employee wherever run this app.",
      Details: "",
      technologies: ["a", "b",],
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "S.Ve.Shekar Android APP (Web Services)",
      Description: "This App provides audio and video purchase lists. We (PHP Team) only provides and developed web services to android app.",
      Details: "",
      technologies: ["a", "b",],
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "Donor Android App (Web Services)",
      Description: "This App provides audio and video purchase lists. We (PHP Team) only provides and developed web services to android app.",
      Details: "",
      technologies: ["a", "b",],
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "Caabz",
      Description: "Caabz is the Web based travel management Software provides, manage bookings of travel and maintain vehicle information. It also provides an ability to manage the company and employee information for processing payment details.",
      Details: "",
      technologies: ["a", "b",],
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "RIXI CRM",
      Description: "It is a construction based ERP module. It provides dashboard and calendar details ab,out overall deals customer details, f,ollow-ups the customer needs, and feeds note into that corresponding customer leads.",
      Details: "",
      technologies: ["a", "b",],
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "Agarwal Chat App",
      Description: "The chat app provides private sector communications and it’s also given more security. In this project main aim is chatting between doctors. This chatting data’s are maintained by own servers.",
      Details: "",
      technologies: ["a", "b",],
    },
  ]
  return (
    <div className='min-h-screen p-8 container mx-auto'>
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
        }}
        className=" pt-[8rem] text-5xl text-center ">
        <div className="">
          <h1 className='text-white'>
            Check Our Works With
            <span className=' block'>Real Results</span>
          </h1>
        </div>
      </motion.div>
      <Projects data={data} />





    </div>
  );
}

export default Project;
