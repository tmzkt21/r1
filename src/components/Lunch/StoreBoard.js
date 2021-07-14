import React from 'react';
import StoreList from "./StoreList";
import StoreCart from "./StoreCart";
import StoreMap from "./StoreMap";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from "./Header";
import FoodCard from "./FoodCard";

// 함수를 실행할땐 안쓰고싶음 변수로 만들어서 필요할떄만
const StoreBoard = () => {
    return (
        <div>
            <Header></Header>
            <h1>맛집위치</h1>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <StoreMap></StoreMap>
                </Grid>
                <Grid item xs={4}>
                    <StoreList></StoreList>
                </Grid>
                <Grid item xs={4}>
                    <StoreCart></StoreCart>
                </Grid>
                <Grid item xs={4}>
                    <FoodCard></FoodCard>
                </Grid>

                <hr/>
            </Grid>
        </div>
    );
};

export default StoreBoard;