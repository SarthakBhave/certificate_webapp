import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/login";
import Field from "@/components/simpleupload";
import Select from "@/components/selection";
import imagepreview from "@/components/imagepreview";

const routes = [{
        name: imagepreview,
        component: imagepreview,
        path: '/preview',
    },
    {
        name: Select,
        component: Select,
        path: '/selection',
    },
    {
        name: Field,
        component: Field,
        path: '/upload',
    },
    {
        name: Login,
        component: Login,
        path: '/login',
    },
    {
        name: "Helloworld",
        component: HelloWorld,
        path: '/',
    }

]
export default routes