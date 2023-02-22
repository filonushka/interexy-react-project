import { Grid } from "@mui/material";
import { ArticlesArr } from "../../const";
import Article, { IArticleData } from "../../components/article/article";

function Home() {
  return <div>
     <Grid
            container
            spacing={2}
            p={1}
            sx={{ justifyContent: "center", mt: 3 }}
        >
            {ArticlesArr.map((article: IArticleData, index) => (
                <Grid item key={index}>
                    <Article title={article.title} text={article.text} />
                </Grid>
             ))} 
        </Grid>
  </div>;
}

export default Home;
