
import { Card, CardContent, Typography } from "@mui/material";

export interface IArticleData {
    title: string;
    text: string;
}

const Article = ({ title, text }: IArticleData) => {
    return (
        <Card sx={{ width: 500, backgroundColor: "#AED6F1" }}>
            <CardContent>
                <Typography variant="h5" component="p">
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                >
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Article;