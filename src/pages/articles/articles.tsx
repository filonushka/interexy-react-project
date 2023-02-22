import { Grid } from "@mui/material";
import Article, { IArticleData } from "../../components/article/article";
import { ArticlesArr } from "../../const";

const ArticlesPage = () => {
    return (
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
    );
};

export default ArticlesPage;
