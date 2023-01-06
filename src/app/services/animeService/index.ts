import apolloClient from "../../graphql";
import { GET_ANIME_PAGE } from "./queries";
import { GetAnimePage } from "./__generated__/GetAnimePage";

class AnimeService {
  getAnimePage = async (
    page: Number,
    perPage = 5
  ): Promise<GetAnimePage["Page"]> => {
    try {
      const response = await apolloClient.query({
        query: GET_ANIME_PAGE,
        variables: { page, perPage },
      });

      if (!response || !response.data)
        throw new Error("Cannot get anime list!");

      return response.data.Page;
    } catch (err) {
      throw err;
    }
  };
}

export default new AnimeService();
