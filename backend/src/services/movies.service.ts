import { HttpException } from '@/exceptions/HttpException';
import { Movie, PrismaClient, User } from '@prisma/client';
import { isEmpty } from '@utils/util';
import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth'
const axios = require('axios');

const firebaseConfig = {
    projectId: 'kilimatv-client',
    appId: '1:60430824099:web:929df19c6713352a9c0516',
    storageBucket: 'kilimatv-client.appspot.com',
    apiKey: 'AIzaSyBZmPv1wocLHbyIFqC84HvAj_MuflwB7TU',
    authDomain: 'kilimatv-client.firebaseapp.com',
    messagingSenderId: '60430824099',
    measurementId: 'G-XLECHSXT5W',
};

const firebase_app = initializeApp(firebaseConfig);

class MoviesService {
    public movies = new PrismaClient().movie;
    public users = new PrismaClient().user;

    public async findAllMovie(): Promise<any[]> {
        let language_id = 1;

        const allMovie: Movie[] = await this.movies.findMany({
            include: {
                language: true
            }
        });

        console.log(allMovie);

        const movie_list = allMovie.map(function (item) {
            let result = {};
            let movie_item = {};
            if (item["language"].length == 1) {
                movie_item = item["language"][0];
            } else {
                item["language"].forEach(element => {
                    if (element.languageId == language_id) {
                        movie_item = element;
                    }
                });
            }

            result["title"] = movie_item["title"];
            result["description"] = movie_item["description"];
            result["age_min"] = item["age_min"];
            result["movie_id"] = movie_item["cloudflare_id"];
            result["duration"] = item["duration"];
            result["release_date"] = item["release_date"];
            result["home_preview_image_url"] = movie_item["home_preview_image_url"];

            return result;
        });

        return movie_list;
    }

    public async findTopRecentMovie(top_recent: number): Promise<any> {
        if (isEmpty(top_recent)) throw new HttpException(400, "Top ranking not specified");

        const topRecentMovie: Movie[] = await this.movies.findMany({
            orderBy: [
                {
                    id: 'desc'
                }
            ],
            include: {
                language: true
            }
        });

        let language_id = 1;

        const movie_list = topRecentMovie.map(function (item) {
            let result = {};
            let movie_item = {};
            if (item["language"].length == 1) {
                movie_item = item["language"][0];
            } else {
                item["language"].forEach(element => {
                    if (element.languageId == language_id) {
                        movie_item = element;
                    }
                });
            }

            result["title"] = movie_item["title"];
            result["description"] = movie_item["description"];
            result["age_min"] = item["age_min"];
            result["movie_id"] = movie_item["cloudflare_id"];
            result["duration"] = item["duration"];
            result["release_date"] = item["release_date"];
            result["home_preview_image_url"] = movie_item["home_preview_image_url"];
            result["shown_small_image_url"] = movie_item["shown_small_image_url"];

            return result;
        });

        console.log(movie_list);

        if (top_recent == 0)
            return movie_list;
        else
            return movie_list.slice(0, top_recent);
    }

    public async findTopPopularMovie(): Promise<any> {
        const kTopRanking = 20;

        // TODO: Update to return the top popular movie.
        const topRecentMovie: Movie[] = await this.movies.findMany({
            orderBy: [
                {
                    id: 'desc'
                }
            ],
            include: {
                language: true
            }
        });

        let language_id = 1;

        const movie_list = topRecentMovie.map(function (item) {
            let result = {};
            let movie_item = {};
            if (item["language"].length == 1) {
                movie_item = item["language"][0];
            } else {
                item["language"].forEach(element => {
                    if (element.languageId == language_id) {
                        movie_item = element;
                    }
                });
            }

            result["title"] = movie_item["title"];
            result["description"] = movie_item["description"];
            result["age_min"] = item["age_min"];
            result["movie_id"] = movie_item["cloudflare_id"];
            result["duration"] = item["duration"];
            result["release_date"] = item["release_date"];
            result["home_preview_image_url"] = movie_item["home_preview_image_url"];
            result["shown_small_image_url"] = movie_item["shown_small_image_url"];

            return result;
        });

        //console.log(movie_list);

        return movie_list.slice(0, kTopRanking);
    }

    public async getMovieWatchData(token, movie_id): Promise<any> {
        // Get the user details from the token using firebase admin.
        let user_data_from_token = {};
        await getAuth(firebase_app).verifyIdToken(token).then((decodedToken) => {
            user_data_from_token = decodedToken;
        });

        console.log(user_data_from_token)

        // Verify that the `user_data_from_token` exist in the database
        const findUser: User = await this.users.findUnique({ 
            where: { 
                email: user_data_from_token['email'] 
            },
            include: {
                subscriptionPlans: true
            }
            
        });

        if (!findUser) throw new HttpException(404, "The uer is not valid");

        console.log(findUser);



        var signed_url_restrictions = {
            //limit viewing for the next 12 hours
            exp: Math.floor(Date.now() / 1000) + (12 * 60 * 60)
        };

        let movie_token = await axios.post(
            `https://api.cloudflare.com/client/v4/accounts/d14915df601309efeb88d9205c0789f0/stream/${movie_id}/token`,
            JSON.stringify(signed_url_restrictions),
            {
                headers: {
                    'X-Auth-Email': 'danielsoromou02@gmail.com',
                    'X-Auth-Key': 'f49bddf52ac670859d01913a6baeb855b4ff2',
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            }
        );

        console.log(movie_token.data.result.token);

        return movie_token.data.result.token;
    }
}

export default MoviesService;

