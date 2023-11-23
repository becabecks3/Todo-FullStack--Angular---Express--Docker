## ToDo Practice
Todo application to keep your errands organized. It has been developed with Angular on the frontend and with NodeJs and Express on the backend, alongside CosmosDb-MongoDb as database. For deployment it is set to use Docker Compose

## Installation
 1. Clone de repository 


        `git clone git@gitlab.rdwd.intra.bender:madrid/rebeca-todo.git`

        `cd rebeca-todo`
 2. Install dependecies


        `npm i`  
 3. Set you environment varibles. Create a .env at the indicated level and edit the following with the values needed.
 ~~~
    At the same level of your compose.yaml 
        YOUR_IP=
        BACKEND_PORT=
        FRONTEND_PORT=
        BACKEND_LISTEN_PORT=
        NG_APP_API_URL=
        MG_CONECTION=
 ~~~

 ~~~
    At the root of your todo-app directory 
        NG_APP_API_URL=
 ~~~

 ~~~
    At the root of your server directory 
        BACKEND_LISTEN_PORT=
        MG_CONECTION=
 ~~~


 4. Deploy with Docker compose


    `docker compose up`


    

    