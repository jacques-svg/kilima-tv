import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import MediaActorsOrSingersRoute from './routes/media_actors_or_singers.route';
import MoviesRoute from './routes/movies.route';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new MoviesRoute()]);

app.listen();
