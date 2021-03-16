import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './TEA/common/util/hoc/auth';
// pages for this product
import LandingPage from './TEA/common/layout/LandingPage/LandingPage';
import LoginPage from './TEA/common/member/page/LoginPage/LoginPage';
import RegisterPage from './TEA/common/member/page/RegisterPage/RegisterPage';
import NavBar from './TEA/common/layout/NavBar/NavBar';
import Footer from './TEA/common/layout/Footer/Footer';
import AddProductPage from './TEA/product/page/pages/AddProductPage';
import ProductListPage from './TEA/product/page/pages/ProductListPage';
import CartPage from './TEA/product/page/pages/CartPage';
import ReviewManyPage from './TEA/product/page/pages/review/ReviewManyPage';
import PostListPage from './TEA/product/page/pages/review/PostListPage';
import PostPage from './TEA/product/page/pages/review/PostPage';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NavBar />
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
                <Switch>
                    <Route exact path="/" component={Auth(LandingPage, null)} />
                    <Route exact path="/login" component={Auth(LoginPage, false)} />
                    <Route exact path="/register" component={Auth(RegisterPage, false)} />
                    <Route exact path="/product/add" component={Auth(AddProductPage, true)} />
                    <Route exact path="/product/list" component={Auth(ProductListPage, true)} />
                    <Route exact path="/product/cart" component={Auth(CartPage, true)} />
                    <Route exact path="/review/postlistpage" component={Auth(PostListPage, true)} />
                    <Route exact path="/review/reviewmany" component={Auth(ReviewManyPage, true)} />
                    <Route
                        exact
                        path="/review/postpage/@:username/:postId"
                        component={Auth(PostPage, true)}
                    />
                </Switch>
            </div>
            <Footer />
        </Suspense>
    );
}

export default App;
