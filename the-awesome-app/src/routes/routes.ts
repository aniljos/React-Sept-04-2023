import Counter from "../components/Counter";
import EditProduct from "../components/EditProduct";
import FnCounter from "../components/FnCounter";
import Hello from "../components/Hello";
import ListProducts from "../components/ListProducts";
import Login from "../components/Login";

type Route = {
    path: string;
    component: any,
    title?: string, 
    props?: any,
    isInMainMenu: boolean,
    isProtected: boolean
}

export const appRoutes: Route[] = [
    
    {
        path: "/",
        component: Hello,
        title: "Home",
        props: {message: "Hello React"},
        isInMainMenu: true,
        isProtected: false
    },
    {
        path: "/counter",
        component: Counter,
        title: "Counter",
        props: {initValue: 10},
        isInMainMenu: true,
        isProtected: false
    },
    {
        path: "/fncounter",
        component: FnCounter,
        title: "FnCounter",
        props: {initValue: 10},
        isInMainMenu: true,
        isProtected: true
    },
    {
        path: "/products",
        component: ListProducts,
        title: "Products",
        isInMainMenu: true,
        isProtected: true
    },
    {
        path: "/products/:id",
        component: EditProduct,
        isInMainMenu: false,
        isProtected: true
    },
    {
        path: "/login",
        component: Login,
        title: "Login",
        isInMainMenu: true,
        isProtected: false
    }


]