import http, {Server} from 'http';
import App from './server';
import router from './router';


const app = new App(router)

const server = http.createServer(app.server())
server.listen(5000, () => console.log('sever runing port 5000'))