import Counter from "../components/Counter";
import EditProduct from "../components/EditProduct";
import FnCounter from "../components/FnCounter";
import GadgetStore from "../components/GadgetStore";
import Hello from "../components/Hello";
import HelloWithErrors from "../components/HelloWithErrors";
import ListProducts from "../components/ListProducts";
import Login from "../components/Login";
import RxjsGadgetStore from "../components/RxjsGadgetStore";
import RxjsViewCart from "../components/RxjsViewCart";
import ViewCart from "../components/ViewCart";

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
        isProtected: false
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
    },
    {
        path: "/gadgets",
        component: GadgetStore,
        title: "Gadget Store",
        isInMainMenu: true,
        isProtected: true
    },
    {
        path: "/viewcart",
        component: ViewCart,
        title: "View Cart",
        isInMainMenu: true,
        isProtected: true
    },
    {
        path: "/rxjsgadgets",
        component: RxjsGadgetStore,
        title: "Rxjs Gadget Store",
        isInMainMenu: true,
        isProtected: false
    },
    {
        path: "/rxjsviewcart",
        component: RxjsViewCart,
        title: "Rxjs View Cart",
        isInMainMenu: true,
        isProtected: false
    },
    {
        path: "/helloerror",
        component: HelloWithErrors,
        title: "Error Boundary",
        isInMainMenu: true,
        isProtected: false
    }


]