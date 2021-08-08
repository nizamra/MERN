import { Link } from '@reach/router';
import React from 'react'
import DeleteButton from '../productFolder/DeleteButton';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    root: {
        width: 290,
        height: 250,
        display: 'inline-block',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const ProductsList = (props) => {
    const classes = useStyles();
    const { products, setProducts } = props;
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return (
        <div>
            <h3>entering the List of All</h3>
            {products.map((product, idx) => {
                return <Card className={classes.root} variant="outlined" key={idx}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {product.title}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <Link to={`/product/${product._id}`}>
                                {product.title}
                            </Link>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Price: {product.price}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {product.description}
                            <br />
                            created: {product.createdAt}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                        <Link to={"/product/" + product._id + "/edit"}>
                        <IconButton aria-label="editing">
                            <CreateOutlinedIcon />
                        </IconButton>
                        </Link>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            })}
        </div>
    )
}

export default ProductsList;