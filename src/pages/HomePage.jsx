import React from "react";
import MiddleHome from "../components/MiddleHome";
// import Permission from "../components/Permission";

export default function HomePage() {
    // const [showPermissionAlert, setShowPermissionAlert] = useState(false);
    // const permission = JSON.parse(window.localStorage.getItem("permission", JSON.stringify(false)));
    // useEffect(() => {
    //     if(permission === null || permission === false){
    //         setShowPermissionAlert(true)
    //     }
    // }, [permission])
    return (
        <>
        <MiddleHome />
        {/* {
            showPermissionAlert
            &&
            <Permission />
        } */}
        </>
    )
}