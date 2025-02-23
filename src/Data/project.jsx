export const data = [
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
          tech: "JQuery",
          detail: "Simplifies complex JavaScript operations like DOM manipulation, AJAX requests, and animations. It helps in creating a more interactive and feature-rich user experience.",
        },
        {
          tech: "HTML",
          detail: "Defines the structure of web pages, ensuring proper content organization and accessibility. It forms the backbone of the application's interface."
        },
        {
          tech: "CSS",
          detail: "Styles the web pages to create a visually appealing and responsive design. It enhances user experience with layouts, colors, fonts, and animations."
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
          tech: "HTML",
          detail: " Structures the web application by organizing customer profiles, jewelry listings, and notification sections. It ensures proper content display and easy navigation."
        },
        {
          tech: "CSS",
          detail: "Styles the interface with an elegant design, making the application visually appealing. It ensures a responsive layout for seamless access across different devices."
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
      technologies: [
        {
          tech: "PHP",
          detail: "Handles backend operations for managing employee records, document storage, bond agreements, and financial transactions. Ensures secure and efficient processing of office data."
        },
        {
          tech: "MySQL",
          detail: "Stores employee details, project assignments, attendance records, and financial transactions. Enables quick and structured data retrieval for seamless office management."
        },
        {
          tech: "JavaScript",
          detail: "Enhances user interaction with real-time updates, form validations, and dynamic content rendering. Improves navigation and interactivity in employee and financial modules."
        },
        {
          tech: "jQuery",
          detail: "Optimizes UI responsiveness by enabling AJAX-based data fetching, dynamic content updates, and smooth animations for an enhanced user experience."
        },
        {
          tech: "HTML",
          detail: "Structures the application with well-organized sections for employee management, project tracking, attendance monitoring, and financial reports."
        },
        {
          tech: "CSS",
          detail: "Provides a professional and responsive design, ensuring accessibility across different devices. Enhances the visual appeal and usability of the application."
        }
      ],
      Details: "The JIT Web App is an advanced office management system that streamlines employee onboarding, document management, project tracking, attendance logging, and financial reporting. Designed for JIT Global, it centralizes all key office processes, ensuring efficient workflow, structured data management, and real-time tracking for enhanced productivity and financial transparency.",
      features: [
        {
          heading: "Employee & Document Management",
          content: [
            "Manages employee joining kits, document details, and bond agreements efficiently.",
            "Simplifies onboarding by centralizing all necessary documentation in a secure environment.",
            "Ensures quick retrieval of employee records for administrative processes."
          ]
        },
        {
          heading: "Team & Project Collaboration",
          content: [
            "Maintains structured team hierarchies, defining roles and project assignments clearly.",
            "Tracks project progress in real time, ensuring smooth workflow and accountability.",
            "Facilitates collaboration by providing status updates on ongoing projects and deadlines."
          ]
        },
        {
          heading: "Attendance & Performance Tracking",
          content: [
            "Automates daily, monthly, and yearly attendance logging for employees.",
            "Monitors work hours, leaves, and performance trends to optimize workforce management.",
            "Integrates attendance records with payroll for accurate salary processing."
          ]
        },
        {
          heading: "Financial Management & Reporting",
          content: [
            "Provides comprehensive financial reports, covering daily, monthly, and yearly transactions.",
            "Tracks office expenses, revenue trends, and budget allocations for optimized financial planning.",
            "Generates detailed reports for decision-making, ensuring financial transparency."
          ]
        },
        {
          heading: "Scalability & Security",
          content: [
            "PHP & MySQL provide a secure and scalable foundation for handling large office datasets.",
            "JavaScript & jQuery improve application performance with interactive and real-time elements.",
            "HTML & CSS ensure a visually appealing, responsive, and user-friendly interface."
          ]
        }
      ]
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "Cartoon Clicks Web App",
      Description: "This Web app provides count of print, DVD write status. This App contains 2 kind of design. One is employee login, 2nd one is admin login. Admin can know the details of, print, DVD write details, w,hich employee wherever run this app.",
      technologies: [
        {
          tech: "PHP",
          detail: "Handles backend logic for tracking print and DVD write counts, managing user authentication, and maintaining logs of employee activities."
        },
        {
          tech: "MySQL",
          detail: "Stores employee login data, print and DVD write records, and admin logs for efficient tracking and reporting."
        },
        {
          tech: "JavaScript",
          detail: "Enhances interactivity by validating forms, updating UI dynamically, and providing real-time data updates for print and DVD write counts."
        },
        {
          tech: "jQuery",
          detail: "Simplifies AJAX calls, enables smooth UI interactions, and enhances data retrieval for a responsive user experience."
        }
      ],
      Details: "The Cartoon Clicks Web App is designed for tracking print and DVD write activities, ensuring accountability and transparency in media processing. It features separate logins for employees and administrators, allowing admins to monitor activity logs and employee usage. The system streamlines media tracking, providing detailed insights into printing and DVD writing operations.",
      features: [
        {
          heading: "Employee & Admin Authentication",
          content: [
            "Provides secure login functionality for employees and admins.",
            "Employees can log their print and DVD write activities for tracking.",
            "Admins have full control over user access and system monitoring."
          ]
        },
        {
          heading: "Print & DVD Write Tracking",
          content: [
            "Records every print and DVD write request for accountability.",
            "Tracks the number of prints and DVDs written by each employee.",
            "Ensures transparency by logging activities for reporting."
          ]
        },
        {
          heading: "Real-Time Activity Monitoring",
          content: [
            "Admins can view live updates on print and DVD write operations.",
            "Tracks which employees are using the system and their activity history.",
            "Provides insights into media production efficiency."
          ]
        },
        {
          heading: "Secure & Scalable System",
          content: [
            "PHP & MySQL ensure secure authentication, data management, and scalability.",
            "JavaScript & jQuery enhance interactivity and real-time data updates.",
            "Optimized for efficient performance across different devices."
          ]
        }
      ]
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "S.Ve.Shekar Android APP (Web Services)",
      Description: "This App provides audio and video purchase lists. We (PHP Team) only provides and developed web services to android app.",
      technologies: [
        {
          tech: "PHP",
          detail: "Develops web services to handle requests from the Android app, providing structured APIs for audio and video purchase lists."
        },
        {
          tech: "MySQL",
          detail: "Stores and manages audio and video purchase data, ensuring efficient retrieval and secure storage for seamless app integration."
        }
      ],
      Details: "The S.Ve.Shekar Android App Web Services are designed to support the app by providing backend APIs that facilitate audio and video purchases. The PHP team developed these services to ensure smooth data transactions between the app and the database, enabling a reliable user experience.",
      features: [
        {
          heading: "Seamless API Integration",
          content: [
            "Provides structured web services to facilitate data exchange with the Android app.",
            "Ensures smooth communication for retrieving audio and video purchase lists.",
            "Handles secure API requests for optimized performance."
          ]
        },
        {
          heading: "Efficient Data Management",
          content: [
            "Uses MySQL to store and manage purchase records efficiently.",
            "Optimizes database queries for fast data retrieval.",
            "Ensures secure storage of user transactions and purchase history."
          ]
        },
        {
          heading: "Scalable & Secure Backend",
          content: [
            "PHP ensures robust and scalable backend architecture for handling requests.",
            "Implements authentication measures for secure API access.",
            "Designed to handle increasing user loads without performance issues."
          ]
        }
      ]
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "Donor Android App (Web Services)",
      Description: "This App provides audio and video purchase lists. We (PHP Team) only provides and developed web services to android app.",
      technologies: [
        {
          tech: "PHP",
          detail: "Develops web services to handle donor registrations, data retrieval, and secure communication between the Android app and the server."
        },
        {
          tech: "MySQL",
          detail: "Stores donor details, including registration data and donation history, enabling efficient retrieval and management."
        }
      ],
      Details: "The Donor Android App Web Services facilitate seamless donor registration and data management. The PHP team developed backend APIs to ensure secure, fast, and structured communication between the mobile app and the database, enhancing user experience and operational efficiency.",
      features: [
        {
          heading: "API-Driven Donor Management",
          content: [
            "Provides structured APIs for donor registration, updates, and retrieval.",
            "Enables real-time data synchronization between the mobile app and the backend.",
            "Ensures a smooth user experience with quick data processing."
          ]
        },
        {
          heading: "Secure & Efficient Data Storage",
          content: [
            "MySQL database stores donor details, ensuring organized and secure data management.",
            "Optimized queries for fast data access and retrieval.",
            "Implements data encryption and security protocols for donor privacy."
          ]
        },
        {
          heading: "Scalable & Reliable Backend",
          content: [
            "PHP-based backend ensures stable and scalable operations to handle growing donor registrations.",
            "Implements authentication and access controls for secure API usage.",
            "Designed for high availability and minimal downtime."
          ]
        }
      ]

    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "Caabz",
      Description: "Caabz is the Web based travel management Software provides, manage bookings of travel and maintain vehicle information. It also provides an ability to manage the company and employee information for processing payment details.",
      technologies: [
        {
          tech: "PHP",
          detail: "Handles backend operations, processes booking requests, manages vehicle data, and ensures secure payment transactions."
        },
        {
          tech: "MySQL",
          detail: "Stores and manages booking details, vehicle records, company data, and employee information for seamless travel management."
        },
        {
          tech: "JavaScript",
          detail: "Enhances user experience with interactive features, real-time booking updates, and dynamic content loading."
        },
        {
          tech: "HTML",
          detail: "Structures the web application, organizing booking forms, vehicle listings, and payment processing sections for easy navigation."
        },
        {
          tech: "CSS",
          detail: "Provides a visually appealing and responsive interface, ensuring a smooth user experience across devices."
        }
      ],
      Details: "Caabz is a comprehensive web-based travel management software that streamlines the booking process, manages vehicle records, and facilitates secure payments. It enables companies to efficiently handle employee travel needs and maintain accurate financial records.",
      features: [
        {
          heading: "Efficient Booking Management",
          content: [
            "Allows users to book and manage travel services seamlessly.",
            "Automates the process of tracking reservations and availability.",
            "Provides real-time updates on booking status and confirmations."
          ]
        },
        {
          heading: "Vehicle & Fleet Management",
          content: [
            "Maintains detailed records of company vehicles and their availability.",
            "Tracks vehicle usage, maintenance schedules, and fuel expenses.",
            "Ensures optimized resource allocation and fleet utilization."
          ]
        },
        {
          heading: "Company & Employee Information Management",
          content: [
            "Stores company and employee details for streamlined operations.",
            "Links employee travel records to payment processing for transparency.",
            "Automates approval workflows for travel expenses and reimbursements."
          ]
        },
        {
          heading: "Secure & Scalable Payment Processing",
          content: [
            "Integrates secure payment gateways for processing travel expenses.",
            "Ensures data security with encrypted transactions and authentication.",
            "Supports multi-tier access controls for financial approvals."
          ]
        }
      ]
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "RIXI CRM",
      Description: "It is a construction based ERP module. It provides dashboard and calendar details ab,out overall deals customer details, f,ollow-ups the customer needs, and feeds note into that corresponding customer leads.",
      technologies: [
        {
          tech: "PHP",
          detail: "Handles backend operations, processes customer data, manages lead tracking, and ensures smooth ERP module functionality."
        },
        {
          tech: "MySQL",
          detail: "Stores customer details, leads, follow-ups, and deal information, enabling structured data management and quick retrieval."
        },
        {
          tech: "JavaScript",
          detail: "Enhances interactivity with dynamic dashboard updates, real-time calendar scheduling, and smooth navigation."
        },
        {
          tech: "HTML",
          detail: "Structures the web application, organizing customer records, deal overviews, and follow-up tracking for easy access."
        },
        {
          tech: "CSS",
          detail: "Provides a visually appealing, responsive interface for seamless user experience across different devices."
        }
      ],
      Details: "RIXI CRM is a construction-focused ERP module designed to streamline customer relationship management. It provides an intuitive dashboard, lead tracking, and a calendar-based scheduling system to manage deals, follow-ups, and customer interactions efficiently.",
      features: [
        {
          heading: "Comprehensive Dashboard",
          content: [
            "Displays an overview of deals, customer interactions, and lead statuses.",
            "Provides quick insights into sales performance and pending follow-ups.",
            "Enhances decision-making with real-time data visualization."
          ]
        },
        {
          heading: "Lead & Customer Management",
          content: [
            "Tracks customer inquiries, follow-ups, and deal progress.",
            "Maintains detailed records of customer needs and communication history.",
            "Improves conversion rates through structured engagement workflows."
          ]
        },
        {
          heading: "Calendar & Scheduling System",
          content: [
            "Allows users to schedule follow-ups and set reminders for important meetings.",
            "Provides a visual representation of tasks and customer interactions.",
            "Enhances efficiency by ensuring timely customer engagement."
          ]
        },
        {
          heading: "Secure & Scalable ERP Module",
          content: [
            "Built with PHP & MySQL to ensure secure data handling and scalability.",
            "JavaScript enhances real-time updates and interactive elements.",
            "Responsive HTML & CSS design for a seamless user experience on all devices."
          ]
        }
      ]
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "Agarwal Chat App",
      Description: "The chat app provides private sector communications and it’s also given more security. In this project main aim is chatting between doctors. This chatting data’s are maintained by own servers.",
      technologies: [
        {
          tech: "PHP",
          detail: "Handles backend communication, user authentication, and message processing, ensuring secure and reliable chat functionality."
        },
        {
          tech: "MySQL",
          detail: "Stores chat history, user data, and access logs securely, enabling efficient message retrieval and data management."
        },
        {
          tech: "JavaScript",
          detail: "Enhances real-time messaging, user interactions, and chat interface responsiveness for a seamless experience."
        },
        {
          tech: "JQuery",
          detail: "Simplifies AJAX calls for real-time message updates and improves UI interactions with minimal coding effort."
        },
        {
          tech: "HTML",
          detail: "Structures the chat interface, user profiles, and conversation threads for an organized and user-friendly layout."
        },
        {
          tech: "CSS",
          detail: "Ensures a clean, professional, and responsive chat design, making the interface visually appealing on all devices."
        }
      ],
      Details: "Agarwal Chat App is a secure communication platform designed for private sector professionals, specifically doctors. It enables real-time messaging, ensuring confidentiality with messages stored on private servers for enhanced security.",
      features: [
        {
          heading: "Secure Private Communication",
          content: [
            "Enables doctors to communicate securely within a private network.",
            "Chat data is stored on dedicated servers, ensuring confidentiality.",
            "Implements encryption techniques to safeguard sensitive information."
          ]
        },
        {
          heading: "Real-Time Messaging & Notifications",
          content: [
            "Delivers instant messages with real-time status updates.",
            "Uses AJAX and WebSockets for smooth, uninterrupted communication.",
            "Provides instant notifications for new messages and important updates."
          ]
        },
        {
          heading: "User Authentication & Access Control",
          content: [
            "Ensures only verified doctors and professionals can access the chat system.",
            "Implements role-based access control for enhanced security.",
            "Logs user activity for accountability and compliance."
          ]
        },
        {
          heading: "Scalable & Secure Technology Stack",
          content: [
            "PHP & MySQL ensure robust backend performance and data security.",
            "JavaScript & JQuery enhance interactivity and real-time messaging.",
            "HTML & CSS provide a responsive and intuitive chat interface."
          ]
        }
      ]
    },
  ]