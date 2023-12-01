# Microfrontends Course from Udemy

This repo contains the full application for MicroFrontends with React course from Stephen Grider.
https://www.udemy.com/course/microfrontend-course

This application has a container MF, and 3 child MFs (Marketing, Auth, Dashboard). It relies on Webpack Module Federation plugin to work. It was deployed to S3 & CloudFront on my personal AWS account, through Github Actions. The course defines requirements like trying to have as less coupling as possible between MFs, and shows how solve issues related to that on regards to styling, routing, basic authentication, and also with the Dashboard MF it covers the possibility of using a different frontend library to render pages (Vue in this case).

As of 01/12/2023 this url loads the app successfully:
https://d3h14ej1f8i762.cloudfront.net/

Certificate
https://www.udemy.com/certificate/UC-1ddb8f96-d8b7-4689-9c2c-47db7c8e4e1c/

Author
David Ramos
