import router from "../router/index"
import { ref, watch } from "vue";
let splitRoute: any = ref("");
const routeName = ref();

export const checkRoute = ()=>{    
    splitRoute.value = router.currentRoute.value.fullPath.split("/");
    routeName.value =router.currentRoute.value.name
    watch(
        () => router.currentRoute.value.fullPath,
        () => {
            splitRoute.value = router.currentRoute.value.fullPath.split("/");
            routeName.value =router.currentRoute.value.name       
        }
    ); 

    return {
        splitRoute,
        routeName,
    }
}
