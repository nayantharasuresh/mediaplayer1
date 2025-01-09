set up path for component in react
- install react-router-dom using the command npm i react-router-dom
steps to set-up path for component using react router dom
    -React app must reader inside <BrowserRouter></BrowserRouter>
    -components needs to set-up path must inside <Routes> component of react router dom
    -Higher order components: when a components passed through another component, it's called heigher oredr component ex: Route
    -using <Route> define each component path 
    <Route> is a heigher oredr component(HOC): getting component as props in a component
    -
create json-server
    -create a folder to hold file
    -create a package.json file using the command npm init -y
    -create a json file
    -install json-server using the command npm i json-server
    -run json file using the command npx json-server json-file-name


how to deploy JSON file using nodejs
-------------------------------------
    1. create a index.js file in server folder
    2. update script in "package.json" file as "start":"node index.js 
    3. create .gitignore file and add node_modules folder
    4. define json-server to run json file in index.js
    5.